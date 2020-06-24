"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const HTMLObject_1 = require("../pages/HTMLObject");
const cucumber_1 = require("cucumber");
const { Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const object = new HTMLObject_1.HTMLObject();
cucumber_1.When(/^I click animatic 3D subsection$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(1500);
    yield object.animatic3D.click();
}));
cucumber_1.When(/^I click add animatic button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(1500);
    yield object.addAnimatic3D.click();
}));
cucumber_1.When(/^I type (.*?) to 3D/, (text) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(1500);
    yield object.animaticTitle.sendKeys(text);
}));
cucumber_1.When(/^I type (.*?) animation/, (text) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(1500);
    yield object.animaticElement.sendKeys(text);
}));
// When(/^I type (.*?) description/, async (text) => {
//     await browser.sleep(1500);
//     await object.animaticDescription.sendKeys(text);
// });
cucumber_1.When(/^I type (.*?) anticipated/, (text) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(1500);
    yield object.anticipatedCost.sendKeys(text);
}));
cucumber_1.Then(/^I click add animatic 3D continue button$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(1500);
    yield object.animaticContinueBtn.click();
}));
