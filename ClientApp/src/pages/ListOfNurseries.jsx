import React from 'react'

export function ListOfNurseries() {
  return (
    <div>
      <header>
        <h2>Nurseries</h2>
      </header>
      <form>
        <input type="text" placeholder="Search..." />
      </form>
      <table>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Ship Out of State?</th>
        </tr>
        <tr>
          <td>Wilson Bros Gardens</td>
          <td>McDonough, GA</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Bamboo Plants Online</td>
          <td>Labelle, FL</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Bamboo Garden</td>
          <td>Portland, OR</td>
          <td>Yes</td>
        </tr>
      </table>
    </div>
  )
}
