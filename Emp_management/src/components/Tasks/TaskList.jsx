import React from "react";
import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompletedTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  return (
    <div className="h-screen px-10 flex flex-col">
      <div
        id="tasklist"
        className="mt-10 h-[45%] w-full rounded-3xl flex gap-5 flex-nowrap overflow-x-auto overflow-y-hidden py-5"
      >
        {data.tasks.map((elem,idx)=>{
          if(elem.active) {
            return <AcceptTask key={idx} task={elem} />
          }

          if(elem.newTask){
            return <NewTask key={idx} task={elem}  />
          }

          if(elem.completed){
            return <CompletedTask key={idx} task={elem} />
          }

          if(elem.failed){
            return <FailedTask key={idx} task={elem} />
          }
        })}
      </div>
    </div>
  );
};

export default TaskList;
