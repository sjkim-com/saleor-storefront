module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "saleor",
      url: "https://cmgt-graphql-engine.herokuapp.com/v1beta1/relay",
      headers: {
        "x-hasura-admin-secret": "ui21234",
      },
    },
  },
};
