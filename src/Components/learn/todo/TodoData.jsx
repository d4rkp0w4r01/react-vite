const TodoData = (props) => {
  const { todoList, deleteTodo } = props;
  const handleRemove = (id) => {
    deleteTodo(id);
  };
  console.log(">>> check props: ", todoList);
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {
        console.log("check map: ", item, index);
        return (
          <div className={"todo-item"} key={item.id}>
            <div>{item.name}</div>
            <button type="button" onClick={() => handleRemove(item.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoData;
