export const navbarItems = [
  { label: "Home", type: "link", openInNewTab: false, activeLinks: ["/", "/landing"], to: "/landing" },
  { label: "How It Works", type: "link", openInNewTab: false, activeLinks: ["/howitworks"], to: "/howitworks" },
];

export const dropdowns = [
  {
    label: "Resources",
    list: [
      { label: "Documentation", link: "https://github.com/singnet", newTab: true },
      { label: "Telegram", link: "https://telegram.me/singularitynet", newTab: true },
      { label: "Forum", link: "https://community.singularitynet.io/", newTab: true },
      { label: "Blog", link: "http://blog.singularitynet.io/", newTab: true },
    ],
  },
];
