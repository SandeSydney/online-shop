import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <div className='navigation'>
      <div className='logo'>Logo</div>
      <div className='links'>
        <Link className='routeLink' to={'/electronics'}>
          <p>Electronics</p>
        </Link>
        <Link className='routeLink' to={'/jewelery'}>
          <p>Jewelery</p>
        </Link>
        <Link className='routeLink' to={'/mensclothing'}>
          <p>Men's Clothing</p>
        </Link>
        <Link className='routeLink' to={'/womensclothing'}>
          <p>Women's Clothing</p>
        </Link>
      </div>
    </div>
  )
}

export default Navigation