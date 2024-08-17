import TodoItem from "./TodoItem";
import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      <div>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
