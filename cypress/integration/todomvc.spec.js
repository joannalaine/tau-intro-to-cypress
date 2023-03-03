/// <reference types="cypress" />

it("should be able to add, complete, and clear a todo", () => {
  cy.visit("http://todomvc-app-for-testing.surge.sh");
  cy.get(".new-todo").type("Clean kitchen{enter}");
  cy.get(".toggle").click();
  cy.contains("Clear").click();
});
