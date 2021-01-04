import { hooksConfig } from "./hooks.config";
import { reportingConfig } from "./reporting.config";
import { serverConfig } from "./server.config";
import { serviceConfig } from "./service.config";
import { testsConfig } from "./tests.config";

export const config = {
  runner: "local",
  baseUrl: "http://localhost",
  framework: "cucumber",
  maxInstances: 10,

  // Capabilities configuration for Google Chrome & Firefox.

  capabilities: [
    {
      maxInstances: 3, // We are creating 3 instance to demonstrate parallel testing.
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--no-sandbox", "--disable-gpu"],
      },
      "cjson:metadata": {
        device: process.env.SELENIUM_VERSION,
      },
    },
    {
      maxInstances: 1,
      browserName: "firefox",
      "moz:firefoxOptions": {
        args: ["-headless"],
      },
      acceptInsecureCerts: true,
      "cjson:metadata": {
        device: process.env.SELENIUM_VERSION,
      },
    },
  ],

  // Logging config
  logLevel: "error",
  deprecationWarnings: true,

  ...serviceConfig,
  ...serverConfig,
  ...testsConfig,
  ...reportingConfig,
  ...hooksConfig,
};
