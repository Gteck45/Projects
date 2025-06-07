import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex  justify-between items-center px-4 h-14 py-5 ">

        <div className="logo font-bold text-white text-2xl">

          <span className="text-green-500 "> &lt; </span>
          Pass

          <span className="text-green-500 ">OP/&gt;  </span>
        </div>
        {/* <ul>
          <li className='flex gap-4'>

            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="About">About</a>
            <a className='hover:font-bold' href="Contact">Contact</a>
          </li>
        </ul> */}
        <button className='text-white flex items-center gap-2 bg-slate-700 rounded-full p-2'><img src="https://github.com/favicon.ico" className='invert' alt="" />Github</button>
      </div>

    </nav>
  )
}

export default Navbar