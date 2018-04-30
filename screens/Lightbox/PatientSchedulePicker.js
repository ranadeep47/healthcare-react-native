import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
  } from 'react-native';

import { colors, fontSizes } from '../../constants/styles'
import Lightbox from './BaseLightbox'

import AvailableIcon from '../../assets/images/available.png'

import ToggleButton from '../../components/ToggleButton'
import HorizontalCalendar from '../../components/HorizontalCalendar'
import Button from '../../components/Button'

export default class PatientSchedulePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }

  _onBookNow = () => {

  }

  closeModal = () => {
    this.setState({visible: false})
  }

  render() {
    return (
      <Lightbox vertical={0.92} align="bottom" visible={this.state.visible}>
        <View style={styles.container}>

          <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: colors.blue, padding: 8}}>
            <View style={{flex: 0.75}}>
              <Image source={AvailableIcon} />
            </View>
            <View style={{flex: 4, marginRight: 8}}>
              <Text style={{color: colors.white, fontSize: fontSizes['sm']}}>Dr. Mamie Wagner is available for immediete consultation.</Text>
            </View>
            <View style={{flex: 2}}>
              <Button size="sm" background={colors.dark.text} onPress={this._onBookNow}>Book now</Button>
            </View>
          </View>

          <Text style={styles.title}>Select your convenient date and time </Text>

          <View>
            <HorizontalCalendar style={styles.calendar} prev={1} next={14} startDate={new Date} onSelect={() => {}} />
            <Text style={[styles.smallText, {textAlign: 'center', paddingVertical: 8}]}>Scroll to move through the dates</Text>
          </View>
          <View style={{marginHorizontal: 32, marginVertical: 16}}>
            <Text style={[styles.smallText ,{marginVertical: 16}]}>SELECT A TIME SLOT</Text>
            <View style={styles.timingsContainer}>
              {['06:30PM', '07:00PM', '07:30PM', '08:00PM', '08:30PM', '09:30PM'].map((time, i) => {
                return (<ToggleButton style={{marginRight: 8, marginTop: 8}} key={i} onChange={() => {}}>{time}</ToggleButton>)
              })}
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <Button size="md" style={[styles.smallButton, {marginRight: 8}]}>
                Video Call {"\n"}
                <Text style={{fontSize: 13, color: colors.lightWhite}}>pay 30$</Text>
              </Button>
              <Button size="md" style={[styles.smallButton, {marginLeft: 8}]}>
                Audio Call {"\n"}
                <Text style={{fontSize: 13, color: colors.lightWhite}}>pay 20$</Text>
              </Button>
            </View>
            <View style={[styles.row]}>
              <Button size="lg" background="transparent" style={styles.largeButton}>
                Chat with the doctor {"\n"}
                <Text style={{fontSize: 13, color: colors.blue}}>pay 10$</Text>
              </Button>
            </View>
          </View>
        </View>
      </Lightbox>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: colors.dark.text,
    fontSize: fontSizes['lg'],
    lineHeight: 24,
    textAlign: 'center',
    marginVertical: 24
  },
  calendar: {
    backgroundColor: colors.background
  },
  smallText: {
    color: colors.text,
    fontSize: 13
  },
  timingsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  buttonsContainer: {
    marginHorizontal: 32,
    marginVertical: 16
  },
  smallButton: {
    flex: 1,
    paddingVertical: 8
  },
  largeButton: {
    flex: 1,
    paddingVertical: 8
  },
  row: {
    flexDirection: 'row',
    marginVertical: 8
  },
})
