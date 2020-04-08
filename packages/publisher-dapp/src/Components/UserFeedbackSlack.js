import React from "react";
import SlackFeedback, { themes } from "react-slack-feedback";
import { APIEndpoints, APIPaths } from "../Services/AWS/APIEndpoints";
import { useSelector } from "react-redux";
import { APIError, httpStatus } from "shared/dist/utils/API";

const UserFeedbackSlack = () => {
  const email = useSelector(state => state.user.email);
  const handleSubmit = async (payload, success, error) => {
    try {
      const url = APIEndpoints.SLACK_HOOK.endpoint + APIPaths.SLACK_POST_FEEDBACK;
      const response = await fetch(url, { method: "POST", body: JSON.stringify(payload) });
      if (response.status !== httpStatus.SUCCESS) {
        throw new APIError();
      }
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

  return (
    <div>
      <SlackFeedback
        channel="#publisher-dapp-user-feedback"
        theme={themes.dark} // (optional) See src/themes/default for default theme
        user={email || "anonymous"} // The logged in user (default = "Unknown User")
        onImageUpload={handleImageUpload}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default UserFeedbackSlack;
