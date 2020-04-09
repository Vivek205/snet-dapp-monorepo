import React from "react";
import SlackFeedback from "react-slack-feedback";
import { useDispatch, useSelector } from "react-redux";
import slackFeedbackTheme from "./theme";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import { feedbackActions } from "../../Services/Redux/actionCreators/userActions";

const UserFeedbackSlack = () => {
  const { email, isLoggedIn } = useSelector(state => ({ email: state.user.email, isLoggedIn: state.user.isLoggedIn }));
  const dispatch = useDispatch();

  const handleSubmit = async (payload, success, error) => {
    try {
      await dispatch(feedbackActions.sendSlackFeedback(payload));
      success();
    } catch (e) {
      error("Unable to reach server. Please try again");
    }
  };

  const handleImageUpload = (_image, success, _error) => {
    success(
      "https://cdn.vox-cdn.com/thumbor/KnDazOvqFmoy-hx8C3YDD0wLQEw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13572496/SpiderVerse_cropped.jpg"
    );
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div>
      <SlackFeedback
        channel="#publisher-dapp-user-feedback"
        theme={slackFeedbackTheme} // (optional) See src/themes/default for default theme
        user={email || "anonymous"} // The logged in user (default = "Unknown User")
        onImageUpload={handleImageUpload}
        icon={() => <ModeCommentIcon style={{ marginRight: 8 }} />}
        onSubmit={handleSubmit}
        showChannel={false}
      />
    </div>
  );
};

export default UserFeedbackSlack;
