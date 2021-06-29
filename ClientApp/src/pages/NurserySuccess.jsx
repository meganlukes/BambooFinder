import React from 'react'
import { Link } from 'react-router-dom'

export function NurserySuccess() {
  return (
    <>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
        <h3>Successfully Added!</h3>
      </header>
      <button className="big">
        {' '}
        <Link to="/nursery-owners">Return to Nursery Owners Main Page</Link>
      </button>
      <button className="big">
        {' '}
        <Link to="/">Return to Home Page</Link>
      </button>
    </>
  )
}
