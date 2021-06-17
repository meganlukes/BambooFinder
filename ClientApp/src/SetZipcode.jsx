import React, { useState } from 'react'

export function SetZipcode() {
  const zipcode = ''
  const [tempZipcode, setTempZipcode] = useState()
  function updateTempZipcode(event) {
    setTempZipcode(event.target.value)
  }
  function updateNewZipcode(event) {
    zipcode = tempZipcode
  }
  return (
    <form>
      <input type="text" onChange={updateTempZipcode} placeholder="Zip Code" />
      <button className="small" onClick={updateNewZipcode}>
        Set
      </button>
    </form>
  )
}
