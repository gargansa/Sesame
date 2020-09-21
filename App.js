import React, { Component } from 'react';
import './App.css';
import { Header, Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import * as Crypto from 'expo-crypto';


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
    this.saveData = this.saveData.bind(this)
    this.getAllData = this.getAllData.bind(this)
    this.getData = this.getData.bind(this)
    this.removeData = this.removeData.bind(this)
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
    //console.log(encrypt('hashtag', this.state.input))
    this.saveData('pin', this.state.input);
    console.log('pin submitted')
    this.getData('pin')
    this.clearPin()
  }

  saveData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      this.getAllData();
    } catch (e) {
      console.log(e);
    }
  };

  getAllData = () => {
    AsyncStorage.getAllKeys().then((keys) => {
      return AsyncStorage.multiGet(keys)
        .then((result) => {
          console.log(result);
        }).catch((e) => {
          console.log(e);
        });
    });
  }

  getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if (value !== null) {
        console.log(value)
      }
    } catch (e) {
      // error reading value
    }
  }


  removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch (e) {
      // remove error
    }
    console.log('Done.')
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









