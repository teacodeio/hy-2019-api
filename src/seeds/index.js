const users = require('./users');
const ratings = require('./ratings');

module.exports = async (app) => {
  try {
    console.log('Users');
    const createdUsers = await users(app);

    createdUsers.map(async user => {
      console.log('Ratings');
      ratings(app, user);
    });
  } catch (e) {
    console.log(e);
  }
};
