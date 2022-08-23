import BasePage from "./basePage";


class WebTablesPage extends BasePage {
    static get url() {
        return "/webtables";
    }

static get addButton() {
    return cy.get('[id="addNewRecordButton"]');
}
static get firstName() {
    return cy.get('[id="firstName"]');
}
static get lastName() {
    return cy.get('[id="lastName"]');
}
static get userEmail() {
    return cy.get('[id="userEmail"]');
}
static get userAge() {
    return cy.get('[id="age"]');
}
static get userSalary() {
    return cy.get('[id="salary"]');
}
static get userDepartment() {
    return cy.get('[id="department"]');
    }
static get submitButton() {
    return cy.get('[id="submit"]');
    }
static get searchField() {
    return cy.get('[id="searchBox"]');
    }
static get validateName() {
    return cy.get('[class="rt-td"]');
    }
static getRow(itemName) {
    return this.rows.contains(itemName).parent();
    }
    
static deleteUser(firstName) {
     return this.rows
          .contains(firstName)
          .parent()
          .find('[class="ReactTable -striped -highlight"]')
          .click();
      }
    }

export default WebTablesPage;