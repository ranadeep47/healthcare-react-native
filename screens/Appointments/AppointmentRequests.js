import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';

import { colors, fontSizes, gradients } from '../../constants/styles'

import UserCallSchedule from '../../components/UserCallSchedule'

export default class AppointmentRequests extends React.Component {
  constructor(props) {
    super(props);
    //TODO: these should come from global state as props
    let now = moment(new Date());
    this.state = {
      requests: [
        {
          name: "Adeline Woods",
          avatar: "https://randomuser.me/api/portraits/men/4.jpg",
          time: now,
          callType: "Video Call",
          status: 'Pending'
        },
        {
          name: "Mark Woods",
          avatar: "https://randomuser.me/api/portraits/men/5.jpg",
          time: now,
          callType: "Video Call",
          status: 'ReScheduled',
          reScheduledTime: moment(now).add(30, 'minutes')
        }
      ]
    }
  }

  _onAction = (action, data) => {
    console.log(action);
    if(action === 'PROPOSE_TIMINGS') Actions.push('schedule_picker_lightbox');
  }

  _renderAppointments = ({item, index}) => {
    return (
      <View style={styles.card}>
        <UserCallSchedule data={item} onAction={this._onAction}/>
      </View>
    )
  }

  render() {
    return (
      <View style={styles['container']}>
        <FlatList
          keyExtractor={(item, index) => 'key'+index}
          style={styles.list}
          data={this.state.requests}
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
    borderColor: colors.separator
  },
  list:{
    flex: 1
  }
})
