import './Components/learn/todo/todo.css';
import TodoData from './Components/learn/todo/TodoData';
import TodoNew from './Components/learn/todo/TodoNew';
import ReactLogo from  './assets/react.svg';
import { useState } from 'react';
const App = () => {
  const[todoList, setTodoList] =  useState([
    {id:1, name:`Leaning Hacking`},
    {id:2, name:`Leaning Pwnable`},
    {id:3, name:`Leaning Hacking`}
  ])
  const name = `bryan`
  const age = 25
  const data = {
    address:`hanoi`,
    country:`vietnam`
  }
  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew 
       addNewTodo={addNewTodo}/>
      
      <TodoData
      name={name}
      age={age}
      data={data}
      todoList={todoList}/>
      <div className='todo-image'>
      <img src={ReactLogo} className='logo' />
      </div>
    </div>
  )
}
export default App