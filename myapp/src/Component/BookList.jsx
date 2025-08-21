import React from 'react'
import BookCard from './BookCard'

const BookList = () => {
  return (
     <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-6 mt-[10vh]'>
      {
        [1,2,3,4,5,6,7,8,9,10].map((_ ,i) =>(

          <BookCard key={i}></BookCard>
        ))
      }
     </div>
  )
}

export default BookList