import React from 'react'

const AcceptTask = () => {
  return (
    <div className="h-full w-[300px] shrink-0 bg-yellow-500 rounded-xl" >
          <div className=" flex justify-between items-center">
            <h3 className="bg-red-600 px-3 py-1 ml-1 mt-1 rounded-xl">High</h3>
            <h4 className=" text-sm mr-1 font-medium">19 January 2026</h4>
          </div>
          <div className="flex flex-col px-2 mt-5 gap-3">
            <h2 className=" text-xl font-bold">POST A REEL</h2>
            <p className=" text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, qui!</p>
          </div>

          <div className=' flex justify-between items-center ml-1 mr-2'>
            <button className=' mt-4 ml-2 bg-green-500 rounded-lg px-2 py-1 w-auto text-sm font-medium active:scale-95'>Mark as Completed</button>

            <button className=' mt-4 ml-2 bg-red-500 rounded-lg px-2 py-1 w-auto text-sm font-medium active:scale-95'> Mark as Failed</button>
          </div>
        </div>
  )
}

export default AcceptTask