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
      color: 'green'
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
        <div>
          <Square color={this.state.color} />
          {['red','green','blue'].map((color) =>(
            <Button key={color} handleClick={() => this.setState({color})}>{color}</Button>
          ))}
        </div>
      </div>
    )
  }
}

export default App
