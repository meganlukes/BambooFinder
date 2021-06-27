import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function Nursery() {
  const params = useParams()
  const id = params.id

  const [nursery, setNursery] = useState({
    id: 4,
    name: '',
    shipping: true,
    phoneNumber: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    zipcode: '',
    description: '',
    website: '',
    inventorySellers: [],
  })

  useEffect(() => {
    async function fetchNursery() {
      const response = await fetch(`/api/Nurseries/${id}`)

      if (response.ok) {
        const apiData = await response.json()

        setNursery(apiData)
      }
    }
    fetchNursery()
  }, [id])
  console.log(nursery.inventorySellers)
  return (
    <>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
      </header>
      <p className="name">{nursery.name}</p>
      <ol>
        <table className="infotable">
          <tbody>
            <tr>
              <td>Website:</td>
              <td>
                <a href={nursery.website}>{nursery.website}</a>
              </td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>{nursery.phoneNumber}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{nursery.email} </td>
            </tr>
            <tr>
              <td>{nursery.inventorySellers.speciesId}</td>
              <td>{nursery.id}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>
                <ol>
                  <li>{nursery.streetAddress}</li>
                  <li>
                    {nursery.city}, {nursery.state}
                  </li>
                  <li>{nursery.zipcode}</li>
                </ol>
              </td>
            </tr>
            <tr>
              <td>Ship Out of State:</td>
              <td>{nursery.shipping ? 'Yes' : 'No'}</td>
            </tr>
          </tbody>
        </table>
        <div className="descBox">{nursery.info}</div>
        <table>
          <thead>
            <tr>
              <th>Bamboo Carried</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <i>Phyllostachys nigra</i> "Black Bamboo"
              </td>
            </tr>
            <tr>
              <td>
                <i>Bambusa vulgaris</i> "Painted Bamboo"
              </td>
            </tr>
            <tr>
              <td>
                <i>Dendrocalamus minor Amoenus</i> "Angel Mist Ghost Bamboo"
              </td>
            </tr>
          </tbody>
        </table>
      </ol>
    </>
  )
}
