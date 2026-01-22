import React from 'react'
import { useState } from 'react';

const Header = () => {


  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  }

  return (
    <div>
        <div className=' flex justify-between items-end p-10'>
            <h2 className=' text-lg'>Hello <br /><span className=' text-xl font-bold'>username👋</span></h2>

            <button onClick={logOutUser}
            className=' bg-red-600 px-2 rounded font-semibold active:scale-95 hover:bg-red-700'>LOG OUT</button>
        </div>
    </div>
  )
}

export default Header