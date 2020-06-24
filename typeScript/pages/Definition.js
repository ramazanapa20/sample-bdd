"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Definition {
    constructor() {
        this.def = {
            'sign in': 'signIn',
            'home': 'home',
            'My Project': 'anyProject',
            'dashboard': 'dashboard',
            'Production Partner Selection': 'productionPartnerSelectClick',
            'Content Section': 'contentBtn',
            'Content': 'contentPage',
            'script': 'scriptBtn',
            'script continue': 'scriptContinueBtn',
            'purpose': 'purposeBtn',
            'purpose continue': 'continuePurposeBtn',
            "genre": "genreBtn",
            "genre continue": "continueGenreBtn",
            "sector continue": "continueSectorBtn",
            "schedule and pricing": "scheduleAndPricing",
            "position budget": "knowBudgetBtn",
            'global production company': 'globalProductionCompanyBtn',
            'select languages': 'selectLanguages',
            'spanish': 'spanishLang',
            'subtitle languages': 'subtitleLang',
            'german': 'germanSubLang',
            'dubbing languages': 'dubbingLang',
            'afar': 'afarDubLang',
            'company profile suggestion': 'companyProfileSuggestion',
            'find button': 'findBtn',
            'emrah company': 'selectCompanyName'
        };
    }
    get(text) {
        return this.def[text];
    }
}
exports.Definition = Definition;
