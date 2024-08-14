function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <>
      <div className="flex justify-evenly space-x-10 my-4">
        <div className="w-52 h-10 ml-3 flex  justify-center items-center px-2 ">
          {todoName}
        </div>
        <div className="w-36 h-10 p-3 flex  justify-center items-center">
          {todoDate}
        </div>
        <button
          type="button"
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mr-3
  min-w-20"
          onClick={() => onDeleteClick(todoName)}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default TodoItem;
