import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import bluechungii from '../Images/bluechungii.jpg'

export function Species() {
  const params = useParams()
  const id = params.id

  const [bamboo, setBamboo] = useState({
    name: '',
    info: '',
    commonName: '',
    minHeight: 1,
    maxHeight: 150,
    clumping: true,
    minLight: 1,
    maxLight: 4,
    minZone: 1,
    maxZone: 13,
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
      </p>
      <p className="name">&quot;{bamboo.commonName}&quot;</p>
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
          </table>
        </li>
      </ol>
      <div className="descBox">{bamboo.info}</div>
    </>
  )
}
