/// <reference types="cypress" />

import {
  addTodo,
  filterByActive,
  filterByAll,
  filterByCompleted,
  navigate,
  toggleTodo,
  validateNumberOfTodos,
} from '../page-objects/todo-page'

describe('filtering', () => {
  beforeEach(() => {
    navigate()

    addTodo('Clean kitchen')
    addTodo('Bake bread')
    addTodo('Wash laundry')

    toggleTodo(2)
  })

  it("should filter 'Active' todos", () => {
    filterByActive()
    validateNumberOfTodos(2)
  })

  it("should filter 'Completed' todos", () => {
    filterByCompleted()
    validateNumberOfTodos(1)
  })

  it("should filter 'All' todos", () => {
    filterByCompleted()
    filterByAll()

    validateNumberOfTodos(3)
  })
})
