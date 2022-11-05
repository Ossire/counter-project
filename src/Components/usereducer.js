import React from 'react'
import { useReducer } from "react";
import { Button, Form } from "react-bootstrap"


const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 }
    case 'decrement':
      return { ...state, count: state.count - 1 }
    case 'reset':
      return { input: state.input * 0, count: state.count * 0 }
    case 'setvalue':
      return { ...state, count: action.newInputValue }
    case 'storeInput':
      return { ...state, input: action.payload }

    default: {
      return state
    }

  }

}


const Useddreduce = () => {

  const initialState = { count: 0, input: 0 }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (

    <div className='container'>
      <h1> COUNTER: {state.count} </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="text-muted">SET VALUE BELOW</Form.Label>
          <Form.Control
            type="number"
            value={state.input}
            onChange={(e) => dispatch({ type: 'storeInput', payload: e.target.value })} />
          </Form.Group >
      </Form>
 
      <div className="d-grid gap-5" >
      <Button variant="outline-success" size="lg" onClick={(() => dispatch({ type: 'increment' }))}> plus </Button> {' '}
      <Button variant="outline-success" size="lg" onClick={(() => dispatch({ type: 'decrement' }))}> minus</Button> {' '}
      <Button variant="outline-info" size="lg" onClick={(() => dispatch({ type: 'reset' }))}> Reset</Button> {' '}
      <Button variant="outline-info" size="lg" onClick={(() => dispatch({ type: 'setvalue', newInputValue: state.input }))}>setvalue</Button> {' '}
      </div>

    </div>


  )



}







export default Useddreduce