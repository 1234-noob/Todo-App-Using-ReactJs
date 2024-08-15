import TodoItem from "./TodoItem";
import React from "react";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div>
        {todoItems.map((item) => (
          <TodoItem
            key={item.name}
            todoDate={item.dueDate}
            todoName={item.name}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
