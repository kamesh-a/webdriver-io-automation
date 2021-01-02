import { join } from "path";
export const serviceConfig = {
  services: [
    [
      "image-comparison",
      {
        baselineFolder: join(
          process.cwd(),
          "./screenshot-comparison/baseline/"
        ),
        formatImageName: "{tag}-{logName}-{width}x{height}",
        screenshotPath: join(
          process.cwd(),
          "./screenshot-comparison/screenshots/"
        ),
        savePerInstance: true,
        autoSaveBaseline: true,
        blockOutStatusBar: true,
        blockOutToolBar: true,
        returnAllCompareData: true,
        isHybridApp: false,
        // Options for the tabbing image
        tabbableOptions: {
          circle: {
            size: 18,
            fontSize: 18,
          },
          line: {
            color: "#ff221a",
            width: 3,
          },
        },
      },
    ],
  ],
};
