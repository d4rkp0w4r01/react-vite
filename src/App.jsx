import './Components/learn/todo/todo.css';
import TodoData from './Components/learn/todo/TodoData';
import TodoNew from './Components/learn/todo/TodoNew';
import ReactLogo from  './assets/react.svg';
const App = () => {
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
      data={data}/>
      <div className='todo-image'>
      <img src={ReactLogo} className='logo' />
      </div>
    </div>
  )
}
export default App