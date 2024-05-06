import React from 'react'
import { text } from 'stream/consumers'
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';
const Navbar = () => {
    return (

        <nav className='felx md:flex  gap-4 justify-between items-center border-2 bg-slate-300 h-[100px]   '>
            
                <div className=' px-[50px] '>
                hello
            </div>
            <div className='flex justify-center items-center  gap-4 '><input type="text" className='rounded-xl w-[300px] py-2 px-2 ' placeholder='search something' />
                <div>
                    <FaSearch />
                </div>
            </div>
            <div className=''>
                <ul className='flex gap-4  '>
                    <Link href="/Contact"><li>Contact </li></Link>
                    <li>Blogs </li>
                    <li>About us </li>
                </ul>
            </div>
            <div className='px-[50px] '>
                <button className='flex border-2 px-4 py-2   '>
                    Subscribe
                </button>
            </div>
        </nav>
    )
}

export default Navbar
