const validator = require('validator');

// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const users = new mongooseClient.Schema({
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
    },
    uniqueId: {
      type: String,
      required: true
    },
    totalPoints: {
      type: Number,
      default: 0
    },
    spentPoints: {
      type: Number,
      default: 0
    },
    level: {
      type: Number,
      default: 1
    },
    rank: {
      type: String,
      enum: ['Novice', 'Intermediate', 'Pro', 'Expert', 'Master', 'Grand Master', 'Perfect']
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('users', users);
};
