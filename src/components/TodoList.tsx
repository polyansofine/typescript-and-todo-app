import React from "react";
import TodoListItem from "./TodoListItem";

type TodoListProps = {
  todos: Todo[];
  toggleTodo: ToggleTodo;
};

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map((item, index) => (
        <TodoListItem todo={item} key={index} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;
