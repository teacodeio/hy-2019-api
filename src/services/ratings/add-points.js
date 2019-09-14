module.exports = (context) => {
  const {
    user
  } = context.data;

  context.app('users').patch({
    id: user,
    data: {
      totalPoints: {
        $inc: 1
      },
      spentPoints: {
        $inc: 1
      }
    }
  });
};
