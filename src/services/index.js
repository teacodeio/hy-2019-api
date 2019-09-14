const users = require('./users/users.service.js');
const ratings = require('./ratings/ratings.service.js');
const images = require('./images/images.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(ratings);
  app.configure(images);
};
