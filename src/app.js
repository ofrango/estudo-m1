'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'

class App extends Component {
  render () {
    return (
      <div>
        <div className='olds' onClick={(e) => {
          alert('clicou')    
        }}>
          <Title name='Cesar' lastname='Fermino' />
          <Square />
          <br/>
        </div>
        <div className='container' >
          <Button handleClick={() => alert('Botão simplão com textão') } ><span>Texto</span> Children</Button>
          <LikeButton />
        </div>
      </div>
    )
  }
}

export default App
