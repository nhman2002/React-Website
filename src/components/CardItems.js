import React from 'react'
import { Link, Routes } from 'react-router-dom'
function CardItems() {
  return (
    <>
      <li className='card__item'>
        <Link className='cards__item__link'>
            <figure className='cards__item__pic-wrap'>
                
            </figure>
        </Link>
      </li>
    </>
  )
}

export default CardItems
