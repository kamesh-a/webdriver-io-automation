import { Given } from "cucumber";

/**
 * Reusing code based on regex parameters in other feature files.
 */
Given(/^I open the url "([^"]*)?"$/, function (urlToLoad: string): void {
  browser.url(urlToLoad);
});
