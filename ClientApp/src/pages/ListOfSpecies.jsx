import React, { useState, Component, useEffect } from 'react'
import { Link, Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'
import { SetZone } from '../components/SetZone'
import { SetGrowthHabit } from '../components/SetGrowthHabit'
import { SetSize } from '../components/SetSize'

import bluechungii from '../Images/bluechungii.jpg'
import runningclumping from '../Images/runningclumping.jpg'

//http://www.bamboogarden.com/Smaller%20Running%20Bamboos.htm
export function BambooPlantsMain() {
  const [filterText, setFilterText] = useState('')
  const [plants, setPlants] = useState([])

  const siftMinLight = 1
  const siftMaxLight = 2
  const siftZone = 9
  const siftMinHeight = 1
  const siftMaxHeight = 150
  const siftGrowthHabit = true

  useEffect(() => {
    async function loadPlants() {
      const url =
        filterText.length === 0
          ? '/api/Species'
          : `/api/Species?filter=${filterText}`
      const response = await fetch(url)
      if (response.status === 200) {
        const json = await response.json()
        setPlants(json)
      }
    }
    loadPlants()
  }, [filterText])

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
        <SetZone />
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
            src={runningclumping}
            alt="Diagram showing the difference between running and clumping bamboo."
            width="400"
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
                name="growthhabit"
                value="running"
                checked
              />
              <label for="running">Running</label>
            </div>
            <div>
              <input
                type="radio"
                id="clumping"
                name="growthhabit"
                value="clumping"
                checked
              />
              <label for="clumping">Clumping</label>
            </div>
            <div>
              <input
                type="radio"
                id="either"
                name="growthhabit"
                value="either"
                checked
              />
              <label for="either">No Preference</label>
            </div>
          </li>
          <li>
            <label>Sun Requirements</label>
            <div>
              <input
                type="radio"
                id="shade"
                name="sunlight"
                value="shade"
                checked
              />
              <label for="shade">Shade</label>
            </div>
            <div>
              <input
                type="radio"
                id="partshade"
                name="sunlight"
                value="partshade"
                checked
              />
              <label for="partshade">Part Shade</label>
            </div>
            <div>{siftMinHeight}</div>
            <div>
              <input
                type="radio"
                id="partsun"
                name="sunlight"
                value="partsun"
                checked
              />
              <label for="partsun">Part Sun</label>
            </div>
            <div>
              <input
                type="radio"
                id="fullsun"
                name="sunlight"
                value="fullsun"
                checked
              />
              <label for="fullsun">Full Sun</label>
            </div>
            <div>
              <input
                type="radio"
                id="either"
                name="sunlight"
                value="either"
                checked
              />
              <label for="either">No Preference</label>
            </div>
          </li>
        </ul>
      </div>

      <label>Adult Height</label>
      <SetSize />
      <ol className="bambooList">
        {plants.map((plant) => (
          <ol className="bambooListItem" key={plant}>
            <img
              src={bluechungii}
              alt="Woman standing next to bamboo"
              width="200"
            />
            {/* Scientific name */}
            <li>
              <Link to={`/species/${plant.id}`}>
                <i>{plant.name}</i>
              </Link>
            </li>
            {/* Common name */}
            <li>{plant.commonName}</li>
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
        ))}
      </ol>
    </div>
  )
}
