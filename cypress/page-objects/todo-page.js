/// <reference types="cypress" />

export function navigate() {
  cy.visit('http://todomvc-app-for-testing.surge.sh')
}

export function addTodo(todoText) {
  cy.get('.new-todo').type(todoText + '{enter}')
}

export function clearCompleted() {
  cy.get('.footer .clear-completed').click()
}

export function filterByActive() {
  cy.get('.filters').contains('Active').click()
}

export function filterByAll() {
  cy.get('.filters').contains('All').click()
}

export function filterByCompleted() {
  cy.get('.filters').contains('Completed').click()
}

export function toggleTodo(todoIndex) {
  cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
}

export function validateNumberOfTodos(expectedNumberOfTodos) {
  const numTodos = cy.get('.todo-list li')
  numTodos.should('have.length', expectedNumberOfTodos)
}

export function validateTodoCompleted(todoIndex, shouldBeCompleted) {
  const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
  label.should(
    `${shouldBeCompleted ? '' : 'not.'}have.css`,
    'text-decoration-line',
    'line-through',
  )
}

export function validateTodoText(todoIndex, expectedText) {
  const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
  label.should('have.text', expectedText)
}

export function validateToggleState(todoIndex, shouldBeToggled) {
  const toggle = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`)
  toggle.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
}
