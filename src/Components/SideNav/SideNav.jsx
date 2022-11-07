import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
    return (
        <>
            <Link to={''} className={'routeLink'}>
                <p>Display 5 Items</p>
            </Link>
            <Link to={''} className={'routeLink'}>
                <p>Sort: Descending</p>
            </Link>
            <Link to={''} className={'routeLink'}>
                <p>Sort: Ascending</p>
            </Link>
        </>
    )
}

export default SideNav