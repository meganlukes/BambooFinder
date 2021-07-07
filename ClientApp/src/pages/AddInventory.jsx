import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Header } from '../components/Header'

export function AddInventory() {
  const [newInventorySellers, setNewInventorySellers] = useState({
    speciesId: null,
    nurseryId: null,
  })
  const history = useHistory()
  const [plants, setPlants] = useState([])
  const [nurseries, setNurseries] = useState([])

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
    async function loadNurseries() {
      const url = '/api/Nurseries'
      const response = await fetch(url)
      if (response.status === 200) {
        const json = await response.json()
        console.log(json)
        setNurseries(json)
      }
    }
    loadNurseries()
    loadPlants()
  })
  function handleIntFieldChange(event) {
    const value = Number(event.target.value)
    const fieldName = event.target.name

    setNewInventorySellers({ ...newInventorySellers, [fieldName]: value })
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/InventorySellers', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newInventorySellers),
    })

    if (response.ok) {
      console.log('newInventorysellers successfully added')
      history.push('/success')
    }
  }

  return (
    <>
      <Header pageName="Add Bamboo to Your Inventory" />
      <div className="addForm">
        <form onSubmit={handleFormSubmit}>
          <div>Nursery</div>
          <div>
            {nurseries.map((nursery) => (
              <div key={nursery.id}>
                <input
                  type="radio"
                  id="nurseryname"
                  name="nurseryId"
                  value={nursery.id}
                  onChange={handleIntFieldChange}
                />
                <label for="nurseryname">{nursery.name}</label>
              </div>
            ))}
          </div>
          <div>Bamboo Species</div>
          <div>
            {plants.map((plant) => (
              <div key={plant.id}>
                <input
                  type="radio"
                  id="plantname"
                  name="speciesId"
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
