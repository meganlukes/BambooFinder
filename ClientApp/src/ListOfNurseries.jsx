import React from 'react'
import { SetZipcode } from './components/SetZipcode'

export function ListOfNurseries() {
  return (
    <div>
      <header>
        <h2>Nurseries</h2>
      </header>
      <SetZipcode />
      <table>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Ship Out of State?</th>
          <th>Distance from Me</th>
        </tr>
        <tr>
          <td>Wilson Bros Gardens</td>
          <td>McDonough, GA</td>
          <td>Yes</td>
          <td>356 Miles</td>
        </tr>
        <tr>
          <td>Bamboo Plants Online</td>
          <td>Labelle, FL</td>
          <td>Yes</td>
          <td>204 Miles</td>
        </tr>
        <tr>
          <td>Bamboo Garden</td>
          <td>Portland, OR</td>
          <td>Yes</td>
          <td>2455 Miles</td>
        </tr>
      </table>
    </div>
  )
}
