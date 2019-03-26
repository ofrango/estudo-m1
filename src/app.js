'use strict'

import React, { Component } from 'react'
import Antigos from './antigos'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value:  'Valor Inicial'
    }
  }
  render () {
    return(
     
      <div>
         <Antigos />
        <form>
          <input type='text' value={this.state.value} onChange={(e) => {
            console.log(e.target)
            this.setState({
              value: e.target.value
            })
          }} />
        </form>
      </div>
    )
  }
}

export default App
