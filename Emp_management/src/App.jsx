import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Authentication/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { employees } = useContext(AuthContext) || {};
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  // 🔥 Restore login after refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed.role);
      setLoggedInUserData(parsed.data || null);
    }
  }, []);

  const LoginHandler = (email, password) => {
    // ADMIN
    if (email === "admin@gmail.com" && password === "123") {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
      return;
    }

    // EMPLOYEE
    if (employees) {
      const employee = employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        return;
      }
    }

    alert("Invalid credentials");
  };

  return (
    <>
      {!user && <Login LoginHandler={LoginHandler} />}

      {user === "admin" && <AdminDashboard />}

      {user === "employee" && loggedInUserData && (
        <EmployeeDashboard data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
