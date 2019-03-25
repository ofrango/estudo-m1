'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'

class App extends Component {
  
  constructor () {
    super()
    this.state = {
      textao: 'Cesar teste'
    }
  }

  render () {
    return (
      <div>
        <div className='olds' onClick={(e) => {
          alert('clicou')    
        }}>
          <Title name='Cesar' lastname='Fermino' />
          <Square />
          <br/>
          <Button handleClick={() => alert('Botão simplão com textão') } ><span>Texto</span> Children</Button>
          <LikeButton />
          <br/><br/>
        </div>
        <div className='container' style={{
          backgroundColor: '#dddddd' ,
          height: '50px',
          width: '100px'
        }} onClick={() => this.setState({
          textao: 'Outro texto'
        })} >
          {this.state.textao}
        </div>
      </div>
    )
  }
}

export default App
