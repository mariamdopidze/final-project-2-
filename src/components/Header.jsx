import React from "react";
import { Link } from "react-router-dom";

const Header =()=>{

    return(
    <header className=" w-full h-20 bg-green-200 flex justify-between items-center px-4">
        <a href='/'>
       <h1 className='text-2xl text-gray-600'>Space X</h1>
      </a>
      <nav className='flex gap-4'>
        <Link to='/' className='text-lg text-gray-600 hover:text-blue-700'>
          Home
        </Link>
        <Link to='/about' className='text-lg text-gray-600 hover:text-blue-700'>
          About
        </Link>
        <Link to='/contact' className='text-lg text-gray-600 hover:text-blue-700'>
          Contact
        </Link>
        
      </nav>

    </header> 
    )
}

export default Header