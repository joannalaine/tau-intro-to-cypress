/// <reference types="cypress" />

describe("filtering", () => {
  beforeEach(() => {
    cy.visit("http://todomvc-app-for-testing.surge.sh");

    cy.get(".new-todo").type("Clean kitchen{enter}");
    cy.get(".new-todo").type("Bake bread{enter}");
    cy.get(".new-todo").type("Wash laundry{enter}");

    cy.get(".todo-list li:nth-child(3) .toggle").click();
  });

  it("should filter 'Active' todos", () => {
    cy.contains("Active").click();
    cy.get(".todo-list li").should("have.length", 2);
  });

  it("should filter 'Completed' todos", () => {
    cy.contains("Completed").click();
    cy.get(".todo-list li").should("have.length", 1);
  });

  it("should filter 'All' todos", () => {
    cy.contains("Completed").click();
    cy.contains("All").click();
    
    cy.get(".todo-list li").should("have.length", 3);
  });
});
