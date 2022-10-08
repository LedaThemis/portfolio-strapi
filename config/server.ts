export default ({ env }) => {
  const host = env("HOST", "0.0.0.0");
  const port = env.int("PORT", 1337);

  return {
    host,
    port,
    app: {
      keys: env.array("APP_KEYS"),
    },
  };
};
