import React, { useState } from 'react'

export function SetGrowthHabit() {
  const growthHabit = ''

  function ChangeToRunning(event) {
    growthHabit = 'running'
  }

  function ChangeToClumping(event) {
    growthHabit = 'clumping'
  }
  function ChangeToDefault(event) {
    growthHabit = ''
  }

  return (
    <div>
      <button classname="small" onClick={ChangeToRunning}>
        Running
      </button>
      <button classname="small" onClick={ChangeToClumping}>
        Clumping
      </button>
      <button classname="small" onClick={ChangeToDefault}>
        No Preference
      </button>
    </div>
  )
}
