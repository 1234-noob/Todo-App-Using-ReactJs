import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
const Message = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    todoItems.length === 0 && (
      <p className="text-center font-semibold text-3xl my-5 ">Enjoy Your Day</p>
    )
  );
};

export default Message;
