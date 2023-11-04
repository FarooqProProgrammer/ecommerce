import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai"
import { useMediaQuery } from 'react-responsive'

export default function Header() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 990px)' })


    return (
        <div className='w-full h-[70px] border-b-2 border-gray-200 flex justify-around items-center'>
            <h5 className='text-3xl font-bold'>Exculisive</h5>
            {
                !isTabletOrMobile && <>
                    <ul className='flex justify-center items-center gap-5'>
                        <li>
                            <Link className='cursor-pointer'>Home</Link>
                        </li>
                        <li>
                            <Link className='cursor-pointer'>Contact</Link>
                        </li>
                        <li>
                            <Link className='cursor-pointer'>About</Link>
                        </li>
                        <li>
                            <Link className='cursor-pointer'>Sign up</Link>
                        </li>

                    </ul>
                    <div className='w-[400px] h-[40px] rounded-md bg-gray-100 flex items-center px-3'>
                        <input type='text' placeholder='What are You Looking For ?' className='flex-1 outline-none bg-transparent' />
                        <AiOutlineSearch />
                    </div>
                </>
            }

        </div>
    )
}
