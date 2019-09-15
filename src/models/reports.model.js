// reports-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const reports = new Schema({
    placeName: {
      type: String,
      required: true
    },
    placeStreet: {
      type: String,
      required: true
    },
    estimatedButts: {
      type: Number,
      required: true
    }
  }, {
    timestamps: true
  });

  return mongooseClient.model('reports', reports);
};
