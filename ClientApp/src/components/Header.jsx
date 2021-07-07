import React from 'react'
import { Link } from 'react-router-dom'

//http://www.bamboogarden.com/Smaller%20Running%20Bamboos.htm
export function Header({ pageName, pageDescript }) {
  return (
    <header>
      <h2>
        <Link to="/">BambooFinder.com</Link>
      </h2>
      <h4>{pageName}</h4>
      <h3>{pageDescript}</h3>
    </header>
  )
}
