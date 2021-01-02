// To know more Info: https://v5.webdriver.io/docs/configurationfile.html

import log from "@wdio/logger";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const allure = require("allure-commandline");
import { addObject, addScreenshot } from "../src/support/lib/context";

const logger = log("@automation");
logger.info("Automation tests begins...");

export const hooksConfig = {
  // We are setting browser size, while executing test runners.
  before(capabilities, specs): void {
    browser.setWindowSize(
      parseInt(process.env.SCREEN_WIDTH, 10),
      parseInt(process.env.SCREEN_HEIGHT, 10)
    );
  },

  // Adding screen shot in case of failed steps.
  afterStep(
    uri,
    feature,
    { error, result, duration, passed },
    stepData,
    context
  ): void {
    if (error) {
      console.log(`What error: `, error);
      addObject(error);
      addScreenshot();
    }
  },

  onComplete(): Promise<string> {
    const reportError = new Error("Could not generate Allure report");
    const generation = allure([
      "generate",
      "./report/allure/",
      "--clean",
      "-o",
      "./report/allure-results/",
    ]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 10000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          console.log(`Rejecting allure reporter generation`);
          return reject(reportError);
        }

        const resp = "Allure report successfully generated";
        console.log(resp);
        resolve();
      });
    });
  },
};
