export const getNavigationLinks = (t: (key: string) => string) => [
  {
    id: "home",
    label: t("home"),
    href: "/",
  },
  {
    id: "about-us-experience",
    label: t("aboutUs"),
    href: "/about-us-experience",
  },
  {
    id: "services-consulting",
    label: t("services"),
    href: "/services-consulting",
  },
  {
    id: "cloudex",
    label: t("cloudex"),
    href: "/cloudex",
  },
  {
    id: "contact",
    label: t("contact"),
    href: "/contact",
  },
];
