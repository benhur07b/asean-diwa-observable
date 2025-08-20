// See https://observablehq.com/framework/config for documentation.
export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "ASEAN-DIWA Dashboard",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  // pages: [
  //   {
  //     name: "Examples",
  //     pages: [
  //       {name: "Dashboard", path: "/example-dashboard"},
  //       {name: "Report", path: "/example-report"}
  //     ]
  //   }
  // ],
  pages: [
    {
      name: "Indicators", path: "indicators/",
      pages: [
        { name: "Numerical indicators", path: ""},
        { name: "Categorical indicators", path: "#"},
      ]
    },
    {
      name: "Map",
      pages: [
        { name: "View map", path: "maps/"},
      ]
    },
    {
      name: "Country reports", path: "country-reports/",
      pages: [
        { name: "Brunei Darussalam", path: "country-reports/brunei-darussalam" },
        { name: "Cambodia", path: "country-reports/cambodia" },
        { name: "Indonesia", path: "country-reports/indonesia" },
        { name: "Lao PDR", path: "country-reports/lao-pdr" },
        { name: "Malaysia", path: "country-reports/malaysia" },
        { name: "Myanmar", path: "country-reports/myanmar" },
        { name: "Philippines", path: "country-reports/philippines" },
        { name: "Singapore", path: "country-reports/singapore" },
        { name: "Thailand", path: "country-reports/thailand" },
        { name: "Timor Leste", path: "country-reports/timor-leste" },
        { name: "Vietnam", path: "country-reports/vietnam" }
              ]
    },
    {
      name: "Get data",
      pages: [
        { name: "Get data", path: "get-data"},
      ]
    },
    {
      name: "More information",
      pages: [
        { name: "About ASEAN-DIWA", path: "about/asean-diwa"},
        { name: "Read policy paper", path: "about/policy-paper"},
      ]
    },
  ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="assets/img/icons/icon-diwa.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  theme: "slate", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  footer: "Built with Observable by <a href='https://learn-qgis.bnhr.xyz'>BNHR</a> for <a href=''>SmartCT</a> and the ASEAN-DIWA Project.", // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};