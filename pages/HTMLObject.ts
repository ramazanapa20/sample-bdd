import {$, by, element, ElementFinder} from "protractor";

export class HTMLObject {
    public userName: ElementFinder;
    public password: ElementFinder;
    public signIn: ElementFinder;
    
constructor() {
        this.userName = $("#email-tb");
        this.password = $("#password-tb");
        this.signIn = $("#signin-btn");
        
        this.formatContinueBtn = $("#section-2 > div.card-footer > div > div > button");
        this.technique = $("#section-3 > div.card-block > div > div:nth-child(1) > div");
        this.techniqueContinueBtn = $("#section-3 > div.card-footer > div > div > button");
    }
}


