module.exports = ({ env }) => ({
  url:env('PUBLIC_URL','https://striking-book-d6cfbf6b64.strapiapp.com/')
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
    // url: env('STRAPI_ADMIN_URL', 'https://decisive-thrill-5f1eba75be.strapiapp.com/admin/'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//     url: env('STRAPI_ADMIN_URL', 'https://decisive-thrill-5f1eba75be.strapiapp.com/admin/auth/login'),
//   },
//   admin: {
//     autoOpen: false,
//     url: env('STRAPI_ADMIN_URL', 'https://decisive-thrill-5f1eba75be.strapiapp.com/admin/auth/login')
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
// });



