const TodoData = (props) =>{
    const {name, age, data} = props; //cach code nay hay su dung
    console.log(`check props: `, props)
    return(
      <div className='todo-data'>
        <div>Hello my name is {name}</div>
      <div>Leaning Hacking</div>
      <div>Learning Pwnable</div>
      </div>
    );
}
export default TodoData;