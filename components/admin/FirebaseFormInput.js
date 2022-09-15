import { TextField } from '@mui/material'
import React from 'react'

const FirebaseTextField = () => {
    return (
        <TextField />
    )
}

const FirebaseFormInput = (type) => {
  switch (type) {
    case "textField": return <FirebaseTextField />
  }
}

export default FirebaseFormInput