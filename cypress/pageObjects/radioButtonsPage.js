import BasePage from "./basePage";


class RadioButtonsPage extends BasePage {
    static get url() {
        return "/radio-button";
    }

static get yesButton() {
    return cy.get("[for='yesRadio']");
    }
static get validateMessage() {
    return cy.get("[class='text-success']");
}
static get impressiveButton() {
    return cy.get("[for='impressiveRadio']");
}
static get disabledButton() {
    return cy.get("[id='noRadio']");
}
}

export default RadioButtonsPage;