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

      <button className="big">
        {' '}
        <Link>Edit Bamboo Species</Link>
      </button>

      <button className="big">
        <Link to="/delete-species">Delete Bamboo Species</Link>
      </button>
    </div>
  )
}
