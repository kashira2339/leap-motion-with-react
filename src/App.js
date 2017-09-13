import React, { Component } from 'react'
import Leap from 'leapjs'
import logo from './logo.svg'
import './App.css'
import Canvas from './components/Canvas'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }  
    Leap.loop({enableGestures: true}, this.onLeapFrameChange.bind(this))
  }
  onLeapFrameChange(frame) {
    this.setState(prevState => ({ ...prevState, frame }))
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src='https://static1.squarespace.com/static/57bf65a78419c24a012e3072/t/57d328d6cd0f68a33d3535dd/1505219875770/' height={80}/>
          <img src={logo} alt="logo" height={80}/>
          <h2>Leap Motion Tracking with React</h2>
        </div>
        <p className="App-intro">Lets puts your hand on Leap Motion!!</p>
        <p>
          <Canvas frame={this.state.frame} width={800} height={500}/>
        </p>
      </div>
    )
  }
}

export default App
