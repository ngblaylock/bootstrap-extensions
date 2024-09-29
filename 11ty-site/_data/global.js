module.exports = {
  env: process.env.ELEVENTY_RUN_MODE === "serve" ? "dev" : "prod",
  baseUrl: "/bootstrap-extensions",
};
