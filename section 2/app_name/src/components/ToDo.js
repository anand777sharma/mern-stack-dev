import React, { useState } from 'react'
import './todo.css';

const ToDo = () => {
const [todoList, setToDoList] = useState([]);//useState snippet
const [task,setTask] = useState("");
const addToDo=()=>{

// todoList.push(task);

setToDoList([...todoList,task]);
setTask("")

}

const removeToDo=(index)=>{
    let temp=todoList;
    temp.splice(index,1)
    setToDoList([...temp])
}
const showToDoList=()=>{
    return todoList.map((task,i)=>(
        <div className='task'>
            <p>{task}{i}</p>
            <button onClick={()=>{removeToDo(i)}} className='btn btn-danger ml-auto'>
            <i class="fa fa-trash"></i>
            </button>
        </div>
    ))
}
  return (
    <div className='container'>
        <div className='card'>
            <div className='card-header'>
                <h4>todo list</h4>
               
            </div>
            <div className='card-body'>
                <div className='input-group'>
                    <input className='from-control' value={task} onChange={(e)=>{setTask(e.target.value)}}/>
                    <button className='btn btn-primary' onClick={addToDo}>add new task</button>
                </div>
                {showToDoList()}
            </div>
            
        </div>
    </div>
  )
}

export default ToDo