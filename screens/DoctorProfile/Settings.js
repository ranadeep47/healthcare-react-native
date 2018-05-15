import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

import moment from 'moment'
import { colors, fontSizes, gradients } from '../../constants/styles'

import Switch from '../../components/Switch'
import Checkbox from '../../components/Checkbox'
import TextField from '../../components/TextField'
import BottomNavigation from '../../components/BottomNavigation'

import Arrow from '../../assets/images/right_arrow.png'

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  _onSwitchOnDemandConsultation = (state) => {
    //true / false
  }

  _onToggleAudioCall = (state) => {

  }

  _onToggleVideoCall = (state) => {

  }

  _onToggleChat = (state) => {

  }

  _onConfig = ()  => {

  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{marginBottom: 72}} contentInset={{top: 0, bottom: 64}}>
          <View style={{padding: 32}}>
            <Text style={styles.heading}>Turn on immedite on-demand consultation</Text>
            <Text style={styles.text}>Turning on immediate consultation will allow patients to approach you directly </Text>
            <Switch style={{marginVertical: 8}} onSwitch={this._onSwitchOnDemandConsultation} on={false} />
          </View>
          <View style={{paddingHorizontal: 32}}>
            <Text style={styles.heading}>On which modes of communication are you available?</Text>
            <Checkbox style={{paddingVertical: 16}} shape="circle" onChange={this._onToggleAudioCall} checked={true} title="Audio Call"/>
            <TextField label="How much is your consulting fees for 30mins" placeholder="Enter amount in USD" />
          </View>
          <TouchableOpacity onPress={this._onConfig} style={styles.config}>
            <Text style={styles.heading}>Configure settings for audio call</Text>
            <Image source={Arrow} />
          </TouchableOpacity>
          <View>
            <Checkbox style={[styles.checkbox, {borderTopWidth: 1}]} shape="circle" onChange={this._onToggleVideoCall} checked={false} title="Video Call"/>
            <Checkbox style={styles.checkbox} shape="circle" onChange={this._onToggleChat} checked={false} title="Chat"/>
          </View>
        </ScrollView>
        <BottomNavigation type="doctor" active={2} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  heading: {
    color: colors.dark.text,
    marginVertical: 8
  },
  text: {
    marginVertical: 4,
    fontSize: fontSizes['md'],
    color: colors.text
  },
  config: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginVertical: 16,
    backgroundColor: colors.dark.gray
  },
  checkbox: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderBottomWidth: 1,
    borderColor: colors.separator
  }
})
