import DiscussionImage from "shared/dist/assets/images/Discussion.png";
import DocumentationImage from "shared/dist/assets/images/Documentation.png";
import TelegramImage from "shared/dist/assets/images/Telegram.png";

export const communityDetails = [
  {
    to: "https://community.singularitynet.io/",
    image: DiscussionImage,
    title: "Join the Discussion",
    description: "Get in touch with community experts and other users in the SingularityNET Staking Help forum.",
  },
  {
    to: "https://dev.singularitynet.io/products/staking/",
    image: DocumentationImage,
    title: "Full Staking Documentation",
    description:
      "Learn more about the stages of the staking process and what happens to your AGI tokens whilst they are staked.",
  },
  {
    to: "https://telegram.me/singularitynet",
    image: TelegramImage,
    title: "Telegram Community",
    description:
      "Did not find the answers you were looking for?  Reach out to us and we will response to your questions as soon as possible.",
  },
];

export const generalFAQ = [
  {
    question: "What browser and wallet combination is supported?",
    answer: `<p>The staking DApp works only with Metamask. Our recommended combinations are</p> 
      <ol>
      <li>Chrome with latest stable version of Metamask.</li>
      <li>Firefox with latest stable version of Metamask.</li>
      </ol>`,
  },
  {
    question: "What type of wallets can I use to stake on the Staking DApp?",
    answer: `<p>The staking DApp works only with Metamask. Please set up your ethereum account on Metamask to stake.</p>`,
  },
];

export const metamaskFAQ = [
  {
    question: "How can I use my hardware wallet to stake on the Staking DApp?",
    answer: `<p><span>The staking DApp works only with Metamask. Please set up your hardware wallet on Metamask using this  </span><a href="https://metamask.zendesk.com/hc/en-us/articles/360020394612-How-to-connect-a-Trezor-or-Ledger-Hardware-Wallet" target="_new" rel="noopener noreferrer"><span>guide</span></a>.</p>`,
  },
  {
    question: "I am using Metamask but I am unable to connect on the portal",
    answer: `<p>Please check the version of your Metamask. The staking DApp works with the stable version of Metamask and not with any beta versions.</p>`,
  },
  {
    question: "I connected my Ledger hardware wallet to Metamask but am still unable to connect or stake",
    answer: `<p>If you are using a hardware wallet from ledger connected to metamask, you need to have enabled contract data. Activate contract data in the settings of the app if you want to send ERC-20 tokens.</p>`,
  },
];
