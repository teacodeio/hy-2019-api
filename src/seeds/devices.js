const mongoose = require('mongoose');

module.exports = async (app, user) => {
  try {
    const requiredDevices = 1;

    const Device = app.service('devices');
    const devices = await Device.find();
    if (devices.total < requiredDevices) {
      const createUsers = requiredDevices - devices.total;

      const promises = Array.from({length: createUsers}).map(() => {
        return Device.create({
          uniqueId: mongoose.Types.ObjectId(),
          user: user._id
        });
      });

      return Promise.all(promises);
    }
  } catch (e) {
    console.log(e);
  }
};
