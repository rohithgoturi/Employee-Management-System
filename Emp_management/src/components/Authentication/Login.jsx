import React, {useState} from "react";

const Login = ({LoginHandler}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler =(e) =>{
        e.preventDefault();
        

        LoginHandler(email, password);
        setEmail("")
        setPassword("")
    }

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className=" border m-10 flex flex-col items-center justify-center p-10 rounded-3xl shadow-lg shadow-amber-200 ">

        <h2 className=" text-xl font-extrabold font-mono text-yellow-400 mt-5">
          Welcome Back Again!!
        </h2>

        <form className=" flex flex-col items-center justify-center mb-10" onSubmit={(e)=> submitHandler(e)}>

          <input 
          required
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
            className=" mt-5 border-amber-100 border-2 shadow-amber-100 bg-gray-900 hover:bg-gray-800 p-2.5 text-lg font-normal font-sans rounded-xl focus:bg-gray-100 focus:text-black"
            type="email"
            placeholder="Enter your email address"
          />

          <input 
          required
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
            className=" mt-5 border-amber-100 border-2 shadow-amber-100 bg-gray-900 hover:bg-gray-800 p-2.5 text-lg font-normal font-sans rounded-xl
            focus:bg-gray-100 focus:text-black"
            type="password"
            placeholder="Enter your password"
          />

          <button className=" bg-amber-50 w-full mt-5 p-2.5 text-lg font-semibold font-sans text-black active:scale-95 hover:bg-gray-500" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
