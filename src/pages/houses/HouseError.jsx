import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function HouseError() {

    const error = useRouteError();

  return (
    <div className='house-error'>
        <h2>Error!!!</h2>
        <p>{error.message}</p>
        <Link to="/">Back to Homepage!</Link>
    </div>
  )
}
