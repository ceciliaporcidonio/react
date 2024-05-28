module.exports = {
  e2e: {
    baseUrl: "https://agenda-contatos-react.vercel.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
};
