import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'

export const houseDetailLoader = async ({params}) => {
    const {id} = params;

    const res = await fetch('http://localhost:4000/houses/'+id);

    if(!res.ok){
        throw Error('Not Found Any Data!')
    }

    return res.json();
}

export default function HouseDetail() {

    //const {id} = useParams();
    const house = useLoaderData();

  return (
    <div className='house-detail'>
        {/* {id} */}
        <h2>{house.type}</h2>
        <p>Cash: {house.cash}</p>
        <p>Location: {house.location}</p>
        <p>Status: {house.status}</p>
    </div>
  )
}
