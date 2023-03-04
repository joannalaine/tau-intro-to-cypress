export class TodoPage {
  navigate() {
    cy.visit('http://todomvc-app-for-testing.surge.sh')
  }

  addTodo(todoText) {
    cy.get('.new-todo').type(todoText + '{enter}')
  }

  clearCompleted() {
    cy.get('.footer .clear-completed').click()
  }

  filterByActive() {
    cy.get('.filters').contains('Active').click()
  }

  filterByAll() {
    cy.get('.filters').contains('All').click()
  }

  filterByCompleted() {
    cy.get('.filters').contains('Completed').click()
  }

  toggleTodo(todoIndex) {
    cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
  }

  validateNumberOfTodos(expectedNumberOfTodos) {
    const numTodos = cy.get('.todo-list li')
    numTodos.should('have.length', expectedNumberOfTodos)
  }

  validateTodoCompleted(todoIndex, shouldBeCompleted) {
    const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
    label.should(
      `${shouldBeCompleted ? '' : 'not.'}have.css`,
      'text-decoration-line',
      'line-through',
    )
  }

  validateTodoText(todoIndex, expectedText) {
    const label = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) label`)
    label.should('have.text', expectedText)
  }

  validateToggleState(todoIndex, shouldBeToggled) {
    const toggle = cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`)
    toggle.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
  }
}
