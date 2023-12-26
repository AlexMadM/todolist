import {FilterValuesType, TodolistType} from "./App";
import {v1} from "uuid";

export const todolistsReducer=(state:TodolistType[],action:TodolistACType):TodolistType[]=>{
switch (action.type) {
    case 'REMOVE-TODOLIST':{
        return state.filter(el=>el.id !== action.id)

    }
    case 'CHANGE-TODOLIST':{
  return state.map(el=> el.id === action.id ? {...el, title:action.title} : el)
    }
    case 'ADD-TODOLIST':{
        let newTodolistId =v1()
        let newTodolist:TodolistType={id:newTodolistId,title:action.title,filter:'all'}
        return [newTodolist, ...state]
    }
    case 'CHANGE-FILTER':{
        return state.map(el=> el.id=== action.id ? {...el,filter:action.filter} :el)
    }
        default:return state
}
}

type TodolistACType =RemoveTodolistACType | ChangeTodolistTitleACType | AddTodolistACType | ChangeFilterACType

type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>
type ChangeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
type AddTodolistACType =ReturnType<typeof addTodolistAC>
type ChangeFilterACType=ReturnType<typeof changeFilterAC>

export const removeTodolistAC=(id:string)=>{
    return{
        type: 'REMOVE-TODOLIST', id
    }as const
}

export const changeTodolistTitleAC=(id:string,title:string)=>{
    return{
        type:'CHANGE-TODOLIST',id,title
    }as const
}

export const addTodolistAC=(title:string)=>{
    return {
        type:'ADD-TODOLIST', title
    }as const
}

export const changeFilterAC= (filter:FilterValuesType,id:string)=>{
    return {
        type: 'CHANGE-FILTER',filter,id
    }as const
}