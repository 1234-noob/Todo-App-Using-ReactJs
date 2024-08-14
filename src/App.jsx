import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import Message from "./components/Message";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    if (itemName !== "" && itemDueDate !== " ") {
      const newTodoItems = [
        ...todoItems,
        { name: itemName, dueDate: itemDueDate },
      ];
      setTodoItems(newTodoItems);
    }
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <div className="w-fit mx-auto bg-white min-h-80 mt-72 rounded-lg">
      <AppName></AppName>

      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <Message></Message>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </div>
  );
}

export default App;
