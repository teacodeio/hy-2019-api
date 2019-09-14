const users = require('./users');
const devices = require('./devices');
const ratings = require('./ratings');

module.exports = async (app) => {
  try {
    const createdUsers = await users(app);

    createdUsers.map(async user => {
      devices(app, user);
      ratings(app, user);
    });
  } catch (e) {
    console.log(e);
  }
};
