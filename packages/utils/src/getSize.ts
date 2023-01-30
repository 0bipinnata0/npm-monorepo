import type { TouchPosition } from "@ui-automation/types";
import type { ChainablePromiseElement } from "webdriverio";
const getSize = async (
  ele: ChainablePromiseElement<WebdriverIO.Element>
): Promise<{
  width: number;
  height: number;
  x: number;
  y: number;
  touchPoint: TouchPosition;
}> => {
  const height = await ele.getSize("height");
  const width = await ele.getSize("width");
  const x = await ele.getSize("x");
  const y = await ele.getSize("y");
  return {
    width,
    height,
    x,
    y,
    touchPoint: {
      x: x + (width >> 1),
      y: y + (height >> 1),
      height: (height>>2)*3,
      width: (width>>2)*3,
    },
  };
};

export default getSize;
