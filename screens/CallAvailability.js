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

  static navigationOptions = {
    //TODO
  };

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
                    <Checkbox shape='square' title={day} checked={this.state.timings[day].selected} onChange={this.onDayToggle.bind(this, day)}/>
                    <Text style={{marginTop: 7, fontSize: fontSizes['md']}}>{startTime} - {stopTime}</Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 24}}>
                    <RangeSlider min={0} max={23} step={1} start={start} stop={stop} onChange={debounce(this.onTimingChange.bind(this, day), 150)}/>
                  </View>
                </View>
              )
            })}
          </View>
          <View>
            <LinearGradient colors={gradients['whiteGray']} style={styles['bottomCard']}>
              <Button size='lg'>Continue</Button>
            </LinearGradient>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white
  },
  body: {
    flex: 4,
  },
  bottomCard: {
    flex: 0.75,
    paddingHorizontal: 32,
    paddingVertical: 20,
    justifyContent: 'center'
  },
  card: {
    height: 100,
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.separator
  }
})
