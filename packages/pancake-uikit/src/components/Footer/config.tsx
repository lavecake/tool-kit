import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.pancakeswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://pancakeswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.pancakeswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.pancakeswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.pancakeswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.pancakeswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://docs.pancakeswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.pancakeswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Gitbook",
    icon: "Gitbook",
    href: "https://pinswaps-organization.gitbook.io/pinswap",
  },
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/pinSwap_ioTex",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/PinSwap_IoTex",
  },
  {
    label: "Medium",
    icon: "Medium",
    href: "https://medium.com/@pinswap",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/PinSwap-IoteX/contract-core",
  },
  // {
  //   label: "Reddit",
  //   icon: "Reddit",
  //   href: "https://medium.com/@pinswapiotex",
  // },
  // {
  //   label: "Instagram",
  //   icon: "Instagram",
  //   items: [
  //     {
  //       label: "English",
  //       href: "https://t.me/pancakeswap",
  //     },
  //   ],
  // },
  // {
  //   label: "Discord",
  //   icon: "Discord",
  //   href: "https://discord.gg/pancakeswap",
  // },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
