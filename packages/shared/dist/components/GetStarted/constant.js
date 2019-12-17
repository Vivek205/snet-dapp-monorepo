"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetStartedCategoriesData = void 0;

var imgPath = function imgPath() {
  var directory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "RateReviewImprove";
  var file = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "RatingAIServices";
  var extension = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "png";
  return "".concat(process.env.REACT_APP_SNET_CDN, "/assets/images/GetStarted/").concat(directory, "/").concat(file, ".").concat(extension);
};

var GetStartedCategoriesData = [{
  title: "Getting Started",
  media: imgPath("RateReviewImprove", "RatingAIServices"),
  content: [{
    type: "description",
    value: "<p>If you\u2019re new to development on SingularityNET Platforms, you can get started with our tools and resources for free. If you\u2019re ready to build more advanced capabilities and distribute your AI services on the AI Marketplace, enroll in the Dev Publisher Program for free.</p>"
  }, {
    type: "action",
    value: {
      type: "blue",
      btnText: "start enrollment"
    },
    linkTo: ""
  }]
}, {
  title: "Managing Your Account",
  media: imgPath("RateReviewImprove", "RatingAIServices"),
  content: [{
    type: "description",
    value: "<p>As a member, you have full access to the resources you need to configure AI services and to submit new AI services and updates. If you\u2019ve enrolled as an organization, you can invite additional developers to your team within your account. <a href=\"/\">Learn How to  Manage Your Account.</a></p>"
  }]
}, {
  title: "Building Your AI Services",
  media: imgPath("RateReviewImprove", "RatingAIServices"),
  content: [{
    type: "description",
    value: "<p>Take advantage of a comprehensive set of frameworks you can implement in your AI service  to support advanced service capabilities and services other platforms. <a href=\"/\"> View Developer Resources.</a></p>"
  }]
}, {
  title: "Distributing Your AI Services",
  media: imgPath("RateReviewImprove", "RatingAIServices"),
  content: [{
    type: "description",
    value: "<p>Lorem ipsum dolor sit amet, sed tempor tincidunt ne, ex choro interpretaris qui. Eu per modo apeirian, modus summo omittantur te nec. Amet elit vituperatoribus ex his. Et natum tractatos euripidis est, sed delenit sensibus deterruisset cu,  explicari ea mel. Lorem Ipsum Link</p>"
  }]
}, {
  title: "Enroll Free Today",
  media: imgPath("RateReviewImprove", "RatingAIServices"),
  content: [{
    type: "description",
    value: "<p>Take advantage of a comprehensive set of frameworks you can implement in your AI service  to support advanced service capabilities and services other platforms.</p>"
  }, {
    type: "action",
    value: {
      type: "blue",
      btnText: "start enrollment"
    },
    linkTo: ""
  }]
}];
exports.GetStartedCategoriesData = GetStartedCategoriesData;