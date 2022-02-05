import React, { useState } from "react";

type AddTodoFormProps = {
  addTodo: AddTodo;
};

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState("");
  return (
    <div>
      {" "}
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            addTodo(text);
            setText("");
          }}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
