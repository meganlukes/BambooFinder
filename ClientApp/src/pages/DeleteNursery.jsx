import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { authHeader } from '../auth'

export function DeleteNursery() {
  const [nurseries, setNurseries] = useState([])
  const [nurseryToDelete, setNurseryToDelete] = useState({
    deleteNurseryId: 5,
  })
  const history = useHistory()

  useEffect(() => {
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
  })

  function handleId(event) {
    const enteredID = event.target.value
    const updatedNurseryToDelete = {
      ...nurseryToDelete,
      deleteNurseryId: enteredID,
    }
    setNurseryToDelete(updatedNurseryToDelete)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch(`/api/Nurseries/${deleteNurseryId}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json', ...authHeader() },
    })

    if (response.status === 200 || response.status === 204) {
      console.log('Nursery Deleted')
      history.push('/success')
    }
  }

  return (
    <>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
        <h4>Delete a Nursery</h4>
      </header>
      <div className="addForm">
        <form onSubmit={handleFormSubmit}>
          <div>Select a Nursery to Delete</div>
          <div>
            {nurseries.map((nursery) => (
              <div key={nursery.id}>
                <input
                  type="radio"
                  id="nurseryname"
                  name="deleteNurseryId"
                  value={nursery.id}
                  onChange={handleId}
                />
                <label for="nurseryname">{nursery.name}</label>
              </div>
            ))}
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}
