import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonsPage from "../../pageObjects/radioButtonsPage";
import WebTablesPage from "../../pageObjects/webTablesPage";
import ButtonsPage from "../../pageObjects/buttonsPage";

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it("Filling in Text Boxes", () => {
      TextBoxPage.fullName.type("Alina K");
      TextBoxPage.email.type("alina@inbox.lv");
      TextBoxPage.currentAddress.type("Current Address");
      TextBoxPage.permanentAddress.type("Permananet Address");
      TextBoxPage.clickSubmit.click();
      TextBoxPage.submitName.should("have.text", "Name:Alina K");
      TextBoxPage.submitEmail.should("contain.text", "Email:alina@inbox.lv");
      TextBoxPage.submitCurrentAddress.should("contain.text", "Current Address :Current Address");
      TextBoxPage.submitPermananetAddress.should("contain.text", "Permananet Address :Permananet Address");
    });
  });
  context("Check box scenarios", () => {
    beforeEach(() => {
      CheckBoxPage.visit();
    });

    it("Checking box page", () => {
      CheckBoxPage.plusButton.click();
      CheckBoxPage.notesButton.click();
      CheckBoxPage.reactButton.click();
      CheckBoxPage.angularButton.click();
      CheckBoxPage.generalButton.click();
      CheckBoxPage.excelButton.click();
      CheckBoxPage.validateButtons.should("contain", "notes");
      CheckBoxPage.validateButtons.should("contain", "react");
      CheckBoxPage.validateButtons.should("contain", "angular");
      CheckBoxPage.validateButtons.should("contain", "general");
      CheckBoxPage.validateButtons.should("contain", "excelFile");
    });
    // Create CheckBoxPage page object
    // Create checkbox scenario 1:
    // Click the "+"/expand button
    // Click Notes, React, Angular, General, Excel File.doc
    // Validate the clicked checkboxes

    it("Checking office button", () => {
      CheckBoxPage.plusButton.click();
      CheckBoxPage.officeButton.click();
      CheckBoxPage.validateButtons.should("contain.text", "office");
    });
  });
      // Create checkbox scenario 2:
    // Click expand button
    // Click Office
    // Validate the checked checkboxes

  context("Radio button scenarios", () => {
    beforeEach(() => {
      RadioButtonsPage.visit();
    });

    it("Radio Buttton Page", () => {
      RadioButtonsPage.yesButton.click();
      RadioButtonsPage.validateMessage.should("have.text", "Yes");
      RadioButtonsPage.impressiveButton.click();
      RadioButtonsPage.validateMessage.should("have.text", "Impressive");
      RadioButtonsPage.disabledButton.should("be.disabled");
    });
   });
    // Create RadioButtons page object
    // Scenario 1:
    // Click yesButton
    // validate the message
    // click impressiveButton
    // validate the message
    // noButton - validate that the button exists but is disabled

  context("Web tables scenarios", () => {
    beforeEach(() => {
      WebTablesPage.visit();
    });

    it("Web Table Page", () => {
      WebTablesPage.addButton.click();
      WebTablesPage.firstName.type("Name");
      WebTablesPage.lastName.type("Username");
      WebTablesPage.userEmail.type("Email@email.lv");
      WebTablesPage.userAge.type("20");
      WebTablesPage.userSalary.type("5000");
      WebTablesPage.userDepartment.type("Department");
      WebTablesPage.submitButton.click();
      WebTablesPage.searchField.type("Email@email.lv");
      WebTablesPage.validateName.contains("Name").and('be.visible');
      });
    it.only ("Delete Rows", () => {
      WebTablesPage.rows.should("have.length", 0);

    })
    });
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
  

  context("Buttons scenarios", () => {
    beforeEach(() => {
      ButtonsPage.visit();
    });

    it("Buttons Page", () => {
      ButtonsPage.doubleClickButton.dblclick();
      ButtonsPage.validateMessage.should("have.text", "You have done a double click");
      ButtonsPage.rightClickButton.rightclick();
      ButtonsPage.validateRightClickMessage.should("have.text", "You have done a right click");
      ButtonsPage.dynamicButton.click();
      ButtonsPage.validateDynamicButton.should("have.text", "You have done a dynamic click");
    });
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
