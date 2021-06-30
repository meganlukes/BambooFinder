import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import { authHeader } from '../auth'

export function AddBamboo() {
  const [newBamboo, setNewBamboo] = useState({
    Name: '',
    Info: '',
    CommonName: '',
    MinHeight: 1,
    MaxHeight: 150,
    Clumping: true,
    MinLight: 1,
    MaxLight: 4,
    MinZone: 1,
    MaxZone: 13,
  })
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  })
  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    setNewBamboo({ ...newBamboo, [fieldName]: value })
  }
  function handleIntFieldChange(event) {
    const value = Number(event.target.value)
    const fieldName = event.target.name

    setNewBamboo({ ...newBamboo, [fieldName]: value })
  }
  function handleBoolFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name
    console.log(value)

    setNewBamboo({ ...newBamboo, [fieldName]: value })
  }
  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Species', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newBamboo),
    })

    if (response.ok) {
      console.log('Bamboo successfully added')
      history.push('/success')
    }
  }
  async function onDropFile(acceptedFiles) {
    // Do something with the files
    const fileToUpload = acceptedFiles[0]
    console.log(fileToUpload)

    setIsUploading(true)

    // Create a formData object so we can send this
    // to the API that is expecting som form data.
    const formData = new FormData()

    // Append a field that is the form upload itself
    formData.append('file', fileToUpload)

    try {
      // Use fetch to send an authorization header and
      // a body containing the form data with the file
      const response = await fetch('/api/Uploads', {
        method: 'POST',
        headers: {
          ...authHeader(),
        },
        body: formData,
      })

      // If we receive a 200 OK response, set the
      // URL of the photo in our state so that it is
      // sent along when creating the bamboo,
      // otherwise show an error
      if (response.ok) {
        const apiResponse = await response.json()

        const url = apiResponse.url

        setNewBamboo({ ...newBamboo, photoURL: url })
      } else {
        setErrorMessage('Unable to upload image')
      }
    } catch {
      // Catch any network errors and show the user we could not process their upload
      setErrorMessage('Unable to upload image')
    }
    setIsUploading(false)
  }
  return (
    <>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
        <h4>Add a New Bamboo Species</h4>
      </header>
      <div className="addForm">
        <form onSubmit={handleFormSubmit}>
          <div>Species Name</div>
          <input
            type="text"
            className="inputLittleBox"
            placeholder="ex. Bambusa gracilis"
            name="Name"
            value={newBamboo.Name}
            onChange={handleStringFieldChange}
          />
          <div>Common Name (optional)</div>
          <input
            type="text"
            className="inputLittleBox"
            placeholder="ex. Graceful Bamboo"
            name="CommonName"
            value={newBamboo.CommonName}
            onChange={handleStringFieldChange}
          />

          <div>Growth Habit</div>
          <div>
            <input
              type="radio"
              id="false"
              name="Clumping"
              value={false}
              onChange={handleBoolFieldChange}
            />
            <label for="running">Running</label>
          </div>
          <div>
            <input
              type="radio"
              id="true"
              name="Clumping"
              value={true}
              onChange={handleBoolFieldChange}
            />
            <label for="clumping">Clumping</label>
          </div>
          <div>Growing Zone</div>
          <label>
            From{' '}
            <input
              className="inputTinyBox"
              type="number"
              id="MinZone"
              name="MinZone"
              min="1"
              max="13"
              value={newBamboo.MinZone}
              onChange={handleIntFieldChange}
            ></input>{' '}
            to{' '}
            <input
              className="inputTinyBox"
              type="number"
              id="MaxZone"
              name="MaxZone"
              min="1"
              max="13"
              value={newBamboo.MaxZone}
              onChange={handleIntFieldChange}
            ></input>
          </label>
          <div>Light Requirements</div>
          <div>(Shade = 1, Part Shade = 2, Part Sun = 3, Full Sun = 4)</div>
          <label>
            <input
              className="inputTinyBox"
              type="number"
              id="MinLight"
              name="MinLight"
              min="1"
              max="4"
              value={newBamboo.MinLight}
              onChange={handleIntFieldChange}
            ></input>{' '}
            to{' '}
            <input
              className="inputTinyBox"
              type="number"
              id="MaxLight"
              name="MaxLight"
              min="1"
              max="4"
              value={newBamboo.MaxLight}
              onChange={handleIntFieldChange}
            ></input>
          </label>
          <div>Mature Height Range</div>
          <label>
            From{' '}
            <input
              className="inputTinyBox"
              type="number"
              id="MinHeight"
              name="MinHeight"
              min="1"
              max="150"
              value={newBamboo.MinHeight}
              onChange={handleIntFieldChange}
            ></input>
            ft to{' '}
            <input
              className="inputTinyBox"
              type="number"
              id="MaxHeight"
              name="MaxHeight"
              min="1"
              max="150"
              value={newBamboo.MaxHeight}
              onChange={handleIntFieldChange}
            ></input>
            ft.
          </label>
          <div>Additional Information (optional)</div>
          <input
            type="text"
            className="inputBigBox"
            placeholder="ex. Graceful Bamboo is an easy to care for species"
            name="Info"
            value={newBamboo.Info}
            onChange={handleStringFieldChange}
          />
          <div>Photo</div>
          <div className="file-drop-zone">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive
                ? 'Drop the files here ...'
                : 'Drag a picture of the bamboo here to upload!'}
            </div>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}
