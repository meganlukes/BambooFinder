import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'

export function ChangeSpecies() {
  return (
    <div>
      <Header pageName="Edit/Delete Species" />
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
