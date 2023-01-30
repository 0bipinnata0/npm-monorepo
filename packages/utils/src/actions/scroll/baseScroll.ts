import type { Layout, TouchPosition } from "@ui-automation/types";
import type { ChainablePromiseElement } from "webdriverio";
import compose from "../../func";
import getSize from "../../getSize";

function getBaseScrollAction(
  touchPoint: TouchPosition,
  range: number,
  layout: Layout
) {
  function getPressAction(actions: Object[]) {
    const { x, y } = touchPoint;
    return [
      ...actions,
      {
        action: "press",
        options: { x, y },
      },
    ];
  }
  function getWaitAction(actions: Object[]) {
    const ms = (Math.abs(range) >> 2) * 11;
    return [
      ...actions,
      {
        action: "wait",
        options: {
          ms,
        },
      },
    ];
  }
  function getMoveAction(actions: Object[]) {
    function getVerticalOptions(touchPoint: TouchPosition) {
      const { x, y } = touchPoint;
      return {
        x: x,
        y: y - range,
      };
    }
    function getHorizontalOptions(touchPoint: TouchPosition) {
      const { x, y } = touchPoint;
      return {
        x: x - range,
        y,
      };
    }
    const getOptions = {
      horizontal: getHorizontalOptions,
      vertical: getVerticalOptions,
    };
    const options = getOptions[layout](touchPoint);
    return [
      ...actions,
      {
        action: "moveTo",
        options: options,
      },
    ];
  }

  function getReleaseAction(actions: Object[]) {
    return [
      ...actions,
      {
        action: "release",
        options: {},
      },
    ];
  }
  const result = compose(
    getPressAction,
    getWaitAction,
    getMoveAction,
    getReleaseAction
  )([]);
  return result;
}

export const baseScroll = async (
  el: ChainablePromiseElement<WebdriverIO.Element>,
  range: number,
  layout: Layout
) => {
  const { height, width, x, y, touchPoint } = await getSize(el);
  await driver.touchPerform(getBaseScrollAction(touchPoint, range, layout));
};
