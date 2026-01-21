import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Authentication/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);
  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser");

      if (loggedInUser) {
        setUser(loggedInUser.role);
      }
    }
  }, [authData]);

  const LoginHandler = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
      setUser("admin");
      console.log("Admin logged in");
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && password == e.password,
      );
      if (employee) {
        setUser("employee");



        setLoggedInUserData(employee);
        localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" }),
      );
      }

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee" }),
      );
    } else {
      alert("invalid credentials");
    }
  };

  const authdata = useContext(AuthContext);
  console.log(authdata);

  return (
    <div>
      {!user ? <Login LoginHandler={LoginHandler} /> : ""}

      {user == "admin" ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}
    </div>
  );
};

export default App;
