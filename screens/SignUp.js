import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Keyboard
} from 'react-native';

import { LinearGradient } from 'expo'
import { colors, fontSizes, gradients } from '../constants/styles'
import LeftArrow from '../assets/images/left_arrow.png'
import ProfilePicture from '../assets/images/profile_picture.png'

import Dropdown from '../components/Dropdown'
import TextField from '../components/TextField'
import Button from '../components/Button'
import RangeSlider from '../components/RangeSlider'
import Link from '../components/Link'

import { Actions } from 'react-native-router-flux';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    }
  }

  _onSubmit = () => {
    this.setState({submitted: true}); //TODO ajax response
  }

  _onDateOfBirthSelect = () => {
    Keyboard.dismiss(); //TODO; this is a temporary hack
    Actions.push('date_picker_lightbox');
  }

  _onSetProfilePicture = () => {

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
        <ScrollView style={styles['form']}>
          <TouchableOpacity style={styles.back} onPress={() => {}}>
            <Image source={LeftArrow} style={{marginRight: 8}}/>
            <Text style={{color: colors.blue, fontSize: fontSizes['sm']}}>BACK</Text>
          </TouchableOpacity>
          <View style={styles['formItem']}>
            <Text style={styles['label']}>BLOOD GROUP</Text>
            <Dropdown title={'bloodgroup'} list={bloodGroups} onSelect={(obj,i) => console.log(obj, i)}></Dropdown>
          </View>
          <View style={styles['formItem']}>
            <TextField placeholder='Enter your address' label="RESIDENTIAL ADDRESS"></TextField>
          </View>
          <View style={styles['formItem']}>
            <TextField inputProps={{onFocus: this._onDateOfBirthSelect}} placeholder='Select your DOB' label="DATE OF BIRTH"></TextField>
          </View>
          <View style={[styles['formItem'], {flexDirection: 'row', alignItems: 'center'}]}>
            <Image source={ProfilePicture} style={{marginRight: 8}}/>
            <Link onPress={this._onSetProfilePicture}>Set a profile picture</Link>
          </View>
        </ScrollView>
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
    fontSize: 20,
    color: colors.dark.text,
    marginVertical: 4
  },
  subtitle: {
    color: colors.text,
    marginVertical: 4
  },
  headerCard: {
    paddingHorizontal: 24,
    paddingVertical: 22
  },
  back: {
    flexDirection: 'row',
    marginBottom: 8
  },
  form: {
    paddingHorizontal: 24
  },
  bottomCard: {
    padding: 24,
    justifyContent: 'center'
  },
  formItem: {
    marginVertical: 8
  },
  label: {
    paddingVertical: 4,
    color: colors.text,
    fontSize: 13
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    backgroundColor: colors.fadedWhiteText
  }
})
