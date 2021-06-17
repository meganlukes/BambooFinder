import React, { useState } from 'react'

export function SetSun() {
  const sun = ''

  function ChangeToShade(event) {
    sun = 1
  }

  function ChangeToPartShade(event) {
    sun = 2
  }
  function ChangeToPartSun(event) {
    sun = 3
  }
  function ChangeToFullSun(event) {
    sun = 4
  }
  function ChangeToDefault(event) {
    sun = ''
  }

  return (
    <div>
      <button classname="small" onClick={ChangeToShade}>
        Shade
      </button>
      <button classname="small" onClick={ChangeToPartShade}>
        Part-Shade (1.5-4 Hours Direct Sun)
      </button>
      <button classname="small" onClick={ChangeToPartSun}>
        Part-Sun (4-6 Hours Direct Sun)
      </button>
      <button classname="small" onClick={ChangeToFullSun}>
        Full Sun (6+ Hours Direct Sun)
      </button>
      <button classname="small" onClick={ChangeToDefault}>
        Reset
      </button>
    </div>
  )
}
