const {ranks} = require('../../enums');

module.exports = (context) => {
  const {
    totalPoints
  } = context.data;

  if (totalPoints) {
    context.level = Math.floor(Math.pow(totalPoints / 10, 2/3));

    let rankId = Math.floor(context.level / 5);
    if (rankId >= ranks.length) {
      rankId = ranks.length - 1;
    }
    context.rank = ranks[rankId];
  }
};
