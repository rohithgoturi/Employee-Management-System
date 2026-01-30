import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const getStatus = (task) => {
  if (task.failed) return "Failed";
  if (task.completed) return "Completed";
  if (task.active) return "Active";
  if (task.newTask) return "New";
  return "—";
};

const statusColor = (status) => {
  switch (status) {
    case "Failed":
      return "text-red-300";
    case "Completed":
      return "text-green-300";
    case "Active":
      return "text-yellow-300";
    case "New":
      return "text-blue-300";
    default:
      return "text-white";
  }
};

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const employees = userData?.employees || [];

  return (
    <div className="w-full px-10 mt-5 mb-10">

      {/* Header */}
      <div className="flex bg-green-700 text-white font-semibold px-5 py-3 rounded-t-lg">
        <div className="w-1/5">Employee</div>
        <div className="w-1/5">Title</div>
        <div className="w-1/5">Category</div>
        <div className="w-1/5">Date</div>
        <div className="w-1/5">Status</div>
      </div>

      {/* Body */}
      <div className="h-[220px] overflow-auto no-scrollbar">
        {userData.map((emp) =>
          emp.tasks.map((task, index) => {
            const status = getStatus(task);

            return (
              <div
                key={`${emp.id}-${index}`}
                className="flex bg-green-600 text-white px-5 py-3 border-b border-green-400"
              >
                <div className="w-1/5">{emp.name}</div>
                <div className="w-1/5">{task.title}</div>
                <div className="w-1/5">{task.category}</div>
                <div className="w-1/5">{task.date}</div>
                <div className={`w-1/5 font-semibold ${statusColor(status)}`}>
                  {status}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AllTask;
