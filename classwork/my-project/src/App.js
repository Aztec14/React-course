import React from 'react'
import Header from "./components/header/Header";
import './App.scss';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 'Some title',
      user: {
        name: 'Giya',
        age: 32,
        email: '',
        test: {
          value: 1,
          count: 0
        }
      }
    }

    this.changeName = this.changeName.bind(this)
  }

  incrementAge = (increment = 1, event) => {
    this.setState({user: {...this.state.user, age: this.state.user.age + increment}})
  }

  changeName() {
    this.setState({user: {...this.state.user, name: 'Dima'}})
  }

  render() {
    console.log('render')
    const {title, user} = this.state

    return (
      <div className="App">
        <Header  title={title} user={user}/>


        <button onClick={this.changeName}>Change name</button>
        <button onClick={(e) => this.incrementAge(1, e)}>Increment age</button>
        <button onClick={() => this.incrementAge(4)}>Increment age on 4 points</button>

      </div>
    );
  }
}
