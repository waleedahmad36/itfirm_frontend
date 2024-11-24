import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [loading,setLoading] = useState(false)
    // const handleLogout = async () => {
    //     setLoading(true)
    //     try {
    //         const response  =  await fetch("http://localhost:5000/api/v1/auth/logout",{
    //             method:"POST",
    //             credentials:"include"
    //         })
    //         if(response.ok){
    //             window.location.href = "/login"
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }finally{
    //         setLoading(false)
    //     }
    // }
  return (
    <div className='flex justify-between items-center px-4 py-3   sticky top-0 z-50 bg-white/80 backdrop-blur-sm' >
        <img src='/logo.png' alt='logo' className='w-20 h-20' />


        <div className=' gap-8 items-center text-lg font-medium hidden lg:flex' >
            <Link to="/"  className='hover:text-red-600' >Home</Link>
            <Link to="/courses"  className='hover:text-red-600' >Courses</Link>
            <Link to="/about"  className='hover:text-red-600' >About</Link>
            <Link to="/contact"  className='hover:text-red-600' >Contact</Link>
        </div>
        <button  className='bg-red-500 px-4 py-2 rounded-md border-none outline-none text-white'>
            {loading ? "Logging out..." : "Logout"}
        </button>
    </div>
  )
}

export default Navbar