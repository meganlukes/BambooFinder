import React, { Component, useEffect } from 'react'
import { Link, Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'
import './custom.scss'
import { FrontPage } from './pages/FrontPage'
import { ListOfNurseries } from './ListOfNurseries'
import { NurseryOwnersMain } from './NurseryOwnersMain'

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
        <Route path="/bamboo-list"></Route>
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
