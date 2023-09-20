import Image from 'next/image';
import React from 'react';
import { UserButton } from "@clerk/nextjs";

function NavBar() {
    return (
        <div className='flex items-center justify-between p-3 px-5 shadow-sm border-b-[2px]'>
            <Image src="/logo.png" alt="logo"
                width={100}
                height={100}
            />
            <div className='hidden md:flex gap-5'>
                <h2 className='hover:bg-purple-500 px-3 cursor-pointer p-2 rounded-full hover:text-black'>Home</h2>
                <h2 className='hover:bg-purple-500 px-3 cursor-pointer p-2 rounded-full hover:text-black'>History</h2>
                <h2 className='hover:bg-purple-500 px-3 cursor-pointer p-2 rounded-full hover:text-black'>Contact Us</h2>
            </div>
            <UserButton />
        </div>
    )
}

export default NavBar;