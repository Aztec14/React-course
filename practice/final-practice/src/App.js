import React, { Component } from 'react'
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('/api/artists', {
      headers: { "Content-Type": "application/json" },
      method: 'POST',
      body: JSON.stringify({pagination: 2})
    })
        .then(res => res.json())
        .then(res => {
          console.log(res)
        })

  fetch('/api/artists/1',)
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
  }
  render () {
    return (
      <div className="App">
        Your code is here
    </div>
    )
  }
}

export default App
