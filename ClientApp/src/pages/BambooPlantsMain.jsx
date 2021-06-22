import React, { useState, Component, useEffect } from 'react'
import { Link, Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'
import { SetZone } from '../components/SetZone'
import { SetGrowthHabit } from '../components/SetGrowthHabit'
import { SetSize } from '../components/SetSize'
import { SetSun } from '../components/SetSun'
import bluechungii from '../Images/bluechungii.jpg'
import bluechungii2 from '../Images/bluechungii4.jpg'
import runningclumping from '../Images/runningclumping.jpg'
import usdazones from '../Images/usdazones.jpg'

//http://www.bamboogarden.com/Smaller%20Running%20Bamboos.htm
export function BambooPlantsMain() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    async function loadPlants() {
      const response = await fetch('http://localhost:5000/api/Species')
      if (response.code === 200) {
        const json = await response.json()
        setPlants(json)
      }
    }
    loadPlants()
  }, [])

  return (
    <div>
      <header>
        <h1>BambooFinder.com</h1>
        <h2>Bamboo Plants</h2>
      </header>
      <p>
        Use our database of bamboo plants to find the one that's right for you.
      </p>
      <label>USDA Plant Hardiness Zones</label>
      <div>
        <img
          src={usdazones}
          alt="Map of the US showing the different USDA cold hardiness zones."
          width="300"
        />
        <p>
          USDA hardiness zones are used to describe a plant's cold-tolerance.
          Bamboo can be grown outside its hardiness zone if it is kept in a
          container and moved indoors in the winter, or if it is kept indoors as
          a houseplant. It is important to note that a bamboo's zone does NOT
          necessarily correlate with it's preferred climate. A zone 8 bamboo
          might not be able to tolerate the heat and humidity of the southeast,
          or it might be stunted by the lower temperatures of the pacific
          northwest.
        </p>
      </div>
      <SetZone />
      <label>Clumping or Running</label>
      <div>
        <img
          src={runningclumping}
          alt="Diagram showing the difference between running and clumping bamboo."
          width="200"
        />
        <p>
          Clumping bamboo sends out shoots from a single large rhizome while the
          running bamboo sends rhizomes away from the initial rhizome and then a
          single shoot emerges from that smaller rhizome. A barrier can be used
          to keep running bamboo contained to a single area. One benefit of
          running bamboo is that a larger area can be covered with fewer plants;
          clumping bamboos have a fixed maximum footprint.
        </p>
      </div>
      <SetGrowthHabit />
      <label>Sun Requirements</label>
      <SetSun />
      <label>Adult Height</label>
      <SetSize />
      <ol className="bambooList">
        {plants.map((plant) => (
          <ol className="bambooListItem">
            <img
              src={bluechungii}
              alt="Woman standing next to bamboo"
              width="200"
            />
            <li>
              <i>{plant.name}</i>
            </li>
            <li>Zone: 9a-11b</li>
            <li>Full Sun to Part Shade</li>
            <ul>
              <li>
                Height: {plant.minHeight}-{plant.maxHeight}
              </li>
              <li>Clumping</li>
            </ul>
          </ol>
        ))}
        <ol className="bambooListItem">
          <img
            src={bluechungii2}
            alt="Woman standing next to bamboo"
            width="200"
          />
          <li>
            <i>Blue Chungii</i>
          </li>
          <li>Zone: 9a-11b</li>
          <li>Full Sun to Part Shade</li>
          <ul>
            <li>Height: 30ft</li>
            <li>Clumping</li>
          </ul>
        </ol>
      </ol>
    </div>
  )
}
