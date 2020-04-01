//imports react
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

//imports components thirds

//import components
import HotelView from './screens/HotelView/index'

//import styles
import {
  colors
} from './styles/styles'

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <HotelView />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg
  },
})
