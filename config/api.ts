export default ({ env }) => {
  return {
    rest: {
      defaultLimit: 25,
      maxLimit: 100,
      withCount: true,
    },
  };
};
