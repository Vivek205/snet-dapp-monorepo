import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import InfoIcon from "@material-ui/icons/Info";

import SNETImageUpload from "shared/dist/components/SNETImageUpload";
import DummyCardImg from "shared/dist/assets/images/dummy-card.png";
import SNETTextfield from "shared/dist/components/SNETTextfield";
import SNETTextarea from "shared/dist/components/SNETTextarea";
import SNETButton from "shared/dist/components/SNETButton";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import AlertText from "shared/dist/components/AlertText";
import validator from "shared/dist/utils/validator";
import { serviceProfileValidationConstraints } from "./validationConstraints";
import ValidationError from "shared/dist/utils/validationError";
import { checkIfKnownError } from "shared/dist/utils/error";
import { keyCodes } from "shared/dist/utils/keyCodes";
import { ServiceCreationRoutes } from "../ServiceCreationRouter/Routes";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";
import { useStyles } from "./styles";
import { assetTypes } from "../../../Utils/FileUpload";
import { base64ToArrayBuffer } from "shared/dist/utils/FileUpload";
import ServiceIdAvailability from "./ServiceIdAvailability";
import { serviceIdAvailability } from "../constant";
import { GlobalRoutes } from "../../../GlobalRouter/Routes";

let validateTimeout = "";

const selectState = state => ({
  serviceDetails: state.aiServiceDetails,
  isValidateServiceIdLoading: state.loader.validateServiceId.isLoading,
});

