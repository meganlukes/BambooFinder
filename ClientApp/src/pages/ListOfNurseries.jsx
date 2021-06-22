import React, { useState, Component, useEffect } from 'react'
import { BambooPlantsMain } from './BambooPlantsMain'
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
      <header>
        <h2>Nurseries</h2>
      </header>
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
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Ship Out of State?</th>
        </tr>

        {nurseries.map((nursery) => (
          <tr key={nursery.id}>
            <td>{nursery.name}</td>
            <td>
              {nursery.city}, {nursery.state}
            </td>
            <td>{nursery.shipping}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}
