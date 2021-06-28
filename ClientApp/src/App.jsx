import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import './custom.scss'
import { FrontPage } from './pages/FrontPage'
import { ListOfNurseries } from './pages/ListOfNurseries'
import { NurseryOwnersMain } from './pages/NurseryOwnersMain'
import { SetHeight } from './components/SetHeight'
import { BambooPlantsMain } from './pages/ListOfSpecies'
import { AddBamboo } from './pages/AddBamboo'
import { NewNursery } from './pages/NewNursery'
import { NurserySuccess } from './pages/NurserySuccess'
import { SpeciesSuccess } from './pages/SpeciesSuccess'
import { Species } from './pages/Species'
import { Nursery } from './pages/Nursery'

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
        <Route exact path="/nursery/:id">
          <Nursery />
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
