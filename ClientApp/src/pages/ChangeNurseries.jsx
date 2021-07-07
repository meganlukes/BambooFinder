import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'

export function ChangeNurseries() {
  return (
    <div>
      <Header pageName="Edit Your Nursery" />
      <div className="menuList">
        <button className="big">
          {' '}
          <Link to="/edit-nurseries-list">Edit Nursery</Link>
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
