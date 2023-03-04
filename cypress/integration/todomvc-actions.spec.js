/// <reference types="cypress" />

import { TodoPage } from '../page-objects/todo-page'

describe('todo actions', () => {
  const todoPage = new TodoPage()

  beforeEach(() => {
    todoPage.navigate()
    todoPage.addTodo('Clean kitchen')
  })

  it('should add a new todo to the list', () => {
    todoPage.validateTodoText(0, 'Clean kitchen')
    todoPage.validateToggleState(0, false)
    todoPage.validateTodoCompleted(0, false)
    todoPage.validateNumberOfTodos(1)
  })

  it('should mark a todo as completed', () => {
    todoPage.toggleTodo(0)
    todoPage.validateToggleState(0, true)
    todoPage.validateTodoCompleted(0, true)
    todoPage.validateNumberOfTodos(1)
  })

  it('should clear completed todos', () => {
    todoPage.toggleTodo(0)
    todoPage.clearCompleted()
    todoPage.validateNumberOfTodos(0)
  })
})
