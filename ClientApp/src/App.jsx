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
    MinHeight: '',
    MaxHeight: '',
    Clumping: '',
    MinLight: '',
    MaxLight: '',
    MinZone: '',
    MaxZone: '',
  })
  return (
    <>
      <header>
        <h2>BambooFinder.com</h2>
        <h1>Add a New Bamboo Species</h1>
      </header>
      <div className="addForm">
        <form>
          <div>Species Name</div>
          <input
            type="text"
            className="inputLittleBox"
            placeholder="ex. Bambusa gracilis"
            name="name"
            value={newBamboo.Name}
          />
          <div>Common Name (optional)</div>
          <input
            type="text"
            className="inputLittleBox"
            placeholder="ex. Graceful Bamboo"
            // name="CommonName"
            // value="{newBamboo.CommonName}"
          />
          <div>Additional Information (optional)</div>
          <input
            type="text"
            className="inputBigBox"
            placeholder="ex. Graceful Bamboo is an easy to care for species"
            name={newBamboo.Name}
          />
          <div>Growth Habit</div>
          <div>
            <input
              type="radio"
              id="false"
              name="Clumping"
              value={newBamboo.Clumping}
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
              checked
            />
            <label for="clumping">Clumping</label>
          </div>
          <div>Mature Height Range</div>
          <label>
            From{' '}
            <input
              type="number"
              id="minheight"
              name="minheight"
              min="1"
              max="150"
              value={newBamboo.MinHeight}
            ></input>
            ft to{' '}
            <input
              type="number"
              id="maxheight"
              name="maxheight"
              min="1"
              max="150"
              value={newBamboo.MaxHeight}
            ></input>
            ft.
          </label>
          {/* <div>Minimum Light</div>
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
          </div> */}
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
