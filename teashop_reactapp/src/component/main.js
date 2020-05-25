import React, { Component } from 'react'
import ProductMaster from './productmaster';

class Main extends Component {

  render() {
    return (
      <div className="container" >
        <div className="row h-100 pt-5 ">
          <div className="col-12">
            <ProductMaster />
          </div>
        </div>
      </div >
    )
  }
}

export default Main
