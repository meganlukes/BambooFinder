import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'

export function ListOfNurseriesToEdit() {
  const [nurseries, setNurseries] = useState([])

  useEffect(() => {
    async function loadNurseries() {
      const url = '/api/Nurseries'
      const response = await fetch(url)
      if (response.status === 200) {
        const json = await response.json()
        setNurseries(json)
      }
    }
    loadNurseries()
  })
  return (
    <div>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
        <h3>Choose a Nursery to Edit</h3>
      </header>
      <Header pageDescript="Choose a Nursery to Edit" />
      <table>
        <tbody>
          {nurseries.map((nursery) => (
            <tr key={nursery.id}>
              <td>
                <Link to={`/Nurseries/${nursery.id}/Edit`}>{nursery.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
