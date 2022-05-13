import dotenv from "dotenv";
dotenv.config();
/**
 * @type {Cypress.PluginConfig}
 */
module.exports = async (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  const configKeys = ["SECRET_VALUE"];
  for (const key of configKeys) {
    if (!process.env[key]) {
      console.error(key, "missing");
    }
    config.env[key] = process.env[key];
  }
  return config;
};
