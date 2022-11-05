import React, { useState, useEffect } from 'react'
import Item from '../Components/SingleItem/Item'

function useItemsGetter(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (loading) return <div className='gridDisplay'>Loading...Kindly wait</div>

    return (
        <div className='gridDisplay'>
            {data.map(item => {
                const props = {
                    title: item.title,
                    price: item.price,
                    category: item.category,
                    description: item.description,
                    image: item.image
                }

                return (
                    <Item key={item.id} details={props} />
                )
            })}
        </div>
    )
}

export default useItemsGetter