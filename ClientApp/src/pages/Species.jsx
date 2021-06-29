import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import bluechungii from '../Images/bluechungii.jpg'

export function Species() {
  const params = useParams()
  const id = params.id

  const [bamboo, setBamboo] = useState({
    name: '',
    info: 'N/A',
    commonName: 'bamboo',
    minHeight: 1,
    maxHeight: 150,
    clumping: true,
    minLight: 1,
    maxLight: 4,
    minZone: 1,
    maxZone: 13,
    inventorySellers: [
      {
        nurseryId: 3,
        nursery: {
          name: '',
          city: '',
          state: '',
          shipping: true,
        },
      },
    ],
  })

  useEffect(() => {
    async function fetchBamboo() {
      const response = await fetch(`/api/Species/${id}`)

      if (response.ok) {
        const apiData = await response.json()

        setBamboo(apiData)
      }
    }
    fetchBamboo()
  }, [id])

  function lightString(light) {
    if (light === 1) {
      return 'Full Shade'
    } else if (light === 2) {
      return 'Part Shade'
    } else if (light === 3) {
      return 'Part Sun'
    } else if (light === 4) {
      return 'Full Sun'
    }
  }

  return (
    <>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
      </header>
      <p className="name">
        <i>{bamboo.name} </i>
        <q>{bamboo.commonName}</q>
      </p>

      <ol className="bambooInfoList">
        <li>
          <img
            className="mainpic"
            src={bluechungii}
            alt="Woman standing next to bamboo"
          />
        </li>
        <li>
          <table>
            <tbody>
              <tr>
                <td>Mature Height</td>
                <td>
                  {bamboo.minHeight}ft - {bamboo.maxHeight}ft
                </td>
              </tr>
              <tr>
                <td>Growth Habit</td>
                <td>{bamboo.clumping ? 'Clumping' : 'Running'}</td>
              </tr>
              <tr>
                <td>
                  <ol>
                    <li>Hardiness Zone</li>
                    <li>
                      <a href="https://planthardiness.ars.usda.gov/PHZMWeb/">
                        Find your zone
                      </a>
                    </li>
                  </ol>
                </td>
                <td>
                  {' '}
                  {bamboo.maxZone === bamboo.minZone
                    ? bamboo.maxZone
                    : `${bamboo.minZone} to ${bamboo.maxZone}`}
                </td>
              </tr>
              <tr>
                <td>Light Requirements</td>
                <td>
                  {bamboo.maxLight === bamboo.minLight
                    ? lightString(bamboo.minLight)
                    : `${lightString(bamboo.minLight)} to ${lightString(
                        bamboo.maxLight
                      )}`}
                </td>
              </tr>
            </tbody>
          </table>
        </li>
      </ol>
      <div className="descBox">{bamboo.info}</div>
      {/* {bamboo.sellers > 0 ? (all the div below) : null} */}
      <div className="bambooinfolist">
        <table className="bottomTable">
          <thead>
            <tr>
              <th>Nursery Name</th>
              <th>Nursery Location</th>
              <th>Ship</th>
            </tr>
          </thead>
          {bamboo.inventorySellers.map((inventorySellers) => (
            <tbody>
              <tr>
                <td>
                  <Link to={`/Nursery/${inventorySellers.nurseryId}`}>
                    {inventorySellers.nursery.name}
                  </Link>
                </td>
                <td>
                  {inventorySellers.nursery.city},{' '}
                  {inventorySellers.nursery.state}
                </td>
                <td>{inventorySellers.nursery.shipping ? 'Yes' : 'No'}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  )
}
