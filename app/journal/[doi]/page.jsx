import React from 'react'

const page = ({ params: { doi } }) => {
    const name = decodeURIComponent(doi)

    return (
        <div className='pt-[50px]'>{name}</div>
    )
}

export default page