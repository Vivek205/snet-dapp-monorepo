import { GlobalRoutes } from "../../GlobalRouter/Routes";
import WhatDoWithPublisher from "shared/dist/assets/images/services.png";
import YoutubeVideoFrame from "shared/dist/assets/images/youtubeVideoFrame.png";

export const overViewArticles = [
  {
    title: "Try Publisher Free Today",
    description:
      "Publish your AI services to the largest open decentralized AI marketplace blockchain and reach customers around the world. You’ll also get access to beta software, advanced AI app capabilities, extensive beta testing tools, and AI usage analytics.",
    media: YoutubeVideoFrame,
    btnDetails: {
      text: "get started",
      type: "blue",
      linkTo: `${GlobalRoutes.ENROLL.path}`,
    },
  },
  {
    title: "What you can do with Publisher",
    list: [
      {
        title: "Launch AI services faster: ",
        description:
          " Publisher infrastructure helps AI teams work better together by unifying AI services in one hub, so developers, business managers, and other professionals can build simultaneously..",
      },
      {
        title: "Store and control AI in one hub: ",
        description:
          " Editors and developers can easily test, refine, and deploy changes to mulitple platforms, and global regions from one interface.",
      },
      {
        title: "Engage new AI experiences: ",
        description:
          " Track usage analytics of your global consumer users to improve your AI.  Track and collect bounties on requested AI services from the AI developer community.  Increase your global exposure.",
      },
    ],
    media: WhatDoWithPublisher,
    btnDetails: {
      text: "see how it works",
      type: "transparentBlueBorder",
      linkTo: `${GlobalRoutes.HOW_IT_WORKS.path}`,
    },
  },
];

export const getInTouch = {
  title: "More Questions? Get in Touch.",
  description:
    "We can help you tackle demanding challenges, whether you’re a developer, business manager, or marketer. Our tools work together so that you and your team can improve your AI service performances while gaining valuable user insights.  Connect with us so we can assist you with the most optimal solutions.",
};
