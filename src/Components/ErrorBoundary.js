import React from 'react';

export class ErrorBoundary extends React.Component{
constructor(props) {
  super(props);
  this.state =  { error: null}
}

  
  componentDidCatch(error, errorInfo){
    console.log(error, errorInfo);
  }

  static getDerivedStateFromError(error){
    return { error}
  }


render () {
  if (this.state.error){
    return (
        <div className='card-box'>
    <div className='card-content'> 
    <h3  className='the-error'>error(cannot display component's content)!Something went wrong HERE!</h3>
    </div>
    </div>
    )
  }

  return this.props.children;
}


  
}

export default ErrorBoundary;