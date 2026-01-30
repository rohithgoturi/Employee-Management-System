import { useState } from "react";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [date, setDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState({})

const submitHandler = (e) => {
  e.preventDefault();

  const newTask = {
    taskTitle,
    taskDescription,
    date,
    assignTo,
    category,
    active: false,
    newTask: true,
    failed: false,
    completed: false,
  };

  const updatedData = userData.map((emp) => {
    if (emp.name === assignTo) {
      return {
        ...emp,
        tasks: [...emp.tasks, newTask],
        taskcount: {
          ...emp.taskcount,
          newTaskCount: emp.taskcount.newTaskCount + 1,
        },
      };
    }
    return emp;
  });

  setUserData(updatedData);

  // clear form
  setTaskTitle("");
  setTaskDescription("");
  setDate("");
  setAssignTo("");
  setCategory("");
};

  console.log(userData);


  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className=" flex flex-wrap justify-between w-full items-start bg-gray-900">

        <div className="  w-1/2 h-auto px-3 py-5">
          <div className=" px-10 py-1">
            <h2 className=" text-lg font-medium">Task Title</h2>
            <input
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value)
            }}
              className=" border px-2 w-full rounded-lg mt-2 py-1 font-normal"
              type="text"
              placeholder="Make UI design"
            />
          </div>

          <div className="  px-10 py-2">
            <h2 className=" text-lg font-medium">Date</h2>
            <input
            value={date}
            onChange={(e) => {
              setDate(e.target.value)
            }}
              className=" border px-2 w-full rounded-lg mt-2 py-1 font-normal"
              type="date"
            />
          </div>

          <div className="  px-10 py-2">
            <h2 className=" text-lg font-medium">Assign to</h2>
            <input
            value={assignTo}
            onChange={(e)=>{
              setAssignTo(e.target.value)
            }}
              className=" border px-2 w-full rounded-lg mt-2 py-1 font-normal"
              type="text"
              placeholder="employee name"
            />
          </div>

          <div className="  px-10 py-2">
            <h2 className=" text-lg font-medium">Category</h2>
            <input 
            value = {category}
            onChange={(e)=>{
              setCategory(e.target.value)
            }}
              className=" border px-2 w-full rounded-lg mt-2 py-1 font-normal"
              type="text"
              placeholder="design, development, testing"
            />
          </div>
        </div>

        <div className="px-10 ml-2 mb-5 py-6 w-2/5 ">
          <h2 className=" text-lg font-medium">Description</h2>
          <textarea 
          value = {taskDescription}
          onChange={(e)=> {
            setTaskDescription(e.target.value)
          }}
            className=" border px-2 w-full rounded-lg mt-2 py-1 font-normal"
            rows={5}
            placeholder="Task details..."
          ></textarea>

          <button type="submit" className=" w-full bg-green-500 py-2 text-lg font-medium rounded-lg mt-2">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
