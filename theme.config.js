export default {
  projectLink: "https://github.com/wenwkich/thirdbrain", // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/wenwkich/thirdbrain/blob/master", // base URL for the docs repository
  titleSuffix: " - thirdbrain",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Wendy Chan. `,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <span>Thirdbrain: Everything I Know on Web2/3 Dev & Sec with ❤️</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="This is my very exhaustive third brain (personal opinions, guide, curated resources) on web2/3 development / security"
      />
      <meta name="og:title" content="web3" />
    </>
  ),
  defaultMenuCollapsed: true,
};
