/// <reference types="cypress" />

import {
  addTodo,
  clearCompleted,
  navigate,
  toggleTodo,
  validateNumberOfTodos,
  validateTodoCompleted,
  validateTodoText,
  validateToggleState,
} from '../page-objects/todo-page'

describe('todo actions', () => {
  beforeEach(() => {
    navigate()
    addTodo('Clean kitchen')
  })

  it('should add a new todo to the list', () => {
    validateTodoText(0, 'Clean kitchen')
    validateToggleState(0, false)
    validateTodoCompleted(0, false)
    validateNumberOfTodos(1)
  })

  it('should mark a todo as completed', () => {
    toggleTodo(0)
    validateToggleState(0, true)
    validateTodoCompleted(0, true)
    validateNumberOfTodos(1)
  })

  it('should clear completed todos', () => {
    toggleTodo(0)
    clearCompleted()
    validateNumberOfTodos(0)
  })
})
