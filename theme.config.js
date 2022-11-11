export default {
  projectLink: "https://github.com/wenwkich/wenwkichpok", // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/wenwkich/wenwkichpok/blob/master", // base URL for the docs repository
  titleSuffix: " – PoK",
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
      <span>wenwkich's Proof of Knowledge on Web2/3 Dev & Sec with ❤️</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="PoK: My personal opinion, brain dump, example and guide on your web3 dev journey"
      />
      <meta name="og:title" content="web3" />
    </>
  ),
  defaultMenuCollapsed: true,
};
