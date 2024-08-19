import { useRef, useContext } from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const todoNameElement = useRef(null);
  const todoDateElement = useRef(null);
  const { addNewItems } = useContext(TodoItemsContext);

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    console.log(todoName, todoDate);
    if (todoDate !== "" && todoName !== "") {
      addNewItems(todoName, todoDate);
      todoNameElement.current.value = "";
      todoDateElement.current.value = "";
    }
  };

  return (
    <form onSubmit={handleAddButtonClicked}>
      <div className="flex justify-evenly space-x-10 my-4">
        <input
          type="text"
          placeholder="Enter Todo Here"
          className="w-52 h-10 ml-3 outline-none rounded-md px-2 placeholder-black text-xl border-3 font-semibold"
          ref={todoNameElement}
        />
        <input
          type="date"
          className="w-44 h-10 p-3 text-xl text-black rounded-md border-3 font-semibold "
          ref={todoDateElement}
        />
        <button
          type="submit"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-3 min-w-20 flex items-center justify-center"
        >
          <MdOutlineAddCircle className="text-2xl" />
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
