export default {
  project: {
    link: "https://github.com/wenwkich/thirdbrain",
  }, // GitHub link in the navbar
  chat: {
    icon: () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      );
    },
    link: "https://twitter.com/wenwkich",
  },
  docsRepositoryBase: "https://github.com/wenwkich/thirdbrain/blob/main", // base URL for the docs repository
  titleSuffix: " - thirdbrain",
  navigation: {
    next: true,
    prev: true,
  },
  darkMode: true,
  footer: {
    text: `MIT ${new Date().getFullYear()} © Wendy Chan. `,
  },
  editLink: {
    text: `Edit this page on GitHub`,
  },
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
        content="This is my very exhaustive personal opinions, brain dump, study notes, guide, curated resources on web2/3 development"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@wenwkich" />
      <meta property="og:title" content="thirdbrain" />
      <meta
        property="og:description"
        content="Thirdbrain: A very exhaustive third brain (personal opinions, brain dump, study notes, guide, curated resources) on web2/3 development"
      />
      <meta name="apple-mobile-web-app-title" content="thirdbrain" />
    </>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 0,
  },
};
