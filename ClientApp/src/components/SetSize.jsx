import React, { useState } from 'react'

export function SetSize() {
  const sizeMin = 0
  const sizeMax = 200

  function ChangeToDwarf(event) {
    sizeMin = 0
    sizeMax = 4
  }
  function ChangeToSmall(event) {
    sizeMin = 4
    sizeMax = 12
  }
  function ChangeToMedium(event) {
    sizeMin = 12
    sizeMax = 25
  }
  function ChangeToLarge(event) {
    sizeMin = 25
    sizeMax = 40
  }
  function ChangeToHuge(event) {
    sizeMin = 40
    sizeMax = 200
  }
  function ChangeToDefault(event) {
    sizeMin = 0
    sizeMax = 200
  }

  return (
    <div>
      <button classname="small" onClick={ChangeToDwarf}>
        Groundcover/Dwarf (0-4')
      </button>
      <button classname="small" onClick={ChangeToSmall}>
        Small (4'-12')
      </button>
      <button classname="small" onClick={ChangeToMedium}>
        Medium (12'-25')
      </button>
      <button classname="small" onClick={ChangeToLarge}>
        Large (25'-40')
      </button>
      <button classname="small" onClick={ChangeToHuge}>
        Small (40'+)
      </button>
      <button classname="small" onClick={ChangeToDefault}>
        No Preference
      </button>
    </div>
  )
}
