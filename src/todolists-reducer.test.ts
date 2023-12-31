import {
    addTodolistAC,
    changeFilterAC,
    changeTodolistTitleAC,
    removeTodolistAC,
    todolistsReducer
} from './todolists-reducer'
import { v1 } from 'uuid'
import { TodolistType } from './App'

test('correct todolist should be removed', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]

    const endState = todolistsReducer(startState, removeTodolistAC(todolistId1))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistId2)
})

test('correct todolist title', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()
    let newTodolistTitle= 'new'

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]

    const endState = todolistsReducer(startState, changeTodolistTitleAC(todolistId2,newTodolistTitle))

    expect(endState[0].title).toBe( 'What to learn')
    expect(endState[1].title).toBe(newTodolistTitle)
})

test('add todolist', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()
    let newTodolistTitle= 'new'

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]

    const endState = todolistsReducer(startState, addTodolistAC(newTodolistTitle))

    expect(endState.length).toBe(3)

})

test('CHANGE-FILTER', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()
  const filter= "active"

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to buy', filter: 'all'}
    ]

    const endState = todolistsReducer(startState, changeFilterAC(filter,todolistId1))

    expect(endState[0].filter).toBe("active")

})