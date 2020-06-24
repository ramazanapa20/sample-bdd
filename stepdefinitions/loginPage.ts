import {browser, protractor} from "protractor";
import {HTMLObject} from "../pages/HTMLObject";
import {Then, When} from "cucumber";
import {Definition} from "../pages/Definition";

const {Given} = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const definition: Definition = new Definition();
const object: HTMLObject = new HTMLObject();



When(/^I type "(.*?)" username/, async (text) => {
    await browser.sleep(1500);
    await object.userName.sendKeys(text);
});

When(/^I type "(.*?)" password/, async (text) => {
    await browser.sleep(1500);
    await object.password.sendKeys(text);
});

Then(/^I click on sign in button$/, async () => {
    await browser.sleep(1500);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
});

