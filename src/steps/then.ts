import { Then } from "cucumber";
import { expect } from "chai";

import { campaignSelector } from "../selectors/campaignPage";
import { TIMEOUT_MS } from "../constants/sharedConstants";
import { screenShotService } from "../support/action/screenShot";

Then(
  /^I expect "([^"]*)?" model items is displayed$/,
  function (selector: string): void {
    console.log(
      `data: ${selector}: element = `,
      campaignSelector.getElementBySelector(selector).getValue()
    );
    campaignSelector
      .getElementBySelector(selector)
      .waitForDisplayed(TIMEOUT_MS);
  }
);

Then(
  /^I expect "([^"]*)?" to be redirected to page with title "([^"]*)?"$/,
  function (selector: string, pageTitle: string): void {
    campaignSelector
      .getElementBySelector(selector)
      .waitForDisplayed(TIMEOUT_MS);

    expect(
      campaignSelector.getElementBySelector(selector).isClickable()
    ).to.equal(true);

    campaignSelector.getElementBySelector(selector).click();

    const title = browser.getTitle();

    expect(title).to.contain(
      pageTitle,
      `Expected title to contain "${pageTitle}" but found "${title}"`
    );
  }
);

Then(
  /^I expect "([^"]*)?" to be redirected to page with link "([^"]*)?"$/,
  function (selector: string, redirectUrl: string): void {
    campaignSelector
      .getElementBySelector(selector)
      .waitForDisplayed(TIMEOUT_MS);

    const parentElement = campaignSelector
      .getElementBySelector(selector)
      .$("..");

    const pageUrlToRedirect = parentElement.getAttribute("href");

    expect(pageUrlToRedirect).to.contain(
      redirectUrl,
      `Expected Url to be equal "${pageUrlToRedirect}" but found"${redirectUrl}"`
    );
  }
);

Then(
  /^I expect the captured "([^"]*)?" image "([^"]*)?" to be equal/,
  function (type: string, fileName: string) {
    screenShotService.checkImage(type, fileName);
  }
);

Then(
  /^I expect that element "([^"]*)?" is( not)* displayed$/,
  function (selector: string, falseCase: string): void {
    const displayed = $(selector).isDisplayed();

    if (falseCase) {
      expect(displayed).to.not.equal(
        true,
        `Expected element "${selector}" not to be displayed`
      );
    } else {
      expect(displayed).to.equal(
        true,
        `Expected element "${selector}" to be displayed`
      );
    }
  }
);

Then(
  /^I expect that element "([^"]*)?" becomes( not)* displayed$/,
  function (selector: string, falseCase: string): void {
    $(selector).waitForDisplayed(TIMEOUT_MS, !!falseCase);
  }
);
