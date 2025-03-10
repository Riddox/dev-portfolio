import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage1,
  benefitImage2,
  benefitImage3,
  benefitImage4,
  benefitImage5,
  benefitImage6,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  plusSquare,
  html5,
  css3,
  javascript1,
  react1,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  htmllogo,
  csslogo,
  jslogo,
  reactlogo,
  tailwindlogo,
} from "../../src/assets";

export const navigation = [
  {
    id: "0",
    title: "About Me",
    url: "#aboutme",
  },
  {
    id: "1",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "2",
    title: "Services",
    url: "#Services",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Daisuke",
    url: "#daisuke",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Blog",
    url: "#blog",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  htmllogo,
  csslogo,
  jslogo,
  reactlogo,
  tailwindlogo,
];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With a strong focus on responsive design, seamless team collaboration, and code optimization, I create impactful, user-friendly digital experiences that drive results.";

export const collabContent = [
  {
    id: "0",
    title: "Responsive Design",
    text: "By ensuring every project is fully responsive, I create seamless user experiences across all devices.",
  },
  {
    id: "1",
    title: "Team Collaboration",
    text: "Through effective team collaboration, I deliver high-quality projects on time while maintaining clear communication.",
  },
  {
    id: "2",
    title: "Code Optimization",
    text: "Focusing on code optimization, I ensure that my websites are fast, efficient, and scalable for the long term.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "HTML5",
    icon: html5,
    width: 34,
    height: 35,
  },
  {
    id: "1",
    title: "CSS3",
    icon: css3,
    width: 34,
    height: 34,
  },
  {
    id: "2",
    title: "Javascript",
    icon: javascript1,
    width: 34,
    height: 34,
  },
  {
    id: "3",
    title: "React",
    icon: react1,
    width: 40,
    height: 34,
  },
  {
    id: "4",
    title: "Slack",
    icon: slack,
    width: 38,
    height: 32,
  },
  {
    id: "5",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "6",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "7",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Corpeo",
    text: "(Product Manager) That is 90Pixel's own product. Provided exclusive access only to the group they have determined; It has been produced for the publication of videos on subjects such as education and marketing.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage1,
    link: "https://90pixel.com/projects/corpeo",
  },
  {
    id: "1",
    title: "Tipstory",
    text: "(Product Manager) Tipstory is a microlearning platform that allows users to create, share, and report quality courses in an easy and fast manner. https://tipstory.io",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    link: "https://90pixel.com/projects/tipstory",
  },
  {
    id: "2",
    title: "Turkish Space Agency",
    text: "(Project Manager) Completed the infrastructure and web development for https://tua.gov.tr, awarded first place in the Public Institution category at the Golden Web Awards.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage3,
    link: "https://90pixel.com/projects/turkish-space-agency",
  },
  {
    id: "3",
    title: "Aparavi Partner Portal",
    text: "(Project Manager) Developed the CMS panel for Aparavi GmbH to manage sales operations and partner relationships.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage4,
    light: true,
    link: "https://90pixel.com/projects/aparavi",
  },
  {
    id: "4",
    title: "Dev Portfolio",
    text: "(Frontend Developer) I coded the website I am currently working on.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage5,
    link: "https://github.com/Riddox/dev-portfolio",
  },
  {
    id: "5",
    title: "Coming Soon",
    text: "(Frontend Developer) I am considering developing a product site where users can be accepted or rejected in the background.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage6,
    link: "https://google.com",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
