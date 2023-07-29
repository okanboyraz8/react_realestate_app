import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Breadcrumb() {

    const location = useLocation();
    //console.log('location', location);

    let currentLink = '';

    const crubms = location.pathname.split('/')
                   .filter(crumb=>crumb!=='')
                   .map(crumb=>{
                    currentLink += `/${crumb}`

                    return (
                        <div className='crumb' key={crumb}>
                            <Link to={currentLink}>{crumb}</Link>
                        </div>
                    )
                   })
    //console.log('crubms', crubms);

  return (
    <div className='breadcrumbs'>
        {crubms}
    </div>
  )
}
