import React from 'react'

const Footer = () => {
    return (
        <div className='flex bg-slate-800 text-white flex-col justify-center items-center  w-full'>

            <div className="logo font-bold text-white text-2xl">

                <span className="text-green-500 "> &lt; </span>
                Pass

                <span className="text-green-500 ">OP/&gt;  </span>
            </div>
            <div className='flex'>

                Created with   -<span className='px-3'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FE2F2F" className="injected-svg" data-src="https://cdn.hugeicons.com/icons/favourite-stroke-rounded.svg" xmlnsXlink="http://www.w3.org/1999/xlink" role="img" color="red">
                        <path d="M10.4107 19.9677C7.58942 17.858 2 13.0348 2 8.69444C2 5.82563 4.10526 3.5 7 3.5C8.5 3.5 10 4 12 6C14 4 15.5 3.5 17 3.5C19.8947 3.5 22 5.82563 22 8.69444C22 13.0348 16.4106 17.858 13.5893 19.9677C12.6399 20.6776 11.3601 20.6776 10.4107 19.9677Z" stroke="#e70b0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </span>
                  by Gteck45
            </div>
        </div>
    )
}

export default Footer