import React from 'react'

class Counter extends React.Component {
  render() {
    return (
      <div className='d-flex flex-column align-items-center border mt-1'>
        <div className='d-flex flex-row align-items-center justify-content-center px-4'>
          <button onClick={this.props.substract} className='btn btn-success m-2 col-4' >-</button>
          <h2 className='mx-4' >{this.props.count}</h2>
          <button className='btn btn-danger m-2 col-4' onClick={this.props.increment}>+</button>
        </div>
        <button className="btn btn-primary py-0" onClick={this.props.reset}>Reset</button>
      </div>
    )
  }
}

export default Counter