const PrimaryFooterLeft = [
  { label: "Contact Us", link: "https://singularitynet.io/#contact" },
  { label: "Foundation Site", link: "https://singularitynet.io/" },
  { label: "Singularity Studio", link: "https://singularitynet.io/studio/" },
  { label: "White Paper", link: "https://public.singularitynet.io/whitepaper.pdf" },
  { label: "Jobs", link: "https://singularitynet.io/jobs-temp/" },
];

const PrimaryFooterMain = [
  {
    title: "AI Publisher",
    children: [
      { label: "Free Signup", link: "#", internalLink: true },
      { label: "How it Works", link: "#" },
      { label: "Get Started", link: "#" },
      { label: "My AI Apps", link: "#" },
      { label: "Create New AI Servcie", link: "#" },
    ],
  },
  {
    title: "Dev Docs",
    children: [
      { label: "Setting up Account", link: "#" },
      { label: "Creating Organization", link: "#" },
      { label: "Adding Regions", link: "#" },
      { label: "Creating Service", link: "#" },
      { label: "Claiming Service", link: "#" },
    ],
  },
  {
    title: "Products",
    children: [
      { label: "Ai Marketpalce", link: "#" },
      { label: "AI Publisher", link: "#" },
      { label: "Request For AI (RFAI)", link: "#" },
      { label: "Stake", link: "#" },
    ],
  },
  {
    title: "Community",
    children: [
      { label: "Blog", link: "#" },
      { label: "Forum", link: "#" },
      { label: "Telegram", link: "#" },
    ],
  },
];

const SecondaryFooter = [
  { title: "Github", className: "fab fa-github", link: "https://github.com/singnet" },
  { title: "Twitter", className: "fab fa-twitter", link: "https://twitter.com/singularity_net" },
  { title: "Facebook", className: "fab fa-facebook-f", link: "https://www.facebook.com/singularityNET.io" },
  { title: "Linkedin", className: "fab fa-linkedin-in", link: "https://www.linkedin.com/company/singularitynet/" },
  { title: "Youtube", className: "fab fa-youtube", link: "https://www.youtube.com/channel/UCbTE8vfz5zuEK5uRnc2yjrw" },
  { title: "Instagram", className: "fab fa-instagram", link: "https://instagram.com/singularitynet.io" },
];

export const FooterData = {
  PrimaryFooterLeft,
  PrimaryFooterMain,
  SecondaryFooter,
};
