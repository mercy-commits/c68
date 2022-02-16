import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Transaction from './screens/transaction'
import Search from './screens/search'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends Component {
  render(){
    return (
      <View >
        <Text>Open up App.js to start working on your app!</Text>
        <AppContainer/>
      </View>
    );
  }
  }
  
const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:Transaction},
  Search:{screen:Search}
})

const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
