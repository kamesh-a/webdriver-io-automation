import { Given } from "cucumber";

Given(
  /^I open the (url|site) "([^"]*)?"$/,
  function (type: "url" | "site", page: string): void {
    const url = type === "url" ? page : browser.options.baseUrl + page;
    browser.url(url);
  }
);
