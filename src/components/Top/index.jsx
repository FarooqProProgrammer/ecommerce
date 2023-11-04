import React from 'react'
import { Link } from 'react-router-dom'

export default function Top() {
  return (
    <div className='w-full py-2 bg-black flex justify-center items-center gap-2 flex-wrap'>
      <p className='text-white'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
      <Link className='text-white underline'>Shop Now</Link>
    </div>
  )
}
