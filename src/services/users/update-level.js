const {ranks} = require('../../enums');

module.exports = (context) => {
  const {
    points
  } = context.data;

  if (points) {
    context.level = Math.floor(Math.pow(points / 10, 2/3));

    let rankId = Math.floor(context.level / 5);
    if (rankId >= ranks.length) {
      rankId = ranks.length - 1;
    }
    context.rank = ranks[rankId];
  }
};
