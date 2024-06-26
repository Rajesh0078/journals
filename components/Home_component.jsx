'use client'
import { searchAuthor, search_papers } from '@/app/lib/actions'
import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import Card from './Card'
import { Pagination } from 'antd'
import { useForm } from 'react-hook-form'

const Home_component = ({ data }) => {

    const { register, handleSubmit } = useForm()
    const [pageNum, setPageNum] = useState(1)
    const [loader, setLoader] = useState(false)
    const [papers, setPapers] = useState(data.length ? data : [])

    async function getData(name) {
        const res = await searchAuthor(name)
        if (res.success) {
            setPapers(res.data.message.items)
        }
    }

    const handleSearchPapers = async (data) => {
        if (data.text) {
            setLoader(true)
            if (data.type === "author") {
                getData(data.text)
            } else {
                const res = await search_papers(data.text)
                if (res.success) {
                    setPapers(res.data.message.items)
                }
            }
            setLoader(false)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleSearchPapers)} className="w-full md:w-[70%] m-auto flex flex-col items-center text-center">
                <div className='w-full relative'>
                    <input type="text" {...register("text")} className="outline-none w-full h-[40px] border p-2 rounded  text-sm border-gray-400 pe-12" placeholder="Search here...." />
                    <button className="absolute top-1/2 -translate-y-1/2 right-3" type="submit">
                        <IoSearch className="text-[22px] md:text-[25px]" />
                    </button>
                </div>
                <div className='w-full flex mt-1 gap-2'>
                    <div className='flex gap-1 items-center text-sm'>
                        <input type="radio" {...register("type")} id="Journal" value={"journal"} />
                        <label htmlFor="Journal">By Journal</label>
                    </div>
                    <div className='flex gap-1 items-center text-sm'>
                        <input type="radio" {...register("type")} id="Author" value={"author"} />
                        <label htmlFor="Author">By Author</label>
                    </div>
                </div>
            </form>
            <div className='w-full  flex flex-col gap-4 pt-7'>
                {!loader ?
                    papers.slice((pageNum - 1) * 20, (((pageNum - 1) * 20)) + 20).map((i, inx) => {
                        if (i.title) {
                            return (
                                <Card i={i} key={inx} />
                            )
                        }
                    }) : <div className='h-full flex justify-center items-center pt-[100px]'><span className='loader'></span></div>
                }
            </div>
            {
                !loader &&
                <div className='py-5 w-full flex justify-center'>
                    <Pagination defaultCurrent={1} pageSize={20} total={papers.length} onChange={(e) => setPageNum(e)} responsive={true} showSizeChanger={false} />
                </div>
            }
        </>
    )
}

export default Home_component