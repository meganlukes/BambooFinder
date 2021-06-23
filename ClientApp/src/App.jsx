import React, { useState, Component, useEffect } from 'react'
import { Link, Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'
import './custom.scss'
import { FrontPage } from './pages/FrontPage'
import { ListOfNurseries } from './pages/ListOfNurseries'
import { NurseryOwnersMain } from './pages/NurseryOwnersMain'
import { SetHeight } from './components/SetHeight'
import { BambooPlantsMain } from './pages/BambooPlantsMain'
function AddBamboo() {
  const [newBamboo, setNewBamboo] = useState({
    Name: '',
    Info: '',
    CommonName: '',
    MinHeight: 1,
    MaxHeight: 150,
    Clumping: true,
    MinLight: 1,
    MaxLight: 4,
    MinZone: 1,
    MaxZone: 13,
  })
  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    setNewBamboo({ ...newBamboo, [fieldName]: value })
  }
  function handleIntFieldChange(event) {
    const value = Number(event.target.value)
    const fieldName = event.target.name

    setNewBamboo({ ...newBamboo, [fieldName]: value })
  }
  function handleBoolFieldChange(event) {
    const value = event.target.checked
    const fieldName = event.target.name

    setNewBamboo({ ...newBamboo, [fieldName]: value })
  }
  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Species', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newBamboo),
    })

    if (response.ok) {
      console.log('Bamboo successfully added')
    }
  }

  return (
    <>
      <header>
        <h2>BambooFinder.com</h2>
        <h4>Add a New Bamboo Species</h4>
      </header>
      <div className="addForm">
        <form onSubmit={handleFormSubmit}>
          <div>Species Name</div>
          <input
            type="text"
            className="inputLittleBox"
            placeholder="ex. Bambusa gracilis"
            name="Name"
            value={newBamboo.Name}
            onChange={handleStringFieldChange}
          />
          <div>Common Name (optional)</div>
          <input
            type="text"
            className="inputLittleBox"
            placeholder="ex. Graceful Bamboo"
            name="CommonName"
            value={newBamboo.CommonName}
            onChange={handleStringFieldChange}
          />

          <div>Growth Habit</div>
          <div>
            <input
              type="radio"
              id="false"
              name="Clumping"
              value={newBamboo.Clumping}
              onChange={handleBoolFieldChange}
              checked
            />
            <label for="running">Running</label>
          </div>
          <div>
            <input
              type="radio"
              id="true"
              name="Clumping"
              value={newBamboo.Clumping}
              onChange={handleBoolFieldChange}
              checked
            />
            <label for="clumping">Clumping</label>
          </div>
          <div>Growing Zone</div>
          <label>
            From{' '}
            <input
              className="inputTinyBox"
              type="number"
              id="MinZone"
              name="MinZone"
              min="1"
              max="13"
              value={newBamboo.MinZone}
              onChange={handleIntFieldChange}
            ></input>{' '}
            to{' '}
            <input
              className="inputTinyBox"
              type="number"
              id="MaxZone"
              name="MaxZone"
              min="1"
              max="13"
              value={newBamboo.MaxZone}
              onChange={handleIntFieldChange}
            ></input>
            ft.
          </label>
          <div>Light Requirements</div>
          <div>(Shade = 1, Part Shade = 2, Part Sun = 3, Full Sun = 4)</div>
          <label>
            <input
              className="inputTinyBox"
              type="number"
              id="MinLight"
              name="MinLight"
              min="1"
              max="4"
              value={newBamboo.MinLight}
              onChange={handleIntFieldChange}
            ></input>{' '}
            to{' '}
            <input
              className="inputTinyBox"
              type="number"
              id="MaxLight"
              name="MaxLight"
              min="1"
              max="4"
              value={newBamboo.MaxLight}
              onChange={handleIntFieldChange}
            ></input>
          </label>
          <div>Mature Height Range</div>
          <label>
            From{' '}
            <input
              className="inputTinyBox"
              type="number"
              id="MinHeight"
              name="MinHeight"
              min="1"
              max="150"
              value={newBamboo.MinHeight}
              onChange={handleIntFieldChange}
            ></input>
            ft to{' '}
            <input
              className="inputTinyBox"
              type="number"
              id="MaxHeight"
              name="MaxHeight"
              min="1"
              max="150"
              value={newBamboo.MaxHeight}
              onChange={handleIntFieldChange}
            ></input>
            ft.
          </label>
          <div>Additional Information (optional)</div>
          <input
            type="text"
            className="inputBigBox"
            placeholder="ex. Graceful Bamboo is an easy to care for species"
            name="Info"
            value={newBamboo.Info}
            onChange={handleStringFieldChange}
          />
          <input type="submit" value="submit" />
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
        <Route path="/nursery-list">
          <ListOfNurseries />
        </Route>
        <Route path="/bamboo-list">
          <BambooPlantsMain />
        </Route>
        <Route path="/nursery-owners">
          <NurseryOwnersMain />
        </Route>
        <Route path="/new-nursery"></Route>
        <Route path="/edit-nursery"></Route>
        <Route path="/add-bamboo">
          <AddBamboo />
        </Route>
        <Route></Route>
        <Route></Route>
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
