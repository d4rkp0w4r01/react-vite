const TodoNew = (props) =>{
    console.log(`check point`,props);
    const {addNewTodo} = props;
    //addNewTodo(`suba`);
    const handleClick = () => {
        alert(`click me`);

    }
    const handleOnChange = (name) =>{
        console.log(`>>> handleOnchange`,name);
    }
    return(
        <div className='todo-new'>
        <input className='input' type="text"
        onChange={(event) => handleOnChange(event.target.value)}
        />
        <button className='button'
        onClick={handleClick}
        >Add</button>
        </div>
    
    );
}
export default TodoNew;