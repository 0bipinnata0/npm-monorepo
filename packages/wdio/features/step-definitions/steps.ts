import { Given, When, Then } from "@wdio/cucumber-framework";

import { LoginPage, MarketBuzzPage, SecurePage } from "@ui-automation/screen";
const pages = {
  login: LoginPage,
  marketBuzz: MarketBuzzPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await pages.marketBuzz.getSize();
  // await LoginPage.login(username, password);
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
  // await expect(SecurePage.flashAlert).toBeExisting();
  // await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});
