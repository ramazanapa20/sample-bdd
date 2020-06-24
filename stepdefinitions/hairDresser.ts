import {browser, by, element, protractor} from "protractor";
import {HTMLObject} from "../pages/HTMLObject";
import {Then, When} from "cucumber";
import {async} from "q";

const {Given} = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const object: HTMLObject = new HTMLObject();

When(/^I click pre-production section tab$/, async () => {
    await browser.sleep(1500);
    await object.preProductionSection.click();
});

When(/^I click hair dresser subsection$/, async () => {
    await browser.sleep(1500);
    await object.hairDresser.click();
});

When(/^I click add hairstyle button$/, async () => {
    await browser.sleep(1500);
    await object.addHairStyle.click();
});

When(/^I type (.*?) hair name/, async (text) => {
    await browser.sleep(1500);
    await object.hairName.sendKeys(text);
});

When(/^I type (.*?) hair description/, async (text) => {
    await browser.sleep(1500);
    await object.hairDescription.sendKeys(text);
});

Then(/^I click hair dresser continue button$/, async () => {
    await browser.sleep(1500);
    await object.hairContinueBtn.click();
});