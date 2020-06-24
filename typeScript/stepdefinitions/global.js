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
const cucumber_1 = require("cucumber");
const HTMLObject_1 = require("../pages/HTMLObject");
const Definition_1 = require("../pages/Definition");
const protractor_1 = require("protractor");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const definition = new Definition_1.Definition();
const object = new HTMLObject_1.HTMLObject();
cucumber_1.Given(/^I am on "(.*?)" page$/, (text) => __awaiter(this, void 0, void 0, function* () {
    if (text === 'mtm')
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("MTM");
    else if (text === 'projects')
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("MTM");
    else if (text === 'dashboard')
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("MTM");
    else if (text === 'content')
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("MTM");
    else if (text === 'scheduleAndPricing')
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("MTM");
    else if (text === 'companyProfileSuggestion')
        yield expect(protractor_1.browser.getTitle()).to.eventually.equal("MTM");
}));
cucumber_1.When(/^I click "(.*?)"$/, (text) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(1000);
    let textDef = definition.get(text);
    if (textDef)
        yield expect(object[textDef].click());
    else
        yield expect(object[text].click());
}));
cucumber_1.Then(/^I should see "(.*?)" page$/, (text) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(1000);
    let textDef = definition.get(text);
    if (textDef)
        yield expect(object[textDef].isPresent());
    else
        yield expect(object[text].isPresent());
}));
cucumber_1.Then(/^I click "(.*?)" type of section$/, (text) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(1000);
    let textDef = definition.get(text);
    if (textDef)
        yield expect(object[textDef].click());
    else
        yield expect(object[text].click());
}));
cucumber_1.Then(/^I click "(.*?)" type of subsection$/, (text) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(1000);
    let textDef = definition.get(text);
    if (textDef)
        yield expect(object[textDef].click());
    else
        yield expect(object[text].click());
}));
cucumber_1.Then(/^I close section tab$/, () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(1000);
    protractor_1.browser.actions().doubleClick(object.closeTabb).perform();
}));
cucumber_1.When(/^I choose "(.*?)"$/, (text) => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(1000);
    let textDef = definition.get(text);
    if (textDef)
        yield expect(object[textDef].click());
    else
        yield expect(object[text].click());
}));
