module.exports = {
  env: process.env.ELEVENTY_RUN_MODE === "serve" ? "dev" : "prod",
  baseUrl:
    process.env.ELEVENTY_RUN_MODE === "serve" ? "" : "/bootstrap-extensions",
};
