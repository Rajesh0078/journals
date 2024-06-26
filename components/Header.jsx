import Link from 'next/link';
import React from 'react'
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const Header = () => {
    return (
        <div className='h-[50px] z-20 shadow-md shadow-black/30 fixed right-0 left-0 w-full bg-gradient-to-r to-sky-400 from-sky-700 px-[8%] flex justify-between items-center text-white'>
            <Link href={'/'}>
                <div className='flex gap-x-2 items-center text-[20px]'>
                    <BsFillJournalBookmarkFill />
                    <p className='font-semibold '>Journal World</p>
                </div>
            </Link>
            <div>icons</div>
        </div>
    )
}

export default Header