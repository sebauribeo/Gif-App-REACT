import React, { useState, useEffect } from 'react'
import { GiftGridItem } from './GiftGridItem';

export const GiftRead = ({ category }) => {

    const [images, setImages] = useState([]);


    useEffect( () => {
        getGifts();
    }, [])
    const getGifts = async () => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Goku&limit=10&api_key=63A3q4vdQF6ALLKDCkCJIxCBBfV2GWzf';
        const response = await fetch( url );
        const { data } = await response.json();
        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        })
        console.log(gifs);
        setImages( gifs );
    }
    // getGifts();
  return (
      <>
        <h3>{ category }</h3>
        <ol>
            {
                images.map( img => (
                    <GiftGridItem
                        key={ img.id }
                        { ...img }
                    />
                    // <li key={ id }>{ title }</li>
                ))
            }
        </ol>
      </>
  )
}
