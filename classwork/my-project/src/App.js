import React from 'react'
import './App.scss';

export default class App extends React.Component {
  constructor() {
    super()

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

  // state = {
  //   title: 'Some title',
  //   user: {
  //     name: 'Giya',
  //     age: 32,
  //     email: ''
  //   }
  // }

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
        <div>{title}</div>
        <div>{user.name}</div>
        <div>{user.age}</div>
        <div>{user.test.value}</div>

        {user.email.length > 0 && <div>{user.email}</div>}

        {user.email.length > 0 ? <div>{user.email}</div> : 'No emails'}

        {/* <div>----</div>
        <div>{undefined}</div>
        <div>{null}</div>
        <div>{true}</div>
        <div>{false}</div>
        <div>{0}</div> */}

        <button onClick={() => this.setState({title: 'New title'})}>Change title</button>
        <button onClick={this.changeName}>Change name</button>
        <button onClick={(e) => this.incrementAge(1, e)}>Increment age</button>
        <button onClick={() => this.incrementAge(4)}>Increment age on 4 points</button>
        <button onClick={() => this.setState((state) => ({user: {...state.user, age: state.user.age + 1 }}),() => console.log('age was changed') )}>Increment second age</button>

        <button onClick={() => this.setState({user: {...this.state.user, test: {...this.state.user.test, value: this.state.user.test.value + 1}}})}>Increment value</button>
        {/* <button onClick={() => this.state.title = "New title2"}>Change title</button> */}
        {/* <button onClick={() => }>Increment age</button> */}
      </div>
    );
  }
}
