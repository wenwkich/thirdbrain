export default {
  projectLink: "https://github.com/wenwkich/scaffold-wc-web3", // GitHub link in the navbar
  docsRepositoryBase:
    "https://github.com/wenwkich/scaffold-wc-web3/blob/master", // base URL for the docs repository
  titleSuffix: " – scaffold-wc-web3",
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Wendy Chan.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <svg>...</svg>
      <span>Next.js Static Site Generator</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="scaffold-wc-web3: the opinionated approach to start your web3 journey"
      />
      <meta name="og:title" content="scaffold-wc-web3" />
    </>
  ),
};
