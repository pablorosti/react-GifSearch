import React,{ useState } from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    return (
        <>
           <h2>Gif Expert App</h2> 

           <AddCategory 
                setCategories={setCategories}
                categories={categories}
           />

           <hr/>

           {
               categories.map( category =>{
                   return <GifGrid category = {category} key={category}/>
               } )
           }
        </>
    )
}
