const validator = require('validator')

// admins-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const admins = new Schema({
    email: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: ({ value }) => `${value} is not a valid email address`
      },
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('admins');
  } catch (e) {
    return mongooseClient.model('admins', admins);
  }
};
