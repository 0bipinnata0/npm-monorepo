import {
  scrollToShowTop,
  getEleByAccessibleId,
  scrollToHidden,
} from "@ui-automation/utils";

import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MarketBuzzPage extends Page {
  constructor() {
    super("ov", [
      {
        accessibleId: "CitVelMBRGAMob_CV_CC_Conf_1625814919952",
        layout: "vertical",
      },
    ]);
  }

  async getSize() {
    const ele = getEleByAccessibleId(this.portlets[0].accessibleId);
    await scrollToShowTop(ele);
    await driver.pause(1_000);
    await scrollToHidden(ele);
  }
}

export default new MarketBuzzPage();
