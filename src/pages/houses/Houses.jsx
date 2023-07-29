import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export const housesLoader = async () => {
    const res = await fetch('http://localhost:4000/houses');

    if(!res.ok){
        throw Error('Oops! Something went wrong, please back to Homepage. Thank you👋');
    }

    return res.json()
}

export default function Houses() {
    
    const houses = useLoaderData();

  return (
    <div className='houses'>
        {
            houses && houses.map(house => (
                <Link to={house.id.toString()} key={house.id}>
                    <p>House Type: {house.type}</p>
                    <p>Location: {house.location}</p>
                </Link>
            ))
        }
    </div>
  )
}
