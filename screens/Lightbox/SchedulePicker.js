import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
  } from 'react-native';

import { colors, fontSizes } from '../../constants/styles'
import Lightbox from './BaseLightbox'

import ToggleButton from '../../components/ToggleButton'
import HorizontalCalendar from '../../components/HorizontalCalendar'
import Button from '../../components/Button'

export default class SchedulePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }

  closeModal = ()=> {
    this.setState({visible: false})
  }

  render() {
    return (
      <Lightbox align="bottom" visible={this.state.visible}>
        <View>
          <Text style={styles.title}>Select your convenient date and time </Text>
          <View>
            <HorizontalCalendar style={styles.calendar} prev={1} next={14} startDate={new Date} onSelect={() => {}} />
            <Text style={[styles.smallText, {textAlign: 'center', paddingVertical: 8}]}>Scroll to move through the dates</Text>
          </View>
          <View style={{padding: 16}}>
            <Text style={[styles.smallText ,{marginVertical: 16}]}>SELECT A TIME SLOT</Text>
            <View style={styles.timingsContainer}>
              {['06:30PM', '07:00PM', '07:30PM', '08:00PM', '08:30PM', '09:30PM'].map((time, i) => {
                return (<ToggleButton style={{marginRight: 8, marginTop: 4}} key={i} onChange={() => {}}>{time}</ToggleButton>)
              })}
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <Button style={{marginVertical: 8}} onPress={() => {}} size="lg">Send new timing details to patient</Button>
            <Button style={{marginVertical: 8}} onPress={this.closeModal} background="transparent" size="lg">Cancel</Button>
          </View>
        </View>
      </Lightbox>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1
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
  }
})
