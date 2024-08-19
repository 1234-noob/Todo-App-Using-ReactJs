import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import Message from "./components/Message";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <div className="w-fit mx-auto bg-white min-h-80 mt-72 rounded-lg">
        <AppName></AppName>

        <AddTodo></AddTodo>
        <Message></Message>
        <TodoItems></TodoItems>
      </div>
    </TodoItemsContextProvider>
  );
}

export default App;
