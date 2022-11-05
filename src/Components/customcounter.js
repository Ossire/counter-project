
import { useState } from "react";
import { Button, Form } from "react-bootstrap"





function CustomCounter() {


  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);


  const Increment = (event) => {
    event.preventDefault()
    setCount(count + 1)

  }


  const Decrement = (event) => {
    event.preventDefault()
    setCount(count - 1)
  }


  const Reset = (event) => {
    event.preventDefault()
    setCount(0)
    setInput(0)
  }

  const HandleChange = (event) => {
    setInput(event.target.value)
  }

  const SetValue = (event) => {
    event.preventDefault()
    setCount(input)

    /*if (setCount != 0 && setInput !=0  ){
      setCount(input)
      
    }  else if (setCount != 0 && setInput === 0) {
      return
    }*/





  }

  return (
    <div className="container">

      <h1> COUNT : {count}</h1>

      <Form >


        <Form.Group className="mb-3"  controlId="formBasicEmail">
          <Form.Label className="text-muted">SET VALUE BELOW:</Form.Label>
          <Form.Control type="number" value={input} onChange={HandleChange} />
        </Form.Group>
      </Form>





      <div className="d-grid gap-5">
        <Button  variant="outline-warning" size="lg" onClick={Increment}> Increment</Button> {' '}

        <Button  variant="outline-danger" size="lg" onClick={Decrement}>  Decrement </Button>{' '}

        <Button variant="outline-danger" size="lg" onClick={Reset}> Reset</Button> {' '}

        <Button  variant="outline-warning" size="lg" onClick={SetValue}> SetValue</Button> {' '}

      </div>

    </div>


  );












}

export default CustomCounter;
