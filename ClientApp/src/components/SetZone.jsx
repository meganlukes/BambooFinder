import React, { useState } from 'react'

export function SetZone() {
  const zone = ''
  const [tempZone, setTempZone] = useState()
  function updateTempZone(event) {
    setTempZone(event.target.value)
  }
  function updateNewZone(event) {
    switch (tempZone.toLowerCase()) {
      case '5a':
        return (zone = 10)
      case '5b':
        return (zone = 11)
      case '6a':
        return (zone = 12)
      case '6b':
        return (zone = 13)
      case '7a':
        return (zone = 14)
      case '7b':
        return (zone = 15)
      case '8a':
        return (zone = 16)
      case '8b':
        return (zone = 17)
      case '9a':
        return (zone = 18)
      case '9b':
        return (zone = 19)
      case '10a':
        return (zone = 20)
      case '10b':
        return (zone = 21)
      default:
        return (zone = '')
    }
  }
  return (
    <form>
      <input type="text" onChange={updateTempZone} placeholder="ex. 9" />
      <button className="small" onClick={updateNewZone}>
        Set
      </button>
    </form>
  )
}
