import './Components/learn/todo/todo.css';
import TodoData from './Components/learn/todo/TodoData';
import TodoNew from './Components/learn/todo/TodoNew';
import ReactLogo from './assets/react.svg';
import { useState } from 'react';
const App = () => {
  const [todoList, setTodoList] = useState([
    //{id:1, name:`Leaning Hacking`},
    //{id:2, name:`Leaning Pwnable`},
    //{id:3, name:`Leaning Hacking`}
  ])

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000),
      name: name
    }
    setTodoList([...todoList, newTodo]);
  }
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      /{/* {todoList.length > 0 &&
      <TodoData
        todoList={todoList}
      />
      }

      {todoList.length === 0 &&
        <div className='todo-image'>
          <img src={ReactLogo} className='logo' />
        </div>
      }
    </div> */}

      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
        />


        :
        <div className='todo-image'>
          <img src={ReactLogo} className='logo' />
        </div>
      }
    </div>
  )
}
export default App