import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const ErrorPage = () => {

    const navigate = useNavigate()
    return (

        <div>
            <h1 style={{color : 'red'}}>404 ERROR!!..</h1>
            <h1>We're sorry about this. You can go back to the</h1>

            <div className='the-container' >
            <Button  variant="primary" onClick={() => navigate(-1)}>Previous Page</Button>  {' '}
            <p className='p-tag'>OR</p>
                <Button variant="success" onClick={() => navigate('/')}> Back Home</Button> {' '}
               
            </div>
</div>
            )
}

            
            
            export default ErrorPage