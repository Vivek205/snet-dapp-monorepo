import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import isEmpty from "lodash/isEmpty";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";

import SNETImageUpload from "shared/dist/components/SNETImageUpload";
import DummyCardImg from "shared/dist/assets/images/dummy-card.png";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETTextarea from "shared/dist/components/SNETTextarea";
import SNETButton from "shared/dist/components/SNETButton";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import AlertText from "shared/dist/components/AlertText";
import validator from "shared/dist/utils/validator";
import { serviceValidationConstraints } from "./validationConstraints";
import ValidationError from "shared/dist/utils/validationError";
import { checkIfKnownError } from "shared/dist/utils/error";
import { keyCodes } from "shared/dist/utils/keyCodes";
//import { mimeTypeToFileType } from "shared/dist/utils/image";
import { imgSrcInBase64 } from "shared/dist/utils/image";

import { ServiceCreationRoutes } from "../ServiceCreationRouter/Routes";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";
import { useStyles } from "./styles";

const Profile = ({ classes, _location }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const serviceDetails = useSelector(state => state.aiServiceDetails);

  const [tags, setTags] = useState(""); // Only to render in the chip comp
  //const [items, setItems] = useState(serviceDetails.tags); // This should be set while assigning the values

  const [alert, setAlert] = useState({});

  // TODO: Get from the defaults
  const [mimeType, setMimeType] = useState("");
  //const [url, SetURL] = useState(undefined);
  const url = "";
  const [data, setData] = useState("");

  // TODO: Need to get the Org UUID from Redux
  const orgUuid = "test_org_uuid";

  const setServiceTouchFlag = () => {
    // TODO - See if we can manage from local state (useState()) instead of redux state
    dispatch(aiServiceDetailsActions.setServiceTouchFlag(true));
  };

  const handleControlChange = event => {
    setServiceTouchFlag();
    dispatch(aiServiceDetailsActions.setAiServiceDetailLeaf(event.target.name, event.target.value));
  };

  const validateServiceId = async event => {
    // Call the API to Validate the Service Id
    try {
      await dispatch(aiServiceDetailsActions.validateServiceId(orgUuid, event.target.value));
    } catch (error) {
      dispatch(aiServiceDetailsActions.setServiceAvailability(""));
    }
  };

  const handleContinue = async () => {
    try {
      const serviceName = serviceDetails.name;
      const serviceId = serviceDetails.id;

      const isNotValid = validator({ serviceName, serviceId }, serviceValidationConstraints);

      if (isNotValid) {
        throw new ValidationError(isNotValid[0]);
      }

      if (serviceDetails.touch) {
        // Call API to save
        await dispatch(aiServiceDetailsActions.saveServicedetails(orgUuid, serviceDetails.uuid, serviceDetails));
      }

      history.push(ServiceCreationRoutes.DEMO.path);
    } catch (error) {
      if (checkIfKnownError(error)) {
        return setAlert({ type: alertTypes.ERROR, message: error.message });
      }
      return setAlert({ type: alertTypes.ERROR, message: "something went wrong" });
    }
  };

  const handleAddTags = event => {
    if (event.keyCode === keyCodes.enter) {
      const localTags = tags;
      setTags("");
      handleKeyEnterInTags(localTags);
    }
  };

  const handleKeyEnterInTags = () => {
    const tagsEntered = tags.split(",");
    //const localItems = items;

    const localItems = serviceDetails.tags;

    tagsEntered.forEach(tag => {
      tag = tag.replace(/\s/g, "");
      const index = localItems.findIndex(el => el === tag);
      if (index === -1) {
        localItems.push(tag);
      }
    });

    dispatch(aiServiceDetailsActions.setAiServiceDetailLeaf("tags", [...localItems]));
    setServiceTouchFlag();
  };

  const handleDeleteTag = tag => {
    const localItems = serviceDetails.tags;
    const index = localItems.findIndex(el => el === tag);
    localItems.splice(index, 1);

    // Set State
    dispatch(aiServiceDetailsActions.setAiServiceDetailLeaf("tags", [...localItems]));
    setServiceTouchFlag();
  };

  const handleImageChange = (data, mimeType) => {
    //const fileType = mimeTypeToFileType(mimeType);
    // Call API to Store the Image
    setData(data);
    setMimeType(mimeType);
    setServiceTouchFlag();
  };

  const imgSource = () => {
    if (url) {
      return url;
    }
    return Boolean(data) ? imgSrcInBase64(mimeType, data) : "";
  };

  return (
    <Grid container className={classes.profileContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">AI Service Profile Information</Typography>
        <div className={classes.wrapper}>
          <Typography className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur et mihi. Accusatores directam qui ut accusatoris. Communiter
            videbatur hominum vitam ut qui eiusdem fore accommodatior maximis vetere communitatemque.
          </Typography>

          <SNETTextfield
            icon
            name="name"
            label="AI Service Name"
            minCount={0}
            maxCount={50}
            description="The name of your service cannot be same name as another serviceDetails."
            value={serviceDetails.name}
            onChange={handleControlChange}
          />
          <SNETTextfield
            icon
            name="id"
            label="AI Service Id"
            minCount={0}
            maxCount={50}
            description="The Id of your service to uniquely identity in the organization."
            value={serviceDetails.id}
            onChange={handleControlChange}
            onBlur={validateServiceId}
          />
          <div>
            <AlertText
              type={serviceDetails.availability === "AVAILABLE" ? alertTypes.INFO : alertTypes.ERROR}
              message={!isEmpty(serviceDetails.id) ? `Service Id is ${serviceDetails.availability}` : ""}
            />
          </div>

          <SNETTextarea
            showInfoIcon
            name="shortDescription"
            label="Short Description"
            minCount={0}
            maxCount={160}
            rowCount={3}
            colCount={105}
            value={serviceDetails.shortDescription}
            onChange={handleControlChange}
          />
          <SNETTextarea
            showInfoIcon
            name="longDescription"
            label="Long Description"
            minCount={0}
            maxCount={5000}
            rowCount={8}
            colCount={105}
            value={serviceDetails.longDescription}
            onChange={handleControlChange}
          />

          <SNETTextfield
            icon
            name="tags"
            label="Service Tags"
            description="Enter all the TAGs separated by comma and press enter"
            value={tags}
            onKeyUp={handleAddTags}
            onChange={e => setTags(e.target.value)}
          />
          <Card className={classes.card}>
            {serviceDetails.tags.map(tag => (
              <Chip
                className={classes.chip}
                key={tag}
                label={tag}
                color="primary"
                onDelete={() => handleDeleteTag(tag)}
              />
            ))}
          </Card>

          <SNETTextfield
            name="projectURL"
            label="Project URL"
            description="The Website URL will be displayed to users under your AI service page. Recommend Github links"
            value={serviceDetails.projectURL}
            onChange={handleControlChange}
          />

          <SNETTextfield
            icon
            name="contributors"
            label="Contributors"
            minCount={0}
            maxCount={100}
            value={serviceDetails.contributors}
            onChange={handleControlChange}
          />

          <div className={classes.profileImgContainer}>
            <Typography variant="subtitle1">AI Service Profile Image</Typography>
            <div className={classes.uploaderContentConatiner}>
              <div className={classes.imgUploader}>
                <SNETImageUpload
                  disableUrlTab
                  imageName="service-hero-image"
                  imageDataFunc={handleImageChange}
                  outputImage={imgSource()}
                  outputImageName="service_hero_image"
                  outputFormat={mimeType}
                  disableComparisonTab
                  disableInputTab={Boolean(data) || Boolean(url)}
                  outputImageType="url"
                  disableResetButton={false}
                  disableDownloadButton={true}
                />
              </div>
              <div className={classes.profileImgContent}>
                <Typography variant="subtitle2">
                  Every AI service will have a profile image. We recommend an image that is 906 x 504 in size. You can
                  preview how it will look on the AI Marketpalce.
                </Typography>
                <Typography variant="subtitle2">
                  We encourage to find a representative image for your service to attract users explore your page and
                  serviceDetails.
                </Typography>
              </div>
            </div>
            <div className={classes.images}>
              <div className={classes.largeImg}>
                <img src={Boolean(data) ? `data:${mimeType};base64,${data}` : DummyCardImg} alt="Large Size Image" />
                <Typography className={classes.imgDimensionDetails}>302 x 168 | 32-bit PNG or JPG </Typography>
              </div>
              <div className={classes.smallerImg}>
                <img src={Boolean(data) ? `data:${mimeType};base64,${data}` : DummyCardImg} alt="Small Size Image" />
                <Typography className={classes.imgDimensionDetails}>207 x 115 | 32-bit PNG or JPG </Typography>
              </div>
            </div>
          </div>

          <AlertBox type={alert.type} message={alert.message} />
        </div>
      </Grid>

      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.btnContainer}>
        <SNETButton children="finish later" color="primary" variant="text" />
        <SNETButton children="preview" color="primary" variant="contained" />
        <SNETButton children="continue" color="primary" variant="contained" onClick={handleContinue} />
      </Grid>
    </Grid>
  );
};
export default withStyles(useStyles)(Profile);
