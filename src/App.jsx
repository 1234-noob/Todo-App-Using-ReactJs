import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Message from "./components/Message";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItems = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItems,
        deleteItem,
      }}
    >
      <div className="w-fit mx-auto bg-white min-h-80 mt-72 rounded-lg">
        <AppName></AppName>

        <AddTodo></AddTodo>
        <Message></Message>
        <TodoItems></TodoItems>
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
