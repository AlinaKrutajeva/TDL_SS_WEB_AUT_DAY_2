import BasePage from "./basePage";


class CheckBoxPage extends BasePage {
    static get url() {
        return "/checkbox";
    }

static get plusButton() {
    return cy.get('svg[class="rct-icon rct-icon-expand-all"]');
    // return cy.get("[class='rct-icon rct-icon-expand-all']")
    }
static get notesButton() {
    return cy.get("[for='tree-node-notes']");
    }
static get reactButton() {
    return cy.get("[for='tree-node-react']")
}
static get angularButton() {
    return cy.get("[for='tree-node-angular']")
}
static get generalButton() {
    return cy.get("[for='tree-node-general']")
}
static get excelButton() {
    return cy.get("[for='tree-node-excelFile']")
    }
static get validateButtons() {
    return cy.get("[id='result']");
    }
static get officeButton() {
    return cy.get("[for='tree-node-office']");
    }
}

export default CheckBoxPage;