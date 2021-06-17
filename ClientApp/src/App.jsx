import React, { Component, useEffect, useState } from 'react'
import { Link, Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'
import './custom.scss'
import { FrontPage } from './pages/FrontPage'

export function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route path="/nursery-list">
          <div>
            <header>
              <h2>Nurseries</h2>
            </header>

            <form>
              <input type="text" placeholder="Zip Code" />
              <button className="small">Click</button>
            </form>
            <div class="grid-container-n">
              <div class="item1">
                <span>Nursery Name</span>
              </div>
              <div class="item2">Location</div>
              <div class="item3">
                <span>Shipping</span>
              </div>
              <div class="item4">
                <span>Distance</span>
              </div>
            </div>
            <div class="grid-container-n">
              <div class="item1">
                <span>Wilson Bros Gardens</span>
              </div>
              <div class="item2">McDonough, GA</div>
              <div class="item3">
                <span>Yes</span>
              </div>
              <div class="item4">
                <span>300 miles</span>
              </div>
            </div>
            <div class="grid-container-n">
              <div class="item1">
                <span>Bamboo Plants Online</span>
              </div>
              <div class="item2">Labelle, FL</div>
              <div class="item3">
                <span>Yes</span>
              </div>
              <div class="item4">
                <span>100 miles</span>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </main>
  )
}
