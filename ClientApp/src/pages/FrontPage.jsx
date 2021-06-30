import React from 'react'
import { Link } from 'react-router-dom'

export function FrontPage() {
  return (
    <div>
      <header className="mainHeader">
        <h1>BambooFinder.com</h1>
      </header>
      <button className="big">
        <Link to="/bamboo-list">Find the Best Bamboo for Me</Link>
      </button>
      <button className="big">
        <Link to="/nursery-list">Find a Bamboo Nursery</Link>
      </button>
      <button className="big">
        <Link to="/nursery-owners">Nursery Owners</Link>
      </button>
    </div>
  )
}
