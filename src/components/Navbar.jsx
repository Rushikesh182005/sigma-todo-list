import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-800 text-white py-2'>
        <div className="logo">
            <span className='font-bold text-x1 mx-9'>iTask</span>
        </div>
     <ul className="flex gap-8 mx-20">
        <li className='cursor-pointer hover:font-bold transition-all duration-100'>home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-100'>your tasks</li>
     </ul>
    </nav>
  )
}

export default Navbar
