import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Card = ({ i }) => {

    const navigate = useRouter()
    const getDateByTimestamp = (stamp) => {
        const date = new Date(stamp).toDateString()
        const arr = (date.split(' '))
        return `${arr[1]} ${arr[3]}`
    }

    return (
        <Link href={`/journal/${encodeURIComponent(i.DOI)}`} className='w-full border rounded shadow cursor-pointer'>
            <div className='bg-slate-200 p-3 text-[17px] font-semibold text-blue-600 leading-[22px]'>{i.title[0]}</div>
            <div className='p-4 text-sm flex flex-col gap-2'>
                <div className=''><span>{getDateByTimestamp(i.created.timestamp)}</span><span className='mx-2'>|</span><span>{i.type}</span></div>
                <div><span className='font-medium'>DOI:</span> {i.DOI}</div>
                <div className='font-semibold'>
                    {
                        i.publisher
                    }
                </div>
            </div>
            <div className='border-t p-2 px-3 flex flex-col gap-1 md:flex-row md:items-center'>
                <p>Authors:</p>
                <div className='flex gap-2 flex-wrap'>
                    {
                        i.author ? i.author.map((aut, index) => {
                            return <div onClick={(e) => { e.preventDefault(); navigate.push(`/author/${aut.given + " " + aut.family}`) }} key={index} className='text-xs bg-slate-200 p-1 px-2 rounded'>{aut.given} {aut.family}</div>
                        }) : <span className='text-sm'>Not available</span>
                    }
                </div>
            </div>
        </Link>
    )
}

export default Card