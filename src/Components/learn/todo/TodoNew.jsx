import { useState } from "react";

const TodoNew = (props) =>{
    const [valueInput, setValueInput]  = useState("hahaha")
    //addNewTodo(`suba`);
    const handleClick = () => {
        console.log(`check value: `,valueInput);

    }
    const handleOnChange = (name) =>{
  
        setValueInput(name)
    }
    return(
        <div className='todo-new'>
        <input className='input' type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        />
        <button className='button'
        onClick={handleClick}
        >Add</button>
        <div>
            My text input is = {valueInput}
        </div>
        </div>
    
    );
}
export default TodoNew;