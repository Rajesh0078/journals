"use client"
import Card from "./Card"

const Auhtor = ({ data }) => {
    return (
        <div className='pt-[50px]'>
            {
                !data?.length ? <></> : <div className="w-full flex flex-col gap-4 py-7">
                    {
                        data.map((i, inx) => {
                            if (i.title) return <Card i={i} key={inx} />
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Auhtor