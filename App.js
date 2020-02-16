import React, { Component } from 'react';
import Nav from './Nav/Nav.js';

class App extends Component {
  state = {//initialize state
    title:"Sesame"
  }
  constructor() {
    super()
    console.log('Constructor Called')
    //this.state.color.s = this.randomColor()//chooses the random color happens before the component is displayed

    
  }

  componentDidMount() {
    //perfect place to set state runs once after component is built
    this.setState(previousState => ({
      //set state function
    }
    ))
  }

  componentWillUpdate() {
    console.log('componentWillUpdate Called')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate Called')
  }

  render() {
    console.log('render Called')

    return (
      <div>
        <Nav title={this.state.title}/>
      </div>
    );
  }





  //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Functions that are not lifecycle
  functionToSetState(value) {
    this.setState(previousState => ({
      title: value
    }
    ))
  }

}

export default App;
