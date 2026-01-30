import React from "react";
import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../Tasks/TaskList";

const EmployeeDashboard = (props) => {
  if (!props.data) return null;

  //handlers

  const handleAccept = (taskId) => {
    const updatedData = userData.map((emp) => {
      if (emp.id === data.id) {
        return {
          ...emp,
          tasks: emp.tasks.map((task) =>
            task.id === taskId
              ? { ...task, newTask: false, active: true }
              : task,
          ),
        };
      }
      return emp;
    });

    setUserData(updatedData);
  };

  const handleComplete = (taskId) => {
    const updatedData = userData.map((emp) => {
      if (emp.id === data.id) {
        return {
          ...emp,
          tasks: emp.tasks.map((task) =>
            task.id === taskId
              ? { ...task, active: false, completed: true }
              : task,
          ),
        };
      }
      return emp;
    });

    setUserData(updatedData);
  };

  const handleFailed = (taskId) => {
    const updatedData = userData.map((emp) => {
      if (emp.id === data.id) {
        return {
          ...emp,
          tasks: emp.tasks.map((task) =>
            task.id === taskId
              ? { ...task, active: false, failed: true }
              : task,
          ),
        };
      }
      return emp;
    });

    setUserData(updatedData);
  };

  const handleRetry = (taskId) => {
    const updatedData = userData.map((emp) => {
      if (emp.id === data.id) {
        return {
          ...emp,
          tasks: emp.tasks.map((task) =>
            task.id === taskId
              ? { ...task, failed: false, active: true }
              : task,
          ),
        };
      }
      return emp;
    });

    setUserData(updatedData);
  };

  return (
    <div>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
