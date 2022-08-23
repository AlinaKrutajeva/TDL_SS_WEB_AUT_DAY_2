import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get fullName() {
    return cy.get("#userName");
  }
  static get email() {
    return cy.get('[id="userEmail"]');
  }
  static get currentAddress() {
    return cy.get('[id="currentAddress"]');
  }
  static get permanentAddress() {
    return cy.get('[id="permanentAddress"]');
  }
  static get clickSubmit() {
    return cy.get('[id="submit"]');
  }
  static get submitName() {
    return cy.get('p[id="name"]');
  }
  static get submitEmail() {
    return cy.get('p[id="email"]');
  }
  static get submitCurrentAddress() {
    return cy.get('p[id="currentAddress"]');
  }
  static get submitPermananetAddress() {
    return cy.get('p[id="permanentAddress"]');
  }
  
}

export default TextBoxPage;
