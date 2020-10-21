import React, { useEffect, useState } from 'react'
import {GifCard} from './GifCard'
import {obtenerGifs} from '../helpers/getImages'


export const GifGrid = ( { category }) => {

    const [images, setimages] = useState([])

    useEffect( () => {
        obtenerGifs(category).then( setimages)
    }, [category] )

    
    return (
        <>
            <h3 className='animate__animated animate__fadeIn'> { category } </h3>
            <div className='grid-card'>
                {
                    images.map( img => {
                        return <GifCard
                                    key={img.id}
                                    titulo={img.title}
                                    url={img.url}
                                />
                    })
                }
                
            </div>
        </>
    )
}
