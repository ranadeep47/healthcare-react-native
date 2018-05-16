import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

import moment from 'moment'
import { colors, fontSizes, gradients } from '../../constants/styles'

import VideoCallIcon from '../../assets/images/VideoCall.png'
import TimeIcon from '../../assets/images/TimeIcon.png'

import UserCallSchedule from '../../components/UserCallSchedule'
import Button from '../../components/Button'
import Avatar from '../../components/Avatar'
import Alert from '../../components/Alert'
import { Actions } from 'react-native-router-flux';

export default class RequestedBookings extends React.Component {
  constructor(props) {
    super(props);
    let now = moment(new Date());
    this.state = {
      requests: [
        {
          name: "Dr. Adeline Woods",
          avatar: "https://randomuser.me/api/portraits/men/4.jpg",
          time: now,
          callType: "Video Call",
          status: 'Pending',
          specialisation: "Cardio sciences & cardio vascular surgey"
        },
        {
          name: "Dr. Ramesh Subramaniam",
          avatar: "https://randomuser.me/api/portraits/men/5.jpg",
          time: now,
          callType: "Video Call",
          status: 'ReScheduled',
          reScheduledTime: moment(now).add(30, 'minutes'),
          specialisation: "Cardio sciences & cardio vascular surgey"
        }
      ]
    }
  }

  _formateTime(time) {
    return moment(time).format("hA, ddd, Do MMMM, YY")
  }

  _onAction(action, data) {
    // Actions.push('patient_cancel_appointment_lightbox')
  }

  _renderFooter(data) {
    if(data.status && data.status === 'ReScheduled') {
      return (
        <View>
          <Text style={{color: colors.dark.text}}>Would you like to accept the change in timings as suggested by the doctor?</Text>
          <View style={{flexDirection: 'row', flex: 1, marginVertical: 16}}>
            <Button size="md" onPress={this._onAction.bind(this, "ACCEPT_REQUEST")} style={{}}>Accept new timings</Button>
            <Button size="md" onPress={this._onAction.bind(this, "REJECT_REQUEST")} style={{marginLeft: 16}} background="transparent" border={colors.red}>Cancel</Button>
          </View>
        </View>
      )
    }

    else if (data.status && data.status === 'Pending') {
      return (
        <Button onPress={this._onAction.bind(this, "PROPOSE_TIMINGS", data)} size="lg" background="transparent" border={colors.red}>
          Cancel appointment request
        </Button>
      )
    }
  }

  _renderBookings = ({item, index}) => {
    const data = item;

    let status = (
      <View style={styles.statusRibbon}>
        <View style={[styles.triangle, {borderColor: data.status === "ReScheduled" ? colors.orange : colors.blue }]}></View>
        <View style={[styles.ribbon, {
          borderColor: data.status === "ReScheduled" ? colors.orange : colors.blue,
          backgroundColor: data.status === "ReScheduled" ? colors.lightOrange : colors.background}]}>
          <Text style={{fontSize: 13, color: data.status === "ReScheduled" ? colors.orange : colors.blue}}>{data.status === "ReScheduled" ? "Accept Changes" : data.status}</Text>
        </View>
      </View>
    )

    let cancelledTiming = data.status && data.status === 'ReScheduled' ? (
      <View style={{flexDirection: 'row', marginVertical: 8}}>
        <Image source={TimeIcon}/><Text style={[styles.text, {color: colors.lightText, textDecorationLine: 'line-through', textDecorationStyle: 'solid'}]}>
          {this._formateTime(data.reScheduledTime)}
        </Text>
      </View>
    ) : null

    let footer = this._renderFooter(data);

    return (
      <View style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 8}}>
          <Avatar source={data.avatar}/>
          <View style={{marginHorizontal: 16}}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.specialisation}>{data.specialisation}</Text>
          </View>
          {status}
        </View>
        <View style={{flexDirection: 'row', marginVertical:8}}>
          <Image source={VideoCallIcon}/><Text style={styles.text}>{data.callType}</Text>
        </View>
        {cancelledTiming}
        <View style={{flexDirection: 'row', marginVertical: 8}}>
          <Image source={TimeIcon}/><Text style={styles.text}>{this._formateTime(data.time)}</Text>
        </View>
        <View style={{marginTop: 8}}>
          {footer}
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Alert text="Success! Let’s wait for the doctor to accept your appointment request" />
       <FlatList
        keyExtractor={(item, index) => 'key'+index}
        style={styles.list}
        data={this.state.requests}
        renderItem={this._renderBookings}>
      </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  list: {
    flex: 1
  },
  card: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.separator,
  },
  name: {
    fontSize: fontSizes['md'],
    color: colors.dark.text,
    zIndex: 10,
    elevation: 10,
    width: 150
  },
  specialisation: {
     width: 160,
     marginVertical: 4,
     color: colors.text
  },
  text: {
    marginHorizontal: 8,
    color: colors.dark.text,
    fontSize: fontSizes['sm']
  },
  triangle: {
    left: 13,
    top: 5,
    width: 24,
    height: 24,
    backgroundColor: colors.white,
    borderColor: colors.blue,
    borderTopWidth: 1,
    borderRightWidth: 1,
    transform: [{rotate: '45deg'}],
    zIndex: 1
  },
  ribbon: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.blue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingRight: 16,
    paddingLeft: 28
  },
  statusRibbon: {
    flexDirection: 'row',
    marginRight: -16,
    position: 'absolute',
    right: 0,
    top: -2
  }
})
