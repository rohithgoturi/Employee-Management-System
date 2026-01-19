import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../Tasks/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
        <Header />
        <TaskListNumbers />
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard