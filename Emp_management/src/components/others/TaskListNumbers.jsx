import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex gap-5 justify-between screen mt-10 px-10'>
        <div className=' bg-blue-500 w-[45%] px-6 py-9 rounded-xl'>
            <h2 className=' text-3xl font-bold ml-2'>{data.newTaskCount}</h2>
            <h3 className=' text-xl font-semibold ml-2'>New Tasks</h3>
        </div>

        <div className=' bg-green-500 w-[45%] px-6 py-9 rounded-xl'>
            <h2 className=' text-3xl font-bold ml-2'>
                {data.completedCount}
            </h2>
            <h3 className=' text-xl font-semibold ml-2'>Tasks Completed</h3>
        </div>

        <div className=' bg-yellow-500 w-[45%] px-6 py-9 rounded-xl'>
            <h2 className=' text-3xl font-bold ml-2'>
                {data.activeCount}
            </h2>
            <h3 className=' text-xl font-semibold ml-2'>Pending Tasks</h3>
        </div>

        <div className=' bg-red-500 w-[45%] px-6 py-9 rounded-xl'>
            <h2 className=' text-3xl font-bold ml-2'>
                {data.failedCount}
            </h2>
            <h3 className=' text-xl font-semibold ml-2'>Tasks Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers