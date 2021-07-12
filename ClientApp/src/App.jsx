import React, { useState } from 'react'
import { Link, Route, Switch, useHistory } from 'react-router-dom'

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
import { Header } from './components/Header'

function SignUp() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
  })
  const confirmPassword = ''
  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    setNewUser({ ...newUser, [fieldName]: value })
  }

  async function handleFormSubmit(event) {
    event.preventDefault()
    if (newUser.password === confirmPassword) {
      const response = await fetch('/api/Users', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newUser),
      })

      if (response.ok) {
        console.log('User successfully added')
        history.push('/new-nursery')
      }
    } else {
      console.log('bad password')
    }
  }
  return (
    <>
      <Header
        pageName="New Nursery Owner Sign Up"
        pageDescript="Join and Add Your Nursery to BambooFinder.com to Connect with New Customers"
      />
      <div className="addForm">
        <form onSubmit={handleFormSubmit}>
          <div>New Username</div>
          <input
            type="text"
            className="inputLittleBox"
            placeholder=""
            name="username"
            value={newUser.username}
            onChange={handleStringFieldChange}
          />
          <div>Email</div>
          <input
            type="text"
            placeholder=""
            name="email"
            value={newUser.email}
            onChange={handleStringFieldChange}
            className="inputLittleBox"
          />
          <div>Password</div>
          <input
            type="password"
            placeholder=""
            name="password"
            value={newUser.password}
            onChange={handleStringFieldChange}
            className="inputLittleBox"
          />
          <div>Confirm Password</div>
          <input
            type="password"
            placeholder=""
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleStringFieldChange}
            className="inputLittleBox"
          />
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
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
        <Route exact path="/new-owner">
          <SignUp />
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
