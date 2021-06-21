import React, { Component, useEffect } from 'react'
import { Link, Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'
import './custom.scss'
import { FrontPage } from './pages/FrontPage'
import { ListOfNurseries } from './pages/ListOfNurseries'
import { NurseryOwnersMain } from './pages/NurseryOwnersMain'
import { SetZipcode } from './components/SetZipcode'
import { SetZone } from './components/SetZone'
import { SetGrowthHabit } from './components/SetGrowthHabit'
import { SetSize } from './components/SetSize'
import { SetSun } from './components/SetSun'
import { SetHeight } from './components/SetHeight'
import bluechungii from './Images/bluechungii.jpg'
import runningclumping from './Images/runningclumping.jpg'
import usdazones from './Images/usdazones.jpg'

//http://www.bamboogarden.com/Smaller%20Running%20Bamboos.htm

function BambooPlantsMain() {
  return (
    <div>
      <header>
        <h2>Bamboo Plants</h2>
        <p>
          Browse our database of bamboo plants and find the one that's right for
          you!
        </p>
      </header>

      <label>USDA Plant Hardiness Zones</label>
      <div>
        <img
          src={usdazones}
          alt="Map of the US showing the different USDA cold hardiness zones."
          width="300"
        />
        <p>
          A bamboo's tolerance for cold can be described by it's USDA hardiness
          zone. Bamboo can be grown outside it's hardiness zone if it is kept in
          a container and moved indoors in the winter, or if it is kept indoors
          as a houseplant. It is important to note that a bamboo's zone does NOT
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
        <ol className="bambooListItem">
          <img
            src={bluechungii}
            alt="Woman standing next to bamboo"
            width="200"
          />
          <li>
            <i>Bambusa chungii</i>
          </li>
          <li>Tropical Blue Bamboo</li>
          <li>Zone: 9a-11b</li>
          <li>Full Sun to Part Shade</li>
          <ul>
            <li>Height: 30'</li>
            <li>Clumping</li>
          </ul>
        </ol>
        <ol className="bambooListItem">
          <img
            src={bluechungii}
            alt="Woman standing next to bamboo"
            width="200"
          />
          <li>
            <i>Bambusa chungii</i>
          </li>
          <li>Zone: 9a-11b</li>
          <li>Full Sun to Part Shade</li>
          <ul>
            <li>Height: 30'</li>
            <li>Clumping</li>
          </ul>
        </ol>
        <ol className="bambooListItem">
          <img
            src={bluechungii}
            alt="Woman standing next to bamboo"
            width="200"
          />
          <li>
            <i>Bambusa chungii</i>
          </li>
          <li>Zone: 9a-11b</li>
          <li>Full Sun to Part Shade</li>
          <ul>
            <li>Height: 30'</li>
            <li>Clumping</li>
          </ul>
        </ol>
      </ol>
    </div>
  )
}

export function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route path="/nursery-list">
          <ListOfNurseries />
        </Route>
        <Route path="/bamboo-list">
          <BambooPlantsMain />
        </Route>
        <Route path="/nursery-owners">
          <NurseryOwnersMain />
        </Route>
        <Route path="/nursery-owners/new-nursery"></Route>
        <Route path="/nursery-owners/edit-nursery"></Route>
        <Route path="/nursery-owners/add-bamboo"></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </main>
  )
}
