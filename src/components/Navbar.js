import React from 'react'
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
    return (
        <>
            <div className="flex max-w-[1240px] mx-auto items-center p-4 justify-between">
                <div className="cursor-pointer">
                    <h1 className='font-bold '>RecipeReady</h1>
                </div>
                <div className='flex'>
                    <div className="login">
                        <button className='bg-black text-white px-5 py-1 ml-2 h-10 w-[100px] rounded-md'>Logout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar