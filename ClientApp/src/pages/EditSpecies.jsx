import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import { authHeader } from '../auth'

export function EditSpecies() {
  const params = useParams()
  const id = params.id
  const [bamboo, setBamboo] = useState({
    name: '',
    Info: '',
    commonName: '',
    MinHeight: 1,
    MaxHeight: 150,
    Clumping: true,
    MinLight: 1,
    MaxLight: 4,
    MinZone: 1,
    MaxZone: 13,
    PhotoURL: '',
  })
  const history = useHistory()

  const [isUploading, setIsUploading] = useState(false)
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  })
  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    setBamboo({ ...bamboo, [fieldName]: value })
  }
  function handleIntFieldChange(event) {
    const value = Number(event.target.value)
    const fieldName = event.target.name

    setBamboo({ ...bamboo, [fieldName]: value })
  }
  function handleBoolFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name
    console.log(value)

    setBamboo({ ...bamboo, [fieldName]: value })
  }

  useEffect(() => {
    async function fetchBamboo() {
      const response = await fetch(`/api/Species/${id}`)

      if (response.ok) {
        const apiData = await response.json()

        setBamboo(apiData)
      }
    }

    fetchBamboo()
  }, [id])

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch(`/api/Species/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(bamboo),
    })

    if (response.ok) {
      console.log('Bamboo successfully edited')
      history.push('/success')
    }
  }

  async function onDropFile(acceptedFiles) {
    // Do something with the files
    const fileToUpload = acceptedFiles[0]

    setIsUploading(true)

    const formData = new FormData()

    formData.append('file', fileToUpload)

    const response = await fetch('/api/Uploads', {
      method: 'POST',
      headers: {
        ...authHeader(),
      },
      body: formData,
    })

    if (response.ok) {
      const apiResponse = await response.json()

      const url = apiResponse.url

      setBamboo({ ...bamboo, PhotoURL: url })
    }

    setIsUploading(false)
  }
  let dropZoneMessage = 'Drag a picture of the restaurant here to upload!'

  if (isUploading) {
    dropZoneMessage = 'Uploading...'
  }

  if (isDragActive) {
    dropZoneMessage = 'Drop the files here ...'
  }

  return (
    <>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
        <h4>Edit Species</h4>
      </header>
      <div className="addForm">
        <form onSubmit={handleFormSubmit}>
          <div>Species Name</div>
          <input
            type="text"
            className="inputLittleBox"
            name="Name"
            value={bamboo.name}
            onChange={handleStringFieldChange}
          />
          <div>Common Name (optional)</div>
          <input
            type="text"
            className="inputLittleBox"
            name="CommonName"
            value={bamboo.commonName}
            onChange={handleStringFieldChange}
          />

          <div>Growth Habit</div>
          <div>
            <input
              type="radio"
              id="false"
              name="clumping"
              value={false}
              onChange={handleBoolFieldChange}
            />
            <label htmlFor="running">Running</label>
          </div>
          <div>
            <input
              type="radio"
              id="true"
              name="clumping"
              value={true}
              onChange={handleBoolFieldChange}
            />
            <label htmlFor="clumping">Clumping</label>
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
              value={bamboo.minZone}
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
              value={bamboo.maxZone}
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
              value={bamboo.minLight}
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
              value={bamboo.maxLight}
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
              value={bamboo.minHeight}
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
              value={bamboo.maxHeight}
              onChange={handleIntFieldChange}
            ></input>
            ft.
          </label>
          <div>Additional Information (optional)</div>
          <textarea
            className="inputBigBox"
            name="Info"
            value={bamboo.info}
            onChange={handleStringFieldChange}
          ></textarea>

          <div>Photo</div>
          {bamboo.PhotoURL ? (
            <p>
              <img
                alt="Bamboo Upload Preview"
                width={200}
                src={bamboo.PhotoURL}
              />
            </p>
          ) : null}
          <div className="file-drop-zone">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {dropZoneMessage}
            </div>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}
