import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'

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
    inventorySellers: [
      {
        speciesId: 4,
        species: {
          name: '',
          minHeight: 3,
        },
      },
    ],
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
      <Header pageName={nursery.name} />
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
        <table className="list">
          <thead>
            <tr>
              <th>Bamboo Carried</th>
            </tr>
          </thead>
          <tbody>
            {nursery.inventorySellers.map((inventorySellers) => (
              <tr key={inventorySellers.id}>
                <td>
                  <Link to={`/Species/${inventorySellers.speciesId}`}>
                    <i>{inventorySellers.species.name}</i>{' '}
                    <q>{inventorySellers.species.commonName}</q>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ol>
    </>
  )
}
