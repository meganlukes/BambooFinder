import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'
import { authHeader } from '../auth'
import { Header } from '../components/Header'

export function EditNursery() {
  const params = useParams()
  const id = params.id
  const [newNursery, setNewNursery] = useState({
    name: '',
    shipping: true,
    phoneNumber: '',
    email: '',
    streetAddress: '',
    city: '',
    state: '',
    zipcode: '',
    description: '',
    website: '',
  })
  return (
    <div>
      <Header pageName="Edit Nursery" />
    </div>
  )
}
