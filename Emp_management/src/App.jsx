import React, {useState} from 'react'
import Login from './components/Authentication/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import {getLocalStorage} from './utils/LocalStorage'

const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // })
  
  const [user, setUser] = useState('')

  const LoginHandler = (email, password) => {
    if(email=='admin@gmail.com' && password=='123'){
      setUser('admin')
      console.log('Admin logged in')
    }
    else if(email=='employee@gmail.com' && password=='123'){
      setUser('employee')
      console.log("employee logged in")
    }
    else{
      alert('invalid credentials')
    }
  }

  // LoginHandler('admin@gmail.com', '123')

  return (
    <div>
      {!user ? <Login LoginHandler={LoginHandler}/> : ''}

      {user=='admin'? <AdminDashboard /> : <EmployeeDashboard />}

    </div>
  )
}

export default App