const Profile = ({ classes }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { orgUuid } = useParams();
  const { serviceDetails, isValidateServiceIdLoading } = useSelector(selectState);

  const [tags, setTags] = useState(""); // Only to render in the chip comp

  const [alert, setAlert] = useState({});

  const setServiceTouchedFlag = () => {
    // TODO - See if we can manage from local state (useState()) instead of redux state
    dispatch(aiServiceDetailsActions.setServiceTouchedFlag(true));
  };

  const validateServiceId = serviceId => async () => {
    // Call the API to Validate the Service Id
    try {
      const serviceAvailability = await dispatch(aiServiceDetailsActions.validateServiceId(orgUuid, serviceId));
      dispatch(aiServiceDetailsActions.setServiceAvailability(serviceAvailability));
    } catch (error) {
      dispatch(aiServiceDetailsActions.setServiceAvailability(""));
    }
  };

  const debouncedValidate = (newServiceId, timeout = 200) => {
    if (newServiceId === serviceDetails.id && Boolean(newServiceId)) {
      dispatch(aiServiceDetailsActions.setServiceAvailability(serviceIdAvailability.AVAILABLE));
      return clearTimeout(validateTimeout);
    }
    if (validateTimeout) {
      clearTimeout(validateTimeout);
    }
    validateTimeout = setTimeout(validateServiceId(newServiceId), timeout);
  };

  const handleWebsiteValidation = value => {
    const isNotValid = validator.single(value, serviceProfileValidationConstraints.website);
    if (isNotValid) {
      return setAlert({ type: alertTypes.ERROR, message: `${value} is not a valid URL` });
    }
    return setAlert({ type: alertTypes.SUCCESS, message: "website is valid" });
  };

  const handleControlChange = event => {
    const { name, value } = event.target;
    setServiceTouchedFlag();
    if (name === "id") {
      debouncedValidate(value);
      return dispatch(aiServiceDetailsActions.setAiServiceDetailLeaf("newId", value));
    }
    if (name === "projectURL") {
      handleWebsiteValidation(value);
    }
    dispatch(aiServiceDetailsActions.setAiServiceDetailLeaf(name, value));
  };

  const handleSave = async () => {
    const serviceName = serviceDetails.name;
    const serviceId = serviceDetails.newId ? serviceDetails.newId : serviceDetails.id;

    const isNotValid = validator({ serviceName, serviceId }, serviceProfileValidationConstraints);

    if (isNotValid) {
      throw new ValidationError(isNotValid[0]);
    }
    if (Boolean(serviceDetails.newId) && serviceDetails.availability !== serviceIdAvailability.AVAILABLE) {
      throw new ValidationError("Service id is not available. Try with a different service id");
    }
    if (serviceDetails.touched) {
      // Call API to save
      await dispatch(aiServiceDetailsActions.saveServiceDetails(orgUuid, serviceDetails.uuid, serviceDetails));
    }

    return;
  };

  const handleContinue = async () => {
    try {
      await handleSave();
      history.push(
        ServiceCreationRoutes.DEMO.path.replace(":orgUuid", orgUuid).replace(":serviceUuid", serviceDetails.uuid)
      );
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

    const localItems = serviceDetails.tags;

    tagsEntered.forEach(tag => {
      tag = tag.replace(/\s/g, "");
      const index = localItems.findIndex(el => el === tag);
      if (index === -1) {
        localItems.push(tag);
      }
    });

    dispatch(aiServiceDetailsActions.setAiServiceDetailLeaf("tags", [...localItems]));
    setServiceTouchedFlag();
  };

  const handleDeleteTag = tag => {
    const localItems = serviceDetails.tags;
    const index = localItems.findIndex(el => el === tag);
    localItems.splice(index, 1);

    // Set State
    dispatch(aiServiceDetailsActions.setAiServiceDetailLeaf("tags", [...localItems]));
    setServiceTouchedFlag();
  };

  const handleImageChange = async (data, mimeType, _encoding, filename) => {
    const arrayBuffer = base64ToArrayBuffer(data);
    const fileBlob = new File([arrayBuffer], filename, { type: mimeType });
    setServiceTouchedFlag();
    const { url } = await dispatch(
      aiServiceDetailsActions.uploadFile(assetTypes.SERVICE_ASSETS, fileBlob, orgUuid, serviceDetails.uuid)
    );
    dispatch(aiServiceDetailsActions.setServiceHeroImageUrl(url));
  };

  const handleFinishLater = async () => {
    try {
      await handleSave();
      history.push(GlobalRoutes.SERVICES.path.replace(":orgUuid", orgUuid));
    } catch (error) {
      if (checkIfKnownError(error)) {
        return setAlert({ type: alertTypes.ERROR, message: error.message });
      }
      return setAlert({ type: alertTypes.ERROR, message: "something went wrong" });
    }
  };

  return (
    <Grid container className={classes.profileContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">AI Service Profile Information</Typography>
        <div className={classes.wrapper}>
          <Typography className={classes.description}>
            Please enter the description and details of the service you wish to add to the AI marketplace, making sure
            your descriptions are clear as this will be displayed on the AI marketplace.
          </Typography>

          <SNETTextfield
            icon
            name="name"
            label="AI Service Name"
            minCount={serviceDetails.name.length}
            maxCount={50}
            description="The name of your service has to be unique within your organization"
            value={serviceDetails.name}
            onChange={handleControlChange}
          />
          <div className={classes.serviceIdContainer}>
            <SNETTextfield
              icon
              name="id"
              label="AI Service Id"
              minCount={serviceDetails.newId ? serviceDetails.newId.length : serviceDetails.id.length}
              maxCount={50}
              description="The ID of your service has to be unique withing your organization"
              value={serviceDetails.newId ? serviceDetails.newId : serviceDetails.id}
              onChange={handleControlChange}
            />
          </div>
          <ServiceIdAvailability
            serviceDetails={serviceDetails}
            id={serviceDetails.newId || serviceDetails.id}
            availability={serviceDetails.availability}
            classes={classes}
            loading={isValidateServiceIdLoading}
          />
          <div className={classes.shortDescContainer}>
            <SNETTextarea
              showInfoIcon
              name="shortDescription"
              label="Short Description"
              minCount={serviceDetails.shortDescription.length}
              maxCount={160}
              rowCount={3}
              colCount={105}
              value={serviceDetails.shortDescription}
              onChange={handleControlChange}
            />
          </div>

          <div className={classes.longDescContainer}>
            <SNETTextarea
              showInfoIcon
              name="longDescription"
              label="Long Description"
              minCount={serviceDetails.longDescription.length}
              maxCount={5000}
              rowCount={8}
              colCount={105}
              value={serviceDetails.longDescription}
              onChange={handleControlChange}
            />
          </div>

          <SNETTextfield
            icon
            name="tags"
            label="Input Tags"
            extraInfo="Insert multiple items separated by comma, hit enter to add"
            value={tags}
            onKeyUp={handleAddTags}
            onChange={e => setTags(e.target.value.toLowerCase())}
          />
          <div className={classes.addedTagsContainer}>
            <div>
              <InfoIcon />
              <span className={classes.addTagLabel}>Added Tags</span>
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
            </div>
            <span className={classes.addTagExtraInfo}>You can add up to 20 tag items</span>
          </div>

          <div className={classes.projUrlContainer}>
            <SNETTextfield
              name="projectURL"
              label="Project URL"
              description="The website URL of the service will be displayed to users under your AI service page. GitHub links are recommended."
              value={serviceDetails.projectURL}
              onChange={handleControlChange}
            />
            <AlertText type={alert.type} message={alert.message} />
          </div>
          <div className={classes.contributorsContainer}>
            <SNETTextfield
              icon
              name="contributors"
              label="Contributors"
              minCount={serviceDetails.contributors.length}
              maxCount={100}
              value={serviceDetails.contributors}
              onChange={handleControlChange}
            />
          </div>

          <div className={classes.profileImgContainer}>
            <Typography variant="subtitle1">AI Service Profile Image</Typography>
            <div className={classes.uploaderContentConatiner}>
              <div className={classes.imgUploader}>
                <SNETImageUpload
                  disableUrlTab
                  imageName="service-hero-image"
                  imageDataFunc={handleImageChange}
                  outputImage={serviceDetails.assets.heroImage.url}
                  outputImageName="service_hero_image"
                  outputFormat="image/*"
                  disableComparisonTab
                  disableInputTab={Boolean(serviceDetails.assets.heroImage.url)}
                  outputImageType="url"
                  disableResetButton={false}
                  disableDownloadButton={true}
                  // returnByteArray
                />
              </div>
              <div className={classes.profileImgContent}>
                <Typography variant="subtitle2">
                  Every AI service will have a profile image. We recommend an image that is 906 x 504 in size. You can
                  preview how it will look on the AI Marketplace.
                </Typography>
                <Typography variant="subtitle2">
                  We encourage to find a representative image for your service that will attract users to explore your
                  page and service.
                </Typography>
              </div>
            </div>
            <div className={classes.images}>
              <div className={classes.largeImg}>
                <img src={serviceDetails.assets.heroImage.url || DummyCardImg} alt="Large Size" />
                <Typography className={classes.imgDimensionDetails}>302 x 168 | 32-bit PNG or JPG </Typography>
              </div>
              <div className={classes.smallerImg}>
                <img src={serviceDetails.assets.heroImage.url || DummyCardImg} alt="Small Size" />
                <Typography className={classes.imgDimensionDetails}>207 x 115 | 32-bit PNG or JPG </Typography>
              </div>
            </div>
          </div>
          {alert.message ? (
            <div className={classes.alertContainer}>
              <AlertBox type={alert.type} message={alert.message} />
            </div>
          ) : null}
        </div>
      </Grid>

      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.btnContainer}>
        <SNETButton children="finish later" color="primary" variant="text" onClick={handleFinishLater} />
        {/*<SNETButton children="preview" color="primary" variant="contained" />*/}
        <SNETButton children="continue" color="primary" variant="contained" onClick={handleContinue} />
      </Grid>
    </Grid>
  );
};
export default withStyles(useStyles)(Profile);
