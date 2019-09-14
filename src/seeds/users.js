const faker = require('faker');

module.exports = async (app) => {
  try {
    const requiredUsers = 10;

    const User = app.service('users');
    const users = await User.find();
    if (users.total < requiredUsers) {
      const createUsers = requiredUsers - users.total;

      User.create({
        email: 'admin@admin.pl',
        password: 'admin'
      });

      const promises = Array.from({length: createUsers}).map(() => {
        return User.create({
          email: faker.internet.email(),
          password: faker.internet.password()
        });
      });

      return Promise.all(promises);
    }

    return users.data;
  } catch (e) {
    console.log(e);
  }
};
