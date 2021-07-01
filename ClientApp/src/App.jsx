import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import './custom.scss'
import { FrontPage } from './pages/FrontPage'
import { ListOfNurseries } from './pages/ListOfNurseries'
import { NurseryOwnersMain } from './pages/NurseryOwnersMain'
import { BambooPlantsMain } from './pages/ListOfSpecies'
import { AddBamboo } from './pages/AddBamboo'
import { NewNursery } from './pages/NewNursery'
import { NurserySuccess } from './pages/NurserySuccess'
import { Species } from './pages/Species'
import { Nursery } from './pages/Nursery'
import { AddInventory } from './pages/AddInventory'
import { DeleteNursery } from './pages/DeleteNursery'
import { DeleteSpecies } from './pages/DeleteSpecies'
import { ChangeNurseries } from './pages/ChangeNurseries'
import { ChangeSpecies } from './pages/ChangeSpecies'
import { EditSpecies } from './pages/EditSpecies'
import { ListOfSpeciesToEdit } from './pages/ListOfSpeciesToEdit'
import { EditNursery } from './pages/EditNursery'
import { ListOfNurseriesToEdit } from './pages/ListOfNurseriesToEdit'

export function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <FrontPage />
        </Route>

        <Route exact path="/bamboo-list">
          <BambooPlantsMain />
        </Route>
        <Route exact path="/species/:id">
          <Species />
        </Route>

        <Route exact path="/nursery-list">
          <ListOfNurseries />
        </Route>
        <Route exact path="/nursery/:id">
          <Nursery />
        </Route>

        <Route exact path="/nursery-owners">
          <NurseryOwnersMain />
        </Route>
        <Route exact path="/success">
          <NurserySuccess />
        </Route>
        <Route exact path="/new-nursery">
          <NewNursery />
        </Route>
        <Route exact path="/add-bamboo">
          <AddBamboo />
        </Route>

        <Route exact path="/change-nursery">
          <ChangeNurseries />
        </Route>
        <Route exact path="/edit-nurseries-list">
          <ListOfNurseriesToEdit />
        </Route>
        <Route exact path="/nurseries/:id/edit">
          <EditNursery />
        </Route>
        <Route exact path="/delete-nursery">
          <DeleteNursery />
        </Route>
        <Route exact path="/add-inventory">
          <AddInventory />
        </Route>

        <Route exact path="/change-species">
          <ChangeSpecies />
        </Route>
        <Route exact path="/edit-species-list">
          <ListOfSpeciesToEdit />
        </Route>
        <Route exact path="/species/:id/edit">
          <EditSpecies />
        </Route>
        <Route exact path="/delete-species">
          <DeleteSpecies />
        </Route>
      </Switch>

      <ol className="bottom banner">
        <li className="horizontalspace">
          <Link to="/">BambooFinder.com</Link>
        </li>
        <li className="horizontalspace">
          Contact us at <span>info@bamboofinder.com</span>
        </li>
      </ol>
    </main>
  )
}
