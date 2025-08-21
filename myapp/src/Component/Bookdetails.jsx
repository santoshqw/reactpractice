import React from 'react'
import bookimage from '../assets/react.svg'

const Bookdetails = ({className}) => {
  return (
    <div className={`${className}  max-w-2xl flex flex-col border shadow-xl border-gray-200 min-w-44 justify-around p-3.5 rounded`}>
       <div className='h-48 border border-gray-200 rounded-xl'>
        <img src={bookimage} alt="books image"  className='h-full w-full object-contain'/>
       </div>
       <div className='flex items-center flex-col border border-gray-100 rounded-xl p-2.5 flex-1 space-y-1.5'>
        <div>
        <p className='text-2xl font-bold mt-1.5'>book name:physics</p>
         <p> <span>price: </span>Rs.1000</p>
         <p>author:hari sapkota</p>
         <p>Buyers:1k+</p>
         <p>posted by:santosh majakoti</p>
       </div>
       <button className='bg-black text-white w-36 p-1.5 rounded-xl'>Buy</button>
       </div>
       
    </div>
  )
}

export default Bookdetails