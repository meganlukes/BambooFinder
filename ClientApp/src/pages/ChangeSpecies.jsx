import React from 'react'
import { Link } from 'react-router-dom'

export function ChangeSpecies() {
  return (
    <div>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
        <h4>Edit/Delete Species</h4>
      </header>
      <div className="menuList">
        <button className="big">
          {' '}
          <Link to="/edit-species-list">Edit Bamboo Species</Link>
        </button>

        <button className="big">
          <Link to="/delete-species">Delete Bamboo Species</Link>
        </button>
      </div>
    </div>
  )
}
