/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe("filtering", () => {
  const todoPage = new TodoPage();

  beforeEach(() => {
    todoPage.navigate();

    todoPage.addTodo("Clean kitchen");
    todoPage.addTodo("Bake bread");
    todoPage.addTodo("Wash laundry");

    todoPage.toggleTodo(2);
  });

  it("should filter 'Active' todos", () => {
    todoPage.filterByActive();
    todoPage.validateNumberOfTodos(2);
  });

  it("should filter 'Completed' todos", () => {
    todoPage.filterByCompleted();
    todoPage.validateNumberOfTodos(1);
  });

  it("should filter 'All' todos", () => {
    todoPage.filterByCompleted();
    todoPage.filterByAll();

    todoPage.validateNumberOfTodos(3);
  });
});
