import React, { useState } from 'react'
import AddToDo from './components/AddToDo';
import ListToDo from './components/ListToDo';
import Stats from './components/Stats';
import "./App.css"

const App = () => {
    const completed = true;
    const initialToDo = [
            {
                id:1,
                task:"react",
                description:"learn react",
                completed:false,
            },
            {
                id:2,
                task:"node js",
                description:"learn node js",
                completed:true,
            }
        ]
        const [todo , setTodo] = useState(initialToDo);

        const [editVal,setEditVal] = useState(null);

        const handleAdd = (input) =>{

            if(!input.task || !input.description){
                alert("field is required");
                return;

            }else if(editVal){

                setTodo((todo)=>todo.map((t)=>t.id === editVal.id ? 
                {
                    ...t,
                    task:input.task,
                    description:input.description,
                } : t))

                setEditVal(null);

            }else{

                const newToDo = {
                    id:Date.now(),
                    task:input.task,
                    description:input.description,
                    completed:false,
                }

                setTodo((prev)=>[...prev,newToDo]);
            }
        }
        console.log("todos :",todo);

        const handleEdit = (id) =>{
            const todos = todo.find((t)=>t.id === id);
            setEditVal(todos);
        }

        const handleDelete = (id) =>{
            setTodo(todo.filter((t)=>t.id !== id));
        }

        const handleToggleToDo = (id) =>{
            setTodo((prev)=>prev.map((todo)=>todo.id === id ? {...todo,completed:!todo.completed}:todo));
        }

        const TotalTodos = todo.length;

        const completedTodos = todo.filter((t)=>t.completed === true).length; 

        const pendingTodo = TotalTodos - completedTodos;


    return (
        <>
            <div className="app">

                <h1 className='h1'>TO DO APP</h1>

                <AddToDo handleAdd={handleAdd} editVal={editVal}/>

                <Stats pendingTodo={pendingTodo} completedTodos={completedTodos} TotalTodos={TotalTodos}/>

                <ListToDo todo={todo} handleEdit={handleEdit} handleDelete={handleDelete} handleToggleToDo={handleToggleToDo}/>
            </div>
        </>
    )
}

export default App
