export const reportingConfig = {
  reporters: [
    "spec",
    [
      "cucumberjs-json",
      {
        jsonFolder: "./report/cucumber/",
      },
    ],
    [
      "allure",
      {
        outputDir: "./report/allure/",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      },
    ],
  ],

  cucumberOpts: {
    backtrace: false,
    failAmbiguousDefinitions: true,
    failFast: false,
    ignoreUndefinedDefinitions: false,
    name: [],
    snippets: true,
    source: true,
    profile: [],
    require: ["./src/steps/**/*.ts"],
    snippetSyntax: undefined,
    strict: true,
    tagsInTitle: false,
    timeout: 10000,
  },
};
