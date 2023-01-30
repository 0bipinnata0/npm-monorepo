import type { ChainablePromiseElement } from "webdriverio";
import { baseScroll } from "../actions/scroll/baseScroll";
import getSize from "../getSize";

export const getScrollBorder = async (
  el: ChainablePromiseElement<WebdriverIO.Element>
) => {
  const { y } = await getSize(el);
  await baseScroll(el, y, "vertical");
  async function rollback() {
    await baseScroll(el, -y, "vertical");
  }
  rollback();
  const { y: border } = await getSize(el);
  return border;
};
