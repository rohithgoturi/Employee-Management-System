import React from 'react'

const FailedTask = ({task}) => {
  return (
    <div className="h-full w-[300px] shrink-0 bg-red-400 rounded-xl" >
          <div className=" flex justify-between items-center">
            <h3 className="bg-red-600 px-3 py-1 ml-1 mt-1 rounded-xl">{task.category}</h3>
            <h4 className=" text-sm mr-1 font-medium">{task.date}</h4>
          </div>
          <div className="flex flex-col px-2 mt-5 gap-3">
            <h2 className=" text-xl font-bold">{task.title}</h2>
            <p className=" text-lg font-medium">{task.description}</p>
          </div>

          <div className=' flex justify-center items-center ml-1 mr-2'>
            <button className=' mt-4 ml-2 bg-black rounded-lg px-2 py-1 w-auto text-medium font-medium active:scale-95'>Retry</button>
          </div>
        </div>
  )
}

export default FailedTask