import React, { Component, useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import './custom.scss'
import { FrontPage } from './pages/FrontPage'
import { ListOfNurseries } from './pages/ListOfNurseries'
import { NurseryOwnersMain } from './pages/NurseryOwnersMain'
import { SetHeight } from './components/SetHeight'
import { BambooPlantsMain } from './pages/BambooPlantsMain'
import { AddBamboo } from './pages/AddBamboo'
import { NewNursery } from './pages/NewNursery'
import { NurserySuccess } from './pages/NurserySuccess'
import { SpeciesSuccess } from './pages/SpeciesSuccess'
import bluechungii from './Images/bluechungii.jpg'

function Species() {
  return (
    <>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
      </header>
      <p className="name">
        <i>Blue chungii </i>
      </p>
      <p className="name">&quot;Angel Blue Mist Ghost Bamboo&quot;</p>
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
              <td>15ft-20ft</td>
            </tr>
            <tr>
              <td>Growth Habit</td>
              <td>Clumping</td>
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
              <td>9-11</td>
            </tr>
            <tr>
              <td>Light Requirements</td>
              <td>Part Sun to Full Sun</td>
            </tr>
          </table>
        </li>
      </ol>
      <div className="descBox">More Information</div>
    </>
  )
}

export function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route exact path="/nursery-list">
          <ListOfNurseries />
        </Route>
        <Route exact path="/bamboo-list">
          <BambooPlantsMain />
        </Route>
        <Route exact path="/nursery-owners">
          <NurseryOwnersMain />
        </Route>
        <Route exact path="/new-nursery">
          <NewNursery />
        </Route>
        <Route exact path="/edit-nursery"></Route>
        <Route exact path="/add-bamboo">
          <AddBamboo />
        </Route>
        <Route exact path="/add-nursery-success">
          <NurserySuccess />
        </Route>
        <Route exact path="/add-species-success">
          <SpeciesSuccess />
        </Route>
        <Route exact path="/species/:id">
          <Species />
        </Route>
      </Switch>

      <ol className="bottom banner">
        <li className="horizontalspace">BambooFinder.com</li>
        <li className="horizontalspace">
          Contact us at <span>info@bamboofinder.com</span>
        </li>
      </ol>
    </main>
  )
}
