export default {
  projectLink: "https://github.com/wenwkich/web3Devshill", // GitHub link in the navbar
  docsRepositoryBase: "https://github.com/wenwkich/web3Devshill/blob/master", // base URL for the docs repository
  titleSuffix: " – Web3DevShill",
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
      <span>Web3DevShill Guide</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Web3DevShill: My personal opinion, example and guide on your web3 dev journey"
      />
      <meta name="og:title" content="web3" />
    </>
  ),
};
