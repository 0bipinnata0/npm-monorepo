import type { Layout } from "@ui-automation/types";
import type { ChainablePromiseElement } from "webdriverio";
import { getScrollBorder } from "../../func/getScrollBorder";
import getSize from "../../getSize";
import { baseScroll } from "./baseScroll";

const scrollToTop = async (
  el: ChainablePromiseElement<WebdriverIO.Element>
) => {
  const border = await getScrollBorder(el);
  let tmpSize = await getSize(el);
  while (tmpSize.y <= border) {
    await baseScroll(el, -tmpSize.touchPoint.height, "vertical");
    tmpSize = await getSize(el);
  }
  await baseScroll(el, tmpSize.y - border, "vertical");
};

export const scrollToShowTop = async (
  el: ChainablePromiseElement<WebdriverIO.Element>,
  layout: Layout = "vertical"
) => {
  await scrollToTop(el);
  console.info("newSize", await getSize(el));
  // async function scroll() {
  //   switch (layout) {
  //     case "horizontal": {
  //       await baseScroll(el, -(oldSize.height >> 1), "vertical");
  //       return;
  //     }
  //     case "vertical": {
  //       await baseScroll(el, -(oldSize.height >> 1), "vertical");
  //       const newSize = await getSize(el);
  //       console.info("newSize", newSize);
  //       return;
  //     }
  //     default: {
  //       throw new Error();
  //     }
  //   }
  // }
};
