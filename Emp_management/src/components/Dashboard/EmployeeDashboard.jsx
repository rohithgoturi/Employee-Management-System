import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../Tasks/TaskList'


const EmployeeDashboard = ({ data }) => {
  if(!data) return null;

  return (
    <div>
        <Header data={data}/>
        <TaskListNumbers data={data} />
        <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard