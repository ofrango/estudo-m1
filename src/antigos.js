'use strict'

import React, { Component } from 'react'
import Title from './title'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'
import Timer from './timer.js'

class Antigos extends Component {
  constructor () {
    console.log('contructor')
    super()
    this.state = {
      color: 'green',
      time: 0,
      showTimer: true
    }
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  render () {
    console.log('render')
    return (
      <div>
        <div className='olds' onClick={(e) => {
          alert('clicou')
        }}></div>
        <div>
          <Title name='Cesar' lastname='Fermino' />
          <Square />
          <br />
          <Button handleClick={() => alert('Botão simplão com textão')} ><span>Texto</span> Children</Button>
          <LikeButton />
          <hr />
          <Square color={this.state.color} />
          {['red', 'green', 'blue'].map((color) => (
            <Button key={color} handleClick={() => this.setState({color})}>{color}</Button>
          ))}
          <br /><br />
          <Timer time={this.state.time} /> 
          <button onClick={() => {
            this.setState({ time: this.state.time + 10 })
          }}>Mudar Propriedades</button>
          <hr />
          <br /><br />
        </div>
        <div>
          <Button handleClick={() => console.log('Clicou')}>Clique em Mim</Button>
        </div>
      </div>
    )
  }
}

export default Antigos
