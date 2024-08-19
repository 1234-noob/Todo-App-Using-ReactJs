import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItems: () => {},
  deleteItem: () => {},
});
const todoItemsReducer = (todoItems, action) => {
  let newTodoItems = todoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...todoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
    console.log(newTodoItems);
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = todoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchItems] = useReducer(todoItemsReducer, []);

  const addNewItems = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItems,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
