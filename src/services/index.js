const users = require('./users/users.service.js');
const ratings = require('./ratings/ratings.service.js');
const places = require('./places/places.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(ratings);
  app.configure(places);
};
