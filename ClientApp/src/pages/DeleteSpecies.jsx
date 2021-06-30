import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { authHeader } from '../auth'

export function DeleteSpecies() {
  const history = useHistory()
  const [plants, setPlants] = useState([])
  const [speciesToDelete, setSpeciesToDelete] = useState({
    deleteSpeciesId: 5,
  })

  function handleIntFieldChange(event) {
    const value = Number(event.target.value)
    const fieldName = event.target.name

    setSpeciesToDelete({ ...speciesToDelete, [fieldName]: value })
  }

  useEffect(() => {
    async function loadPlants() {
      const url = '/api/Species'
      const response = await fetch(url)
      if (response.status === 200) {
        const json = await response.json()
        console.log(json)
        setPlants(json)
      }
    }
    loadPlants()
  })

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch(
      `/api/Species/${speciesToDelete.deleteSpeciesId}`,
      {
        method: 'DELETE',
        headers: { 'content-type': 'application/json', ...authHeader() },
      }
    )

    if (response.status === 200 || response.status === 204) {
      console.log('Species Deleted')
      history.push('/success')
    }
  }

  return (
    <>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
        <h4>Delete a Species</h4>
      </header>
      <div className="addForm">
        <form onSubmit={handleFormSubmit}>
          <div>Select a Species to Delete</div>
          <div>
            {plants.map((plant) => (
              <div key={plant.id}>
                <input
                  type="radio"
                  id="plantname"
                  name="deleteSpeciesId"
                  value={plant.id}
                  onChange={handleIntFieldChange}
                />
                <label for="plantname">{plant.name}</label>
              </div>
            ))}
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}
