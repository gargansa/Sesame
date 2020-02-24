import React, { Component } from 'react';
import './App.css';
import { Header, ThemeProvider, ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';



class App extends Component {
  state = {//initialize state
    title: "Sesame",

    list: [
      {
        name: 'A',
        quantity: '5',
      },
      {
        name: 'B',
        quantity: '1',
      },
      {
        name: 'C',
        quantity: '1',
      },
      {
        name: 'D',
        quantity: '3',
      },
      {
        name: 'E',
        quantity: '1',
      },
      {
        name: 'F',
        quantity: '1',
      },
      {
        name: 'G',
        quantity: '2',
      },
      {
        name: 'H',
        quantity: '1',
      },
      {
        name: 'I',
        quantity: '1',
      },
      {
        name: 'J',
        quantity: '1',
      },
      {
        name: 'K',
        quantity: '1',
      },
      {
        name: 'L',
        quantity: '1',
      },
      {
        name: 'M',
        quantity: '1',
      },
      {
        name: 'N',
        quantity: '1',
      },
      {
        name: 'O',
        quantity: '1',
      },
      {
        name: 'P',
        quantity: '1',
      },
      {
        name: 'Q',
        quantity: '1',
      },
      {
        name: 'R',
        quantity: '1',
      },
      {
        name: 'S',
        quantity: '1',
      },
      {
        name: 'T',
        quantity: '1',
      },
      {
        name: 'U',
        quantity: '1',
      },
      {
        name: 'V',
        quantity: '1',
      },
      {
        name: 'W',
        quantity: '1',
      },
      {
        name: 'X',
        quantity: '1',
      },
      {
        name: 'Y',
        quantity: '1',
      },
      {
        name: 'Z',
        quantity: '1',
      },
    ]
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
      <div className="container">
        <div className="center">
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Sesame', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />

          {
            this.state.list.map((l, i) => (
              <ListItem
                key={i}
                title={l.name}
                Component={TouchableScale}
                friction={90}
                tension={100}
                activeScale={0.9}
                titleStyle={{ color: 'green', fontWeight: 'bold', fontSize: '40px' }}
                badge={{ value: l.quantity, textStyle: { fontSize: '35px', color: 'orange' }, badgeStyle: { backgroundColor: 'red', borderRadius: '50%', width: '40px', height: '40px' } }}
                bottomDivider
                chevron={{ color: 'pink', size: "40px" }}
                onPress={() => console.log(l.name)}
              />
            ))
          }
        </div>
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

export default List;

