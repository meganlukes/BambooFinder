import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function AddInventory() {
  // const [inventory, setInventory] = useState({
  //   speciesId: null,
  //   nurseryId: null,
  // })
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

  return (
    <>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
        <h4>Add Bamboo to Your Inventory</h4>
      </header>
      <div>
        {plants.map((plant) => (
          <ul key={plant.id}>
            <li>{plant.name}</li>
          </ul>
        ))}
      </div>
      <div>
        {nurseries.map((nursery) => (
          <ul key={nursery.id}>
            <li>{nursery.name}</li>
          </ul>
        ))}
      </div>
    </>
  )
}
