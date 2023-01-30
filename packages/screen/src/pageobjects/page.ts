import type { Layout } from "@ui-automation/types";
export type IPortlet = {
  accessibleId: string;
  layout: Layout;
};

export default abstract class Page {
  portlets: IPortlet[];
  layout: Layout;
  accessibleId: string;

  constructor(
    accessibleId: string,
    portlets: IPortlet[],
    layout: Layout = "vertical"
  ) {
    this.accessibleId = accessibleId;
    this.portlets = portlets;
    this.layout = layout;
  }

  public open(path: string) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`);
  }
}
