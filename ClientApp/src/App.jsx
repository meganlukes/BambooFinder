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
      <SetZone />
      <label>Clumping or Running</label>
      <SetGrowthHabit />
      <label>Sun Requirements</label>
      <SetSun />
      <label>Full Height</label>
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
