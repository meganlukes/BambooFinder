import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function ListOfSpeciesToEdit() {
  const [species, setSpecies] = useState([])

  useEffect(() => {
    async function loadSpecies() {
      const url = '/api/Species'
      const response = await fetch(url)
      if (response.status === 200) {
        const json = await response.json()
        setSpecies(json)
      }
    }
    loadSpecies()
  })

  return (
    <div>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
        <h3>Select a Species to Edit</h3>
      </header>
      <table>
        <tbody>
          {species.map((species) => (
            <tr key={species.id}>
              <td>
                <Link to={`/Species/${species.id}/Edit`}>{species.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
