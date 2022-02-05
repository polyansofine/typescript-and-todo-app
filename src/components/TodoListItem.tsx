import React from "react";

type Props = {
  todo: Todo;
  toggleTodo: ToggleTodo;
};

const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <div>
      <li>
        <label
          style={{ textDecoration: todo.complete ? "line-through" : undefined }}
        >
          <input
            type="checkbox"
            checked={todo.complete}
            onClick={() => toggleTodo(todo)}
          />
          {todo.text}
        </label>
      </li>
    </div>
  );
};
export default TodoListItem;
