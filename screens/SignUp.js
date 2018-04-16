import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { LinearGradient } from 'expo'
import { colors, fontSizes, gradients } from '../constants/styles'
import Dropdown from '../components/Dropdown'
import TextField from '../components/TextField'
import Button from '../components/Button'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    //TODO
  };

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

    return (
      <View style={styles['container']}>
        <View>
          <LinearGradient
            style={styles['headerCard']}
            colors={gradients.grayWhite}>
            <Text style={styles['title']}>Create a new account</Text>
            <Text style={styles['subtitle']}>Fill up the following fields to finish signup</Text>
            </LinearGradient>
        </View>
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
        <View>
          <LinearGradient
           style={styles['footerCard']}
           colors={gradients.whiteGray}>
            <Button size='lg' onPress={() => {}} >Create account</Button>
          </LinearGradient>
        </View>
      </View>

    )
  }

}

const styles = StyleSheet.create({
  container: {

  },

  headerCard: {
    paddingVertical: 36,
    paddingHorizontal: 24
  },
  title: {
    fontSize: fontSizes['lg'],
    marginVertical: 4
  },
  subtitle: {
    color: colors.text,
    marginVertical: 4
  },
  form: {
    padding: 24,
    backgroundColor: colors.white
  },
  formItem: {
    marginVertical: 8
  },
  label: {
    paddingVertical: 4,
    color: colors.text
  },
  footerCard: {
    paddingHorizontal: 24,
    paddingVertical: 12
  }
})
