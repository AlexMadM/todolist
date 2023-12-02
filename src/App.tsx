import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./AddItemFormTodoList";

export type FilterValuesType = 'all' | 'completed' | 'active';
type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {


    function removeTask(id: string, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let filteredTasks = tasks.filter(t => t.id !== id)
        tasksObj[todolistId] = filteredTasks
        setTasks({...tasksObj})
    }

    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, isDone: false};
        let tasks = tasksObj[todolistId];
        let newTasks = [task, ...tasks];
        tasksObj[todolistId] = newTasks;
        setTasks({...tasksObj})
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId);
        if (todolist) {
            todolist.filter = value;
            setTodolist([...todolists])
        }
    }


    let todolistId1 = v1();
    let todolistId2 = v1();
    let [todolists, setTodolist] = useState<TodolistType[]>([
            {id: todolistId1, title: 'What to learn', filter: 'active'},
            {id: todolistId2, title: 'What to buy', filter: 'completed'},
        ]
    );
    let removeTodolist = (todolistId: string) => {
        let filteredTodolist = todolists.filter(tl => tl.id !== todolistId)
        setTodolist(filteredTodolist);
        delete tasksObj[todolistId];
        setTasks({...tasksObj});
    }
    let [tasksObj, setTasks] = useState({
            [todolistId1]: [{id: v1(), title: 'CSS', isDone: true},
                {id: v1(), title: 'JS', isDone: true},
                {id: v1(), title: 'React', isDone: false},
                {id: v1(), title: 'Redux', isDone: false},],
            [todolistId2]: [{id: v1(), title: 'Book', isDone: true},
                {id: v1(), title: 'Table', isDone: true},
                {id: v1(), title: 'Milk', isDone: false},
                {id: v1(), title: 'Redux', isDone: false},],
        }
    )

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone
            setTasks({...tasksObj});
        }


    }


    return (
        <div className="App">
            <AddItemForm addItem={} id={}/>
            {todolists.map((tl) => {

                let tasksForTodolist = tasksObj[tl.id];
                if (tl.filter === 'completed') {
                    tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
                }

                if (tl.filter === 'active') {
                    tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
                }

                return <Todolist key={tl.id} id={tl.id} title={tl.title}
                                 tasks={tasksForTodolist}
                                 removeTask={removeTask}
                                 changeFilter={changeFilter}
                                 addTask={addTask}
                                 changeTaskStatus={changeStatus}
                                 filter={tl.filter}
                                 removeTodolist={removeTodolist}/>
            })}


        </div>
    );
}

export default App;
