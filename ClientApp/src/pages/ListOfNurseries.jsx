import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'

export function ListOfNurseries() {
  const [filterText, setFilterText] = useState('')
  const [nurseries, setNurseries] = useState([])

  useEffect(() => {
    async function loadNurseries() {
      const url =
        filterText.length === 0
          ? '/api/Nurseries'
          : `/api/Nurseries?filter=${filterText}`
      const response = await fetch(url)
      if (response.status === 200) {
        const json = await response.json()
        setNurseries(json)
      }
    }
    loadNurseries()
  }, [filterText])

  return (
    <div>
      <Header pageName="Bamboo Nurseries" />
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={function (event) {
            setFilterText(event.target.value)
          }}
        />
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Ship Out of State?</th>
          </tr>
        </thead>
        <tbody>
          {nurseries.map((nursery) => (
            <tr key={nursery.id}>
              <td>
                <Link to={`/Nursery/${nursery.id}`}>{nursery.name}</Link>
              </td>
              <td>
                {nursery.city}, {nursery.state}
              </td>
              <td>{nursery.shipping ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
