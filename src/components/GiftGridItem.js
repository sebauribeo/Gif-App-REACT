import React from 'react'

export const GiftGridItem = ({ id, title, url }) => {
    console.log({id, title, url});
  return (
      <>
        <div>
            <p>{ title }</p>
            <img src = { url }></img>
        </div>
      </>
  )
}
