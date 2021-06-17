import React, { useState } from 'react'
export function SetHeight() {
  const height = ''

  function changeHeight(event) {
    height = 'dog'
    console.log('dog')
  }

  return (
    <div class="dropdown">
      <button onClick={changeHeight} class="dropbtn">
        Options
      </button>
      <div id="myDropdown" class="dropdown-content">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}
