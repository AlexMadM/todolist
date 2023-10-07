import React from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";

let tasks1: Array<TaskType>  = [
    {id: 1, title: 'CSS', isDone: true},
    {id: 2, title: 'JS', isDone: true},
    {id: 3, title: 'React', isDone: false},
]

let tasks2: Array<TaskType> = [
    {id: 1, title: 'The Matrix', isDone: true},
    {id: 2, title: 'The Matrix 2', isDone: true},
    {id: 3, title: 'The Matrix 3', isDone: false},
]

function App() {
    return (
        <div className="App">
            <Todolist title='What to learn' tasks={tasks1}/>
            <Todolist title='Movie' tasks={tasks2}/>
        </div>
    );
}

export default App;
