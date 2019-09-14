module.exports = async (app, user) => {
  try {
    const requiredRatings = 10;

    const Rating = app.service('ratings');
    const ratings = await Rating.find();
    if (ratings.total < requiredRatings) {
      const createUsers = requiredRatings - ratings.total;

      const promises = Array.from({length: createUsers}).map(() => {
        return Rating.create({
          user,
          loc: {
            type: 'Point',
            coordinates: [ 21.0122, 52.2297 ]
          }
        });
      });

      return Promise.all(promises);
    }
  } catch (e) {
    console.log(e);
  }
};
