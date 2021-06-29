import React from 'react'
import { Link, Route, Switch, useParams } from 'react-router-dom'

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
        <Link to="/new-nursery">Add Your Nursery to BambooFinder.com</Link>
      </button>
      <button className="big">Edit or Delete Your Nursery</button>
      <button className="big">
        <Link to="/add-bamboo">Add a Bamboo Species to Our Database</Link>
      </button>
      <button className="big">
        {' '}
        <Link to="/add-inventory">Add Bamboo Species to Your Inventory</Link>
      </button>
    </div>
  )
}
