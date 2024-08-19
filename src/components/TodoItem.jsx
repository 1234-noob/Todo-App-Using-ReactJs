import { MdDeleteOutline } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <>
      <div className="flex justify-evenly space-x-10 my-4">
        <div className="w-52 h-10 ml-3 flex  justify-center items-center px-2 text-2xl font-semibold">
          {todoName}
        </div>
        <div className="w-36 h-10 p-3 flex  justify-center items-center font-semibold text-xl">
          {todoDate}
        </div>
        <button
          type="button"
          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mr-3
  min-w-20 flex items-center justify-center ml-8"
          onClick={() => deleteItem(todoName)}
        >
          <MdDeleteOutline className="text-2xl" />
        </button>
      </div>
    </>
  );
}

export default TodoItem;
