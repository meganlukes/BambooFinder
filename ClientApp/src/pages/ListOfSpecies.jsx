import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import bluechungii from '../Images/bluechungii.jpg'
import runningclumping from '../Images/runningclumping.jpg'

//http://www.bamboogarden.com/Smaller%20Running%20Bamboos.htm
export function BambooPlantsMain() {
  const [filterText, setFilterText] = useState('')
  const [plants, setPlants] = useState([])
  const [sifters, setSifters] = useState({
    siftLight: 3,
    siftZone: 9,
    siftClumping: true,
  })

  function sift(minLight, maxLight, minZone, maxZone, clumping) {
    if (minLight <= sifters.siftLight && sifters.siftLight <= maxLight) {
      if (minZone <= sifters.siftZone && sifters.siftZone <= maxZone) {
        if (sifters.siftClumping === clumping) {
          return true
        }
      }
    } else {
      return false
    }
  }

  function handleBoolFieldChange(event) {
    const value = event.target.value === 'true'
    const fieldName = event.target.name
    console.log(value)

    setSifters({ ...sifters, [fieldName]: value })
  }

  function handleIntFieldChange(event) {
    const value = Number(event.target.value)
    const fieldName = event.target.name

    setSifters({ ...sifters, [fieldName]: value })
  }

  useEffect(() => {
    async function loadPlants() {
      const url =
        filterText.length === 0
          ? '/api/Species'
          : `/api/Species?filter=${filterText}`
      const response = await fetch(url)
      if (response.status === 200) {
        const json = await response.json()
        console.log(json)
        setPlants(json)
      }
    }
    loadPlants()
  }, [filterText, sifters])

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
    <div>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
        <h4>Bamboo Plants</h4>
        <h3>Find the bamboo that's right for you</h3>
      </header>

      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={function (event) {
            setFilterText(event.target.value)
          }}
        />
      </form>

      <p className="para">
        <label>USDA Plant Hardiness Zone</label>
        <form>
          <input
            type="number"
            placeholder="ex. 9 (required)"
            name="siftZone"
            value={sifters.siftZone}
            onChange={handleIntFieldChange}
          />
        </form>
        Click <a href="https://planthardiness.ars.usda.gov/PHZMWeb/">here</a> to
        find your USDA zone
        <details>
          USDA hardiness zones are used to describe a plant's cold-tolerance.
          Bamboo can be grown outside its hardiness zone if it is kept in a
          container and moved indoors in the winter, or if it is kept indoors as
          a houseplant. It is important to note that a bamboo's zone does NOT
          necessarily correlate with it's preferred climate. A zone 8 bamboo
          might not be able to tolerate the heat and humidity of the southeast,
          or it might be stunted by the lower temperatures of the pacific
          northwest.
        </details>
      </p>

      <p className="para">
        Clumping or Running
        <div>
          <img
            className="runningimg"
            src={runningclumping}
            alt="Diagram showing the difference between running and clumping bamboo."
          />
        </div>
        <details>
          Clumping bamboo sends out shoots from a single large rhizome while the
          running bamboo sends rhizomes away from the initial rhizome and then a
          single shoot emerges from that smaller rhizome. A barrier can be used
          to keep running bamboo contained to a single area. One benefit of
          running bamboo is that a larger area can be covered with fewer plants;
          clumping bamboos have a fixed maximum footprint.
        </details>
      </p>

      <div className="para">
        <ul className="flexinput">
          <li>
            <label>Growth Habit</label>
            <div>
              <input
                type="radio"
                id="running"
                name="siftClumping"
                value={false}
                checked={!sifters.siftClumping}
                onChange={handleBoolFieldChange}
              />
              <label for="running">Running</label>
            </div>
            <div>
              <input
                type="radio"
                id="clumping"
                name="siftClumping"
                value={true}
                checked={sifters.siftClumping}
                onChange={handleBoolFieldChange}
              />
              <label for="clumping">Clumping</label>
            </div>
          </li>
          <li>
            <label>Sun Requirements</label>
            <div>
              <input
                type="radio"
                id="shade"
                name="siftLight"
                value={1}
                onChange={handleIntFieldChange}
              />
              <label for="shade">Shade</label>
            </div>
            <div>
              <input
                type="radio"
                id="partshade"
                name="siftLight"
                value={2}
                onChange={handleIntFieldChange}
              />
              <label for="partshade">Part Shade</label>
            </div>
            <div>
              <input
                type="radio"
                id="partsun"
                name="siftLight"
                value={3}
                onChange={handleIntFieldChange}
              />
              <label for="partsun">Part Sun</label>
            </div>
            <div>
              <input
                type="radio"
                id="fullsun"
                name="siftLight"
                value={4}
                onChange={handleIntFieldChange}
              />
              <label for="fullsun">Full Sun</label>
            </div>
          </li>
        </ul>
      </div>
      <ol className="bambooList">
        {plants.map((plant) => (
          <React.Fragment key={plant.id}>
            {sift(
              plant.minLight,
              plant.maxLight,
              plant.minZone,
              plant.maxZone,
              plant.clumping
            ) ? (
              <ol className="bambooListItem">
                {plant.photoURL ? (
                  <img className="mainpic" src={plant.photoURL} alt="bamboo" />
                ) : (
                  <img
                    src={bluechungii}
                    alt="Woman standing next to bamboo"
                    width="200"
                  />
                )}
                {/* Scientific name */}
                <li>
                  <Link to={`/species/${plant.id}`}>
                    <i>{plant.name}</i>
                  </Link>
                </li>
                {/* Common name */}
                <li>
                  <q>{plant.commonName}</q>
                </li>
                {/* plant zone */}
                <li>
                  Zone:{' '}
                  {plant.maxZone === plant.minZone
                    ? plant.maxZone
                    : `${plant.minZone} to ${plant.maxZone}`}
                </li>
                {/* light */}
                <li>
                  {plant.maxLight === plant.minLight
                    ? lightString(plant.minLight)
                    : `${lightString(plant.minLight)} to ${lightString(
                        plant.maxLight
                      )}`}
                </li>
                <ul>
                  {/* height */}
                  <li>
                    Height: {plant.minHeight}ft-{plant.maxHeight}ft
                  </li>
                  {/* clumping */}
                  <li>{plant.clumping ? 'Clumping' : 'Running'}</li>
                </ul>
              </ol>
            ) : null}
          </React.Fragment>
        ))}
      </ol>
    </div>
  )
}
