import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'

export function NurserySuccess() {
  return (
    <>
      <Header pageDescript="Success!" />
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
