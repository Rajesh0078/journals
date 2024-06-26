import { searchAuthor } from '@/app/lib/actions'
import Auhtor from '@/components/Auhtor'
import React from 'react'

const page = async ({ params: { name } }) => {
    const res = await searchAuthor(decodeURI(name))
    if (res.success) {
        return (
            <main className="h-dvh w-full pt-[50px] px-[10%]">
                <div className="w-full flex flex-col items-center p-4 md:p-6 text-center">

                </div>
                <Auhtor data={res.data.message.items} />
            </main>
        )
    }
}

export default page