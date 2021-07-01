import React from 'react'
import { Link } from 'react-router-dom'

export function ChangeNurseries() {
  return (
    <div>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
        <h4>Edit/Delete Nursery</h4>
      </header>
      <div className="menuList">
        <button className="big">
          {' '}
          <Link>Edit Nursery</Link>
        </button>

        <button className="big">
          <Link to="/delete-nursery">Delete Nursery</Link>
        </button>

        <button className="big">
          {' '}
          <Link to="/add-inventory">
            Add Bamboo Species to Nursery Inventory
          </Link>
        </button>
      </div>
    </div>
  )
}
