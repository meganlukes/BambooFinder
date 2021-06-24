import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export function NewNursery() {
  const [newNursery, setNewNursery] = useState({
    Name: '',
    Shipping: true,
    PhoneNumber: '',
    Email: '',
    StreetAddress: '',
    City: '',
    State: '',
    Zipcode: '',
    Description: '',
    Website: '',
  })
  const history = useHistory()
  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    setNewNursery({ ...newNursery, [fieldName]: value })
  }

  function handleBoolFieldChange(event) {
    const value = event.target.checked
    const fieldName = event.target.name

    setNewNursery({ ...newNursery, [fieldName]: value })
  }
  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Nurseries', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newNursery),
    })

    if (response.ok) {
      console.log('Nursery successfully added')
      history.push('/add-nursery-success')
    }
  }

  return (
    <>
      <header>
        <h2>
          <Link to="/">BambooFinder.com</Link>
        </h2>
        <h4>Add Your Nursery</h4>
      </header>
      <div className="addForm">
        <form onSubmit={handleFormSubmit}>
          <div>Nursery Name</div>
          <input
            type="text"
            className="inputLittleBox"
            placeholder="ex. My Nursery"
            name="Name"
            value={newNursery.Name}
            onChange={handleStringFieldChange}
          />

          <div>Do you ship your bamboo plants?</div>
          <div>
            <input
              type="radio"
              id="false"
              name="Shipping"
              value={newNursery.Shipping}
              onChange={handleBoolFieldChange}
              checked
            />
            <label for="NoShipping">No</label>
          </div>
          <div>
            <input
              type="radio"
              id="true"
              name="Shipping"
              value={newNursery.Shipping}
              onChange={handleBoolFieldChange}
              checked
            />
            <label for="YesShipping">Yes</label>
          </div>

          <div>Business Phone Number</div>
          <input
            type="tel"
            placeholder="ex. 123-456-7890"
            name="PhoneNumber"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={newNursery.PhoneNumber}
            onChange={handleStringFieldChange}
            required
          />

          <div>Business Email Address</div>
          <input
            type="text"
            placeholder="ex. name@business.com"
            name="Email"
            value={newNursery.Email}
            onChange={handleStringFieldChange}
          />

          <div>Street Address (optional)</div>
          <input
            type="text"
            className="inputLittleBox"
            placeholder="ex. 123 Smith Rd."
            name="StreetAddress"
            value={newNursery.StreetAddress}
            onChange={handleStringFieldChange}
          />

          <div>City</div>
          <input
            type="text"
            className="inputLittleBox"
            placeholder="ex. Miami"
            name="City"
            value={newNursery.City}
            onChange={handleStringFieldChange}
          />

          <div>State</div>
          <input
            type="text"
            className="inputLittleBox"
            placeholder="ex. FL"
            name="State"
            value={newNursery.State}
            onChange={handleStringFieldChange}
          />

          <div>Zip Code</div>
          <input
            type="text"
            className="inputLittleBox"
            placeholder="ex. 90210"
            name="Zipcode"
            value={newNursery.Zipcode}
            onChange={handleStringFieldChange}
          />

          <div>Website</div>
          <input
            type="url"
            pattern="https://.*"
            size="30"
            className="inputLittleBox"
            placeholder="ex. https://www.mynursery.com"
            name="Website"
            value={newNursery.Website}
            onChange={handleStringFieldChange}
          />

          <div>Additional Information (optional)</div>
          <input
            type="text"
            className="inputBigBox"
            placeholder="ex. Graceful Bamboo is an easy to care for species"
            name="Description"
            value={newNursery.Description}
            onChange={handleStringFieldChange}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}
