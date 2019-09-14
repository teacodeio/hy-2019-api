const {ranks} = require('../../enums');

module.exports = (context) => {
  const {
    totalPoints
  } = context.data;

  if (totalPoints) {
    context.data.level = Math.floor(Math.pow(totalPoints / 3, 2/3)) + 1;

    let rankId = Math.floor(context.data.level / 5);
    if (rankId >= ranks.length) {
      rankId = ranks.length - 1;
    }

    context.data.rank = ranks[rankId];
  }
};
