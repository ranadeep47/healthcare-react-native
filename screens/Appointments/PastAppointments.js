import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import moment from 'moment';

import { colors, fontSizes, gradients } from '../../constants/styles'

import UserCallSchedule from '../../components/UserCallSchedule'

export default class PastAppointments extends React.Component {
  constructor(props) {
    super(props);
    //TODO: these should come from global state as props
    let now = moment(new Date());
    this.state = {
      pastAppointments: [
        {
          name: "Adeline Woods",
          avatar: "https://randomuser.me/api/portraits/men/13.jpg",
          time: new Date(),
          callType: "Video Call",
          startTime: moment(now).subtract(20, 'minutes'),
          endTime: now
        },
        {
          name: "Mark Woods",
          avatar: "https://randomuser.me/api/portraits/men/14.jpg",
          time: new Date(),
          callType: "Video Call",
          startTime: moment(now).subtract(20, 'minutes'),
          endTime: now
        }
      ]
    }
  }

  _renderAppointments = ({item, index}) => {
    return (
      <View style={styles.card}>
        <UserCallSchedule data={item} />
        <View style={styles.timingWrapper}>
          <Text style={{color: colors.blue}}>{item.startTime.format("h:mm A")}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.circle}></View>
            <View style={styles.dashedLine}>
            </View>
            <View style={styles.circle}></View>
          </View>
          <Text style={{color: colors.blue}}>{item.endTime.format("h:mm A")}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: 16, marginTop: -8}}>
          <Text style={{fontSize: 13, color: colors.text}}>{moment.duration(item.endTime.diff(item.startTime)).humanize()}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles['container']}>
        <FlatList
          keyExtractor={(item, index) => 'key'+index}
          style={styles.list}
          data={this.state.pastAppointments}
          renderItem={this._renderAppointments}>
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  card: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.separator,
    paddingHorizontal: 16,
    paddingTop: 16
  },
  list:{
    flex: 1
  },
  timingWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  circle: {
    width: 9,
    height: 9,
    borderRadius: 9/2,
    backgroundColor: colors.text
  },
  dashedLine: {
    width: 150,
    height: 1,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    borderRadius: 1,
    borderColor: colors.text,
    paddingTop: 4
  }
})
