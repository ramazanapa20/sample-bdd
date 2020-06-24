import * as path from "path";
import {browser, Config} from "protractor";
import {Reporter} from "../support/reporter";

const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

     //sauceUser: '',
    /**
     * If the sauceUser and sauceKey are specified, seleniumServerJar will be
     * ignored. The tests will be run remotely using Sauce Labs.
     */
     //sauceKey: '',

    /**
     * If you run your tests on SauceLabs you can specify the region you want to run your tests
     * in via the `sauceRegion` property. Available short handles for regions are:
     * us: us-west-1 (default)
     * eu: eu-central-1
     */
     //sauceRegion: 'us',

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

     SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "",

    capabilities: {
        browserName: "chrome",
        extendedDebugging: true,
        capturePerformance: true

        // chromeOptions: {
        //     args: ["--headless", "--disable-gpu", "--window-size=800,600"]
        // }
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/login.feature",
        "../../features/newProject.feature",
        "../../features/project.feature",
        "../../features/dashboard.feature",
        "../../features/content.feature",
        "../../features/scheduleAndPricing.feature",
        "../../features/companyProfileSuggestions.feature",

    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js", "../../typeScript/stepdefinitions/shooting/*.js", "../../typeScript/stepdefinitions/postProduction/*.js"],
        strict: true,
        tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario",
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
