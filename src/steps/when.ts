import { When } from "cucumber";
import { campaignSelector } from "../selectors/campaignPage";
import { TIMEOUT_MS } from "../constants/sharedConstants";
import { screenShotService } from "../support/action/screenShot";
import { checkIfElementExists } from "../support/lib/checkIfElementExists";

When(
  /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
  function (action: string, type: string, selector: string): void {
    const selector2 = type === "link" ? `=${selector}` : selector;
    const method = action === "click" ? "click" : "doubleClick";

    checkIfElementExists(selector2);

    $(selector2)[method]();
  }
);

When(
  /^I clicked "([^"]*)?" from model menu$/,
  function (selector: string): void {
    campaignSelector.optionsOpen.click();
    campaignSelector.sideNavigationContainer.waitForDisplayed(TIMEOUT_MS);
    const element = campaignSelector.getElementBySelector(selector);
    element.click();
  }
);

When(
  /^Page gets "([^"]*)?" capture "([^"]*)?" and save image as "([^"]*)?"$/,
  function (
    eventType: "loaded" | "unloaded",
    screenShotType: string,
    fileName: string
  ): void {
    screenShotService.saveImage(screenShotType, fileName);
  }
);
