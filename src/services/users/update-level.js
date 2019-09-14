module.exports = (context) => {
  const {
    user
  } = context.data;

  context.app('users').patch({
    id: user,
    data: {
      points: {
        $inc: 1
      }
    }
  });
};
