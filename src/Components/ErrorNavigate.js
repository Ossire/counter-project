import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'



const ErrorNavigate = () => {

    const navigate = useNavigate()

  return (
    <div className='error-navigatee'>
    <Button variant="success" onClick={() => navigate('/')}> Go Back Home</Button> {' '}
    <Button  variant="primary" onClick={() => navigate(-1)}>Previous Page</Button>  {' '}

    </div>
  )
}

export default ErrorNavigate