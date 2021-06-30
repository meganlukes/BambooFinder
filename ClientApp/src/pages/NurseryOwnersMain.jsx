import React from 'react'
import { Link } from 'react-router-dom'

export function NurseryOwnersMain() {
  return (
    <div>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
        <h4>Nursery Owners</h4>
        <h3>
          Add Your Nursery to BambooFinder.com to Connect with New Customers
        </h3>
      </header>

      <button className="big">
        {' '}
        <Link to="/new-nursery">Add a Nursery</Link>
      </button>

      <button className="big">
        <Link to="/add-bamboo">Add a Bamboo Species</Link>
      </button>

      <button className="big">
        <Link to="/change-nursery">Edit or Delete Nursery</Link>
      </button>

      <button className="big">
        <Link exact path="/change-species">
          Edit or Delete Species
        </Link>
      </button>
    </div>
  )
}
