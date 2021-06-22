import React, { useState, Component, useEffect } from 'react'
export function ListOfNurseries() {
  const [filterText, setFilterText] = useState('')

  return (
    <div>
      <header>
        <h2>Nurseries</h2>
      </header>
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={function (event) {
            setFilterText(event.target.value)
          }}
        />
      </form>
      <table>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Ship?</th>
        </tr>
        <tr>
          <td>Wilson Bros Gardens</td>
          <td>McDonough, GA</td>
          <td>Lower 48 States</td>
        </tr>
        <tr>
          <td>Bamboo Plants Online</td>
          <td>Labelle, FL</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Bamboo Garden</td>
          <td>Portland, OR</td>
          <td>Lower 48 States</td>
        </tr>
        <tr>
          <td>Whispering Winds Bamboo</td>
          <td>Kipahula, HI</td>
          <td>Within Hawaii</td>
        </tr>
      </table>
    </div>
  )
}
