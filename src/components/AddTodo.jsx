import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleDateChange = (e) => {
    setTodoDate(e.target.value);
  };

  const handleAddButtonClicked = (itemName, itemDate) => {
    onNewItem(itemName, itemDate);
    setTodoName(" ");
    setTodoDate(" ");
  };

  return (
    <div className="flex justify-evenly space-x-10 my-4">
      <input
        type="text"
        placeholder="Enter Todo Here"
        className="w-52 h-10 ml-3 outline-none bordee-2xl px-2 placeholder-black text-xl"
        onChange={handleNameChange}
        value={todoName}
      />
      <input
        type="date"
        className="w-44 h-10 p-3 text-xl text-black"
        onChange={handleDateChange}
        value={todoDate}
      />
      <button
        type="button"
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-3
  min-w-20"
        onClick={() => handleAddButtonClicked(todoName, todoDate)}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
