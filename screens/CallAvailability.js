import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { debounce } from 'lodash'
import { LinearGradient } from 'expo'
import { colors, fontSizes, gradients } from '../constants/styles'

import RangeSlider from '../components/RangeSlider'
import Checkbox from '../components/Checkbox'
import Button from '../components/Button'
import Link from '../components/Link'

export default class CallAvailability extends React.Component {
  constructor(props) {
    super(props);
    let start = 8, stop = 18;
    this.state = {
      timings: {
        'Monday' : {selected: true, time: [start, stop]},
        'Tuesday' : {selected: true, time: [start, stop]},
        'Wednesday' : {selected: true, time: [start, stop]},
        'Thursday' : {selected: true, time: [start, stop]},
        'Friday' : {selected: true, time: [start, stop]},
        'Saturday' : {selected: true, time: [start, stop]},
        'Sunday': {selected: true, time: [start, stop]},
      }
    };
  }

  onDayToggle(day) {
    let timings = Object.assign(this.state.timings);
    timings[day].selected = !this.state.timings[day].selected
    this.setState({timings});
  }

  onTimingChange(day, values){
    let timings = Object.assign(this.state.timings);
    timings[day].time = values;
    this.setState({timings});
  }

  getFormattedTime(hour) {
    if(hour > 12) return hour-12+':00 PM';
    else if(hour == 12) return '12:00 PM';
    else return hour+':00 AM'
  }

  render() {
    return (
      <View style={styles['container']}>
        <ScrollView>
          <View style={{paddingTop: 24, paddingHorizontal: 16}}>
            <Text style={{color: colors.dark.text, fontSize: fontSizes['x-lg']}}>Enter your availability for video calls</Text>
            <Text style={{color: colors.text, paddingVertical: 8}}>Use the slider to change the timings for each day.</Text>
          </View>
          <View>
            {Object.keys(this.state.timings).map((day, i) => {
              let [start, stop] = this.state.timings[day].time;
              let startTime = this.getFormattedTime(start);
              let stopTime = this.getFormattedTime(stop);
              return (
                <View key={i} style={styles['card']}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Checkbox checkMarkStyle={styles.checkbox} shape='square' title={day} checked={this.state.timings[day].selected} onChange={this.onDayToggle.bind(this, day)}/>
                    <Text style={{marginTop: 7, fontSize: fontSizes['md']}}>{startTime} - {stopTime}</Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 24}}>
                    <RangeSlider min={0} max={23} step={1} start={start} stop={stop} onChange={debounce(this.onTimingChange.bind(this, day), 150)}/>
                  </View>
                </View>
              )
            })}
          </View>
        </ScrollView>
        <LinearGradient colors={gradients['whiteGray']} style={styles['bottomCard']}>
          <Button onPress={() => {}} size='lg'>Continue</Button>
          <Link style={{alignSelf: 'center', marginVertical: 8}} onPress={() => {}}>Skip now, do it later from profile</Link>
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  body: {

  },
  checkbox: {
    transform: [{scale: 0.8}]
  },
  bottomCard: {
    paddingHorizontal: 32,
    paddingTop: 24,
    justifyContent: 'center'
  },
  card: {
    height: 100,
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.separator
  }
})
