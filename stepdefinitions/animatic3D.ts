import {browser, by, element, protractor} from "protractor";
import {HTMLObject} from "../pages/HTMLObject";
import {Then, When} from "cucumber";
import {async} from "q";

const {Given} = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const object: HTMLObject = new HTMLObject();

When(/^I click animatic 3D subsection$/, async () => {
    await browser.sleep(1500);
    await object.animatic3D.click();
});

When(/^I click add animatic button$/, async () => {
    await browser.sleep(1500);
    await object.addAnimatic3D.click();
});

When(/^I type (.*?) to 3D/, async (text) => {
    await browser.sleep(1500);
    await object.animaticTitle.sendKeys(text);
});

When(/^I type (.*?) animation/, async (text) => {
    await browser.sleep(1500);
    await object.animaticElement.sendKeys(text);
});

// When(/^I type (.*?) description/, async (text) => {
//     await browser.sleep(1500);
//     await object.animaticDescription.sendKeys(text);
// });

When(/^I type (.*?) anticipated/, async (text) => {
    await browser.sleep(1500);
    await object.anticipatedCost.sendKeys(text);
});

Then(/^I click add animatic 3D continue button$/, async () => {
    await browser.sleep(1500);
    await object.animaticContinueBtn.click();
});

