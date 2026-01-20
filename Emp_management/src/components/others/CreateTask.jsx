import React from "react";

const CreateTask = () => {
  return (
    <div>
      <form className=" flex flex-wrap justify-between w-full items-start bg-gray-900">

        <div className="  w-1/2 h-auto px-3 py-5">
          <div className=" px-10 py-1">
            <h2 className=" text-lg font-medium">Task Title</h2>
            <input
              className=" border px-2 w-full rounded-lg mt-2 py-1 font-normal"
              type="text"
              placeholder="Make UI design"
            />
          </div>

          <div className="  px-10 py-2">
            <h2 className=" text-lg font-medium">Date</h2>
            <input
              className=" border px-2 w-full rounded-lg mt-2 py-1 font-normal"
              type="date"
            />
          </div>

          <div className="  px-10 py-2">
            <h2 className=" text-lg font-medium">Assign to</h2>
            <input
              className=" border px-2 w-full rounded-lg mt-2 py-1 font-normal"
              type="text"
              placeholder="employee name"
            />
          </div>

          <div className="  px-10 py-2">
            <h2 className=" text-lg font-medium">Category</h2>
            <input
              className=" border px-2 w-full rounded-lg mt-2 py-1 font-normal"
              type="text"
              placeholder="design, development, testing"
            />
          </div>
        </div>

        <div className="px-10 ml-2 mb-5 py-6 w-2/5">
          <h2 className=" text-lg font-medium">Description</h2>
          <textarea
            className=" border px-2 w-full rounded-lg mt-2 py-1 font-normal"
            rows={5}
            placeholder="Task details..."
          ></textarea>

          <button className=" w-full bg-green-500 py-2 text-lg font-medium rounded-lg mt-2">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
