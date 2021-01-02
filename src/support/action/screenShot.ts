import log from "@wdio/logger";
const logger = log("@ScreenShotService");

class ScreenShotService {
  constructor() {
    logger.info("Initializing screen shot service");
  }

  saveFullScreen(fileName: string, options = {}): void {
    browser.saveFullPageScreen(fileName, options);
  }

  saveScreen(fileName: string, options = {}): void {
    const result = browser.saveScreen(fileName, options);
  }

  saveTabable(fileName: string, options = {}): void {
    browser.saveTabbablePage(fileName, options);
  }

  checkFullScreen(fileName: string, options = {}): void {
    browser.saveFullPageScreen(fileName, options);
  }

  checkScreen(fileName: string, options = {}): void {
    browser.checkScreen(fileName, options);
  }

  checkTabable(fileName: string, options = {}): void {
    browser.checkTabbablePage(fileName, options);
  }

  saveImage(type: string, fileName: string, options = {}): void {
    switch (type) {
      case "fullscreen": {
        return this.saveFullScreen(fileName, {
          ...options,
          fullPageScrollTimeout: 3000,
          disableCSSAnimation: true,
        });
      }

      case "tabable": {
        return this.saveTabable(fileName, options);
      }

      case "screen": {
        return this.saveScreen(fileName, options);
      }

      default: {
        break;
      }
    }
  }

  checkImage(type: string, fileName: string, options = {}): void {
    switch (type) {
      case "fullscreen": {
        this.checkFullScreen(fileName, {
          ...options,
          fullPageScrollTimeout: 3000,
        });
        break;
      }

      case "tabable": {
        this.checkTabable(fileName, options);
        break;
      }

      case "screen": {
        this.checkScreen(fileName, options);
        break;
      }

      default: {
        break;
      }
    }
  }
}

const screenShotService = new ScreenShotService();
export { screenShotService };
