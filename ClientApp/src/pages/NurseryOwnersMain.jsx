import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'

export function NurseryOwnersMain() {
  return (
    <div>
      <Header pageName="Nursery Owners" pageDescript="Welcome User" />
      <div className="menuList">
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
          <Link to="/change-species">Edit or Delete Species</Link>
        </button>
      </div>
    </div>
  )
}
