import type { ChainablePromiseElement } from "webdriverio";
import getSize from "../../getSize";
import { baseScroll } from "./baseScroll";

export const scrollToHidden = async (
  el: ChainablePromiseElement<WebdriverIO.Element>
) => {
  let tmpSize = await getSize(el);
  while (tmpSize.height > 100) {
    await baseScroll(el, tmpSize.height, "vertical");
    tmpSize = await getSize(el);
  }
};
