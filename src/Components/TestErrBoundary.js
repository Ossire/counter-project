import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import {Form, Button} from 'react-bootstrap'




const Comp1 = () => {

    return (
        <div className="card-box">
            <div className="card-content">
                <h2 >fIRST COMPONENT</h2>
                <h3 className="text-muted">I'm displaying the content inside this first card component to show that the error boundary works. The throw error does'nt catch it</h3>
            </div>
        </div>
    )
}



const Comp2 = () => {

    throw new Error('error')

    return (

        
            <div>
                <p>Displaying Second component</p>
            </div>
    
    )
}





const Comp3 = () => {

    return (
        <div className="card-box">
            <div className="card-content">
                <h2>Third COMPONENT</h2>
                <h3 className="text-muted">I'm displaying the content inside this third card component to show that my error boundary works. The throw error does'nt catch</h3>
            </div>
        </div>
    )
}

const Comp4 = () => {

    throw new Error('error')

    return (

        
            <div>
                <h1>Displaying Fourth component</h1>
            </div>
        

    )

}


const TestErrBoundary = () => {

    return (


        <div className="big-box">
            <Comp1/>
            <ErrorBoundary><Comp2 /></ErrorBoundary>
            <Comp3/>
            <ErrorBoundary><Comp4 /></ErrorBoundary>
        </div>
    )
}



export default TestErrBoundary