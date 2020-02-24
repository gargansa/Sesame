import React, { Component } from 'react';
import './App.css';
import { Header, Button } from 'react-native-elements';



class App extends Component {
  state = {//initialize state
    title: "Sesame",

  }
  constructor() {
    super()
    console.log('Constructor Called')
    this.state.input = ''
    //this.state.color.s = this.randomColor()//chooses the random color happens before the component is displayed
    this.nextInput = this.nextInput.bind(this)
    this.submitPin = this.submitPin.bind(this)
    this.clearPin = this.clearPin.bind(this)
  }

  componentDidMount() {
    //perfect place to set state runs once after component is built
    this.setState(previousState => ({
      //set state function
    }
    ))
  }


  nextInput(value) {
    this.setState({ input: this.state.input += value });
    console.log(this.state.input)
  }

  clearPin() {
    this.setState({ input: this.state.input = '' });
    console.log('pin cleared')
  }

  submitPin() {
    
    console.log('pin submitted')
    this.clearPin()
  }


  render() {

    return (

      <div className="container">
        <div className="center">
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Sesame', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <div className="buttons">
            <div className="buttonRow">
              <Button
                title="1"
                containerStyle={{ width: '33%', margin: '1px' }}
                onPress={() => this.nextInput('1')}
              />
              <Button
                title="2"
                containerStyle={{ width: '33%', margin: '1px' }}
                onPress={() => this.nextInput('2')}
              />
              <Button
                title="3"
                containerStyle={{ width: '33%', margin: '1px' }}
                onPress={() => this.nextInput('3')}
              />
            </div>

            <div className="buttonRow">
              <Button
                title="4"
                containerStyle={{ width: '33%', margin: '1px' }}
                onPress={() => this.nextInput('4')}
              />
              <Button
                title="5"
                containerStyle={{ width: '33%', margin: '1px' }}
                onPress={() => this.nextInput('5')}
              />
              <Button
                title="6"
                containerStyle={{ width: '33%', margin: '1px' }}
                onPress={() => this.nextInput('6')}
              />
            </div>

            <div className="buttonRow">
              <Button
                title="7"
                containerStyle={{ width: '33%', margin: '1px' }}
                onPress={() => this.nextInput('7')}
              />
              <Button
                title="8"
                containerStyle={{ width: '33%', margin: '1px' }}
                onPress={() => this.nextInput('8')}
              />
              <Button
                title="9"
                containerStyle={{ width: '33%', margin: '1px' }}
                onPress={() => this.nextInput('9')}
              />
            </div>

            <div className="buttonRow">
              <Button
                title="Clear"
                containerStyle={{ width: '33%', margin: '1px' }}
                onPress={() => this.clearPin()}
              />
              <Button
                title="0"
                containerStyle={{ width: '33%', margin: '1px' }}
                onPress={() => this.nextInput('0')}
              />
              <Button
                title="Enter"
                containerStyle={{ width: '33%', margin: '1px' }}
                onPress={() => this.submitPin()}
              />
            </div>
          </div>
        </div>
      </div>
    );


  }

}

export default App