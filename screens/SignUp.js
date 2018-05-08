import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal
} from 'react-native';

import { LinearGradient } from 'expo'
import { colors, fontSizes, gradients } from '../constants/styles'
import Dropdown from '../components/Dropdown'
import TextField from '../components/TextField'
import Button from '../components/Button'

import RangeSlider from '../components/RangeSlider'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    }
  }

  static navigationOptions = {
    //TODO
  };

  _onSubmit = () => {
    this.setState({submitted: true}); //TODO ajax response
  }

  render() {
    var bloodGroups = [
      {title: 'A+ve'},
      {title: 'A-ve'},
      {title: 'B+ve'},
      {title: 'B-ve'},
      {title: 'AB+ve'},
      {title: 'AB-ve'},
      {title: 'O+ve'},
      {title: 'O-ve'}
    ]

    const overlay = this.state.submitted ? (
      <View style={styles.overlay}></View>
    ) : null

    return (
      <View style={styles['container']}>
        <LinearGradient
          style={styles['headerCard']}
          colors={gradients.grayWhite}>
          <Text style={styles['title']}>Create a new account</Text>
          <Text style={styles['subtitle']}>Fill up the following fields to finish signup</Text>
          </LinearGradient>
        <View style={styles['form']}>
          <View style={styles['formItem']}>
            <Text style={styles['label']}>BLOOD GROUP</Text>
            <Dropdown title={'bloodgroup'} list={bloodGroups} onSelect={(obj,i) => console.log(obj, i)}></Dropdown>
          </View>
          <View style={styles['formItem']}>
            <Text style={styles['label']}>RESIDENTIAL ADDRESS</Text>
            <TextField placeholder='Enter your address'></TextField>
          </View>

        </View>
        <LinearGradient
         style={styles['bottomCard']}
         colors={gradients.whiteGray}>
          <Button isLoading={this.state.submitted} size='lg' onPress={this._onSubmit} >Create account</Button>
        </LinearGradient>
        {overlay}
      </View>

    )
  }

}
//<Close style={{...StyleSheet.absoluteFillObject, top: 12, left: 12}}/>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: colors.white
  },
  title: {
    fontSize: fontSizes['lg'],
    marginVertical: 4
  },
  subtitle: {
    color: colors.text,
    marginVertical: 4
  },
  headerCard: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 24
  },
  form: {
    flex: 5,
    paddingHorizontal: 24
  },
  bottomCard: {
    flex: 0.8,
    paddingHorizontal: 24,
    paddingVertical: 20,
    justifyContent: 'center'
  },
  formItem: {
    marginVertical: 8
  },
  label: {
    paddingVertical: 4,
    color: colors.text
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    backgroundColor: colors.fadedWhiteText
  }
})
