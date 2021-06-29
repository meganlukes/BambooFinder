import React, { Component } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'

import './custom.scss'
import { FrontPage } from './pages/FrontPage'
import { ListOfNurseries } from './pages/ListOfNurseries'
import { NurseryOwnersMain } from './pages/NurseryOwnersMain'
import { SetHeight } from './components/SetHeight'
import { BambooPlantsMain } from './pages/ListOfSpecies'
import { AddBamboo } from './pages/AddBamboo'
import { NewNursery } from './pages/NewNursery'
import { NurserySuccess } from './pages/NurserySuccess'

import { Species } from './pages/Species'
import { Nursery } from './pages/Nursery'
import { AddInventory } from './pages/AddInventory'
import { DeleteNursery } from './pages/DeleteNursery'

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
        <Route exact path="/success">
          <NurserySuccess />
        </Route>
        <Route exact path="/add-inventory">
          <AddInventory />
        </Route>
        <Route exact path="/species/:id">
          <Species />
        </Route>
        <Route exact path="/nursery/:id">
          <Nursery />
        </Route>
        <Route exact path="/delete-nursery">
          <DeleteNursery />
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
