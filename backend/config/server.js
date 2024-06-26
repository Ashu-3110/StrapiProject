module.exports = ({ env }) => ({
  url:env('PUBLIC_URL','https://striking-book-d6cfbf6b64.strapiapp.com/'),
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});





