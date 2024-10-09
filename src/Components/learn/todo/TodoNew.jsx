const TodoNew = (props) =>{
    console.log(`check point`,props);
    const {addNewTodo} = props;
    addNewTodo(`suba`);
    return(
        <div className='todo-new'>
        <input className='input' type="text"/>
        <button className='button'>Add</button>
        </div>
    );
}
export default TodoNew;