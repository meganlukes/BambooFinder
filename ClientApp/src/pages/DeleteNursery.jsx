import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

export function DeleteNursery() {
  const [nurseries, setNurseries] = useState([])
  const [nurseryToDelete, setNurseryToDelete] = useState({
    nurseryId: null,
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

  // async function handleFormSubmit(event) {
  //   event.preventDefault();

  //   const response = await fetch(`/api/Nurseries/${nurseryId}`, {
  //     method: 'DELETE',
  //     headers: { 'content-type': 'application/json' },
  //     body: JSON.stringify(newBamboo),
  //   });

  //   if (response.ok) {
  //     console.log('Nursery Deleted');
  //     history.push('/success');
  //   }
  // }

  return (
    <>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
        <h4>Delete a Nursery</h4>
      </header>
      <div></div>
    </>
  )
}
