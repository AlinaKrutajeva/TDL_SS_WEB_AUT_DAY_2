import BasePage from "./basePage";


class ButtonsPage extends BasePage {
    static get url() {
        return "/buttons";
    }

static get doubleClickButton() {
    return cy.get('[id="doubleClickBtn"]');
    }
static get validateMessage() {
    return cy.get('[id="doubleClickMessage"]');
    }
static get rightClickButton() {
    return cy.get('[id="rightClickBtn"]');
    }
static get validateRightClickMessage() {
    return cy.get('[id="rightClickMessage"]');
}
static get dynamicButton() {
    return cy.get('.mt-4:nth-child(3)>button'); 
    }
static get validateDynamicButton() {
    return cy.get('[id="dynamicClickMessage"]');
    }
}

export default ButtonsPage;
