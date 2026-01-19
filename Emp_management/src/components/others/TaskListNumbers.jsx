import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex gap-5 justify-between screen mt-10 px-10'>
        <div className=' bg-blue-500 w-[45%] px-6 py-9 rounded-xl'>
            <h2 className=' text-3xl font-bold ml-2'>2</h2>
            <h3 className=' text-xl font-semibold ml-2'>New Tasks</h3>
        </div>

        <div className=' bg-green-500 w-[45%] px-6 py-9 rounded-xl'>
            <h2 className=' text-3xl font-bold ml-2'>5</h2>
            <h3 className=' text-xl font-semibold ml-2'>Tasks Completed</h3>
        </div>

        <div className=' bg-yellow-500 w-[45%] px-6 py-9 rounded-xl'>
            <h2 className=' text-3xl font-bold ml-2'>0</h2>
            <h3 className=' text-xl font-semibold ml-2'>Pending Tasks</h3>
        </div>

        <div className=' bg-red-500 w-[45%] px-6 py-9 rounded-xl'>
            <h2 className=' text-3xl font-bold ml-2'>0</h2>
            <h3 className=' text-xl font-semibold ml-2'>Tasks Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers