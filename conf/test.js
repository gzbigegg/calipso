
/**
 * TEST Environment settings
 */
module.exports = function(app,express) {

  // Database connection
  app.set('db-uri', 'mongodb://localhost/calipso-test');

  // Change to suit - this key works for calip.so
  app.set('google-analytics-key', 'UA-17607570-4');
  app.set('google-analytics-anonymize-ip', false);
  app.set('google-analytics-track-pagespeed', false);

  // Disqus
  app.set('disqus-shortname', 'calipsojs');

  // App config
  app.set('server-url', 'http://localhost:3000');

  // Language mode
  app.set('language-add', false);

  app.use(express.errorHandler({ dumpExceptions: false, showStack: false }));
}