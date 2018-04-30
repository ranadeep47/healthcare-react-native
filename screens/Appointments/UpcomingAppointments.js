import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import moment from 'moment'

import { colors, fontSizes, gradients } from '../../constants/styles'

import HorizontalCalendar from '../../components/HorizontalCalendar'
import UserCallSchedule from '../../components/UserCallSchedule'
import Button from '../../components/Button'

export default class UpcomingAppointments extends React.Component {
  constructor(props) {
    super(props);
    //TODO: this usually comes from props via redux/mox state
    this.state = {
      upcomingAppointments: [
        {
          name: "Jeff Mason",
          avatar: "https://randomuser.me/api/portraits/men/18.jpg",
          time: new Date(),
          callType: "Video Call"
        },
        {
          name: "Adeline Woods",
          avatar: "https://randomuser.me/api/portraits/men/19.jpg",
          time: new Date(),
          callType: "Video Call"
        },
        {
          name: "Mark Woods",
          avatar: "https://randomuser.me/api/portraits/men/17.jpg",
          time: new Date(),
          callType: "Video Call"
        }
      ],

      date: moment(new Date())
    }
    this._onDateChange = this._onDateChange.bind(this);
  }

  _onDateChange(date) {
    console.log(date);
  }

  _onPressStartVideoCall(item) {

  }

  _renderAppointments = ({item, index}) => {
    let firstName = item.name.split(' ').shift();
    return (
      <View style={styles.card}>
        <UserCallSchedule data={item} />
        <Button style={{marginHorizontal: 32, marginBottom: 16}} size='lg' onPress={this._onPressStartVideoCall.bind(this, item)}>
          Start video call with {firstName}
        </Button>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 0}}>
          <HorizontalCalendar startDate={new Date()} prev={1} next={14} onSelect={this._onDateChange}/>
          <View style={{backgroundColor: colors.background, paddingHorizontal: 16, paddingVertical: 32}}>
            <Text style={{color: colors.dark.text}}>
              {this.state.upcomingAppointments.length} appointments on {this.state.date.format('Do MMM, YY')}
            </Text>
          </View>
        </View>
        <FlatList
          keyExtractor={(item, index) => 'key'+index}
          style={styles.list}
          data={this.state.upcomingAppointments}
          renderItem={this._renderAppointments}>
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1
  },
  card: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderColor: colors.separator,
    padding: 16
  }
})
