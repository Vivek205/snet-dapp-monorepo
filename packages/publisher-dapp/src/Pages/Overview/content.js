import { GlobalRoutes } from "../../GlobalRouter/Routes";

export const overViewArticles = [
  {
    title: "Try Publisher Free Today",
    description:
      "Publish your AI services to the largest open decentralized AI marketplace blockchain and reach customers around the world. You’ll also get access to beta software, advanced AI app capabilities, extensive beta testing tools, and AI usage analytics.",
    media: "http://placehold.it/736x416",
    btnDetails: {
      text: "get started",
      type: "blue",
      linkTo: `${GlobalRoutes.ENROLL.path}`,
    },
  },
  {
    title: "What you can do with Publisher",
    list: [
      "Launch AI services faster:  Publisher infrastructure helps AI teams work better together by unifying AI services in one hub, so developers, business managers, and other professionals can build simultaneously..",
      "Store and control AI in one hub:  Editors and developers can easily test, refine, and deploy changes to mulitple platforms, and global regions from one interface.",
      "Engage new AI experiences:  Track usage analytics of your global consumer users to improve your AI.  Track and collect bounties on requested AI services from the AI developer community.  Increase your global exposure.",
    ],
    media: "http://placehold.it/736x416",
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
