import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import moment from 'moment'

import { colors, fontSizes } from '../../constants/styles'

import Avatar from '../../components/Avatar'
import Button from '../../components/Button'
import VideoCallIcon from '../../assets/images/VideoCall.png'
import TimeIcon from '../../assets/images/TimeIcon.png'

// {name, avatar, callType, time, status, reScheduledTime}
//TODO: depending on the prop status rendering is affected.
export default class UserCallSchedule extends React.Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }

    _onAction(Action) {
      this.props.onAction(Action, this.props.data);
    }

    _formateTime(time) {
      return moment(time).format("hA, ddd, Do MMMM, YY")
    }

    _renderFooter() {
      const {data} = this.props;
      if(data.status && data.status === 'ReScheduled') {
        return (
          <View style={[styles.waiting]}>
            <Text style={{color: colors.blue, fontSize: fontSizes['sm']}}>Waiting for the patient to accept the change</Text>
          </View>
        )
      }

      else if (data.status && data.status === 'Pending') {
        return (
          <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8}}>
              <Button onPress={this._onAction.bind(this, "REJECT_REQUEST")} size="md" border={colors.red} background="transparent">
                Reject Request
              </Button>
              <Button onPress={this._onAction.bind(this, "ACCEPT_REQUEST")} size="md" background="transparent">
                Accept Request
              </Button>
            </View>
            <View style={{marginVertical: 8}}>
              <Button onPress={this._onAction.bind(this, "PROPOSE_TIMINGS")} size="lg" background="transparent">
                Propose alternative timings
              </Button>
            </View>
          </View>
        )
      }
    }

    render() {
      const {data} = this.props;

      let status = data.status && data.status !== 'ReScheduled' ? (
        <View style={{flexDirection: 'row', marginRight: -16}}>
          <View style={styles.triangle}></View>
          <View style={styles.ribbon}>
            <Text style={{fontSize: 13, color: colors.blue}}>{data.status}</Text>
          </View>
        </View>
      ) : null;

      let specialisation = data.specialisation ? <Text style={[styles.text, {marginHorizontal: 0, width: 200, marginVertical: 8}]}>{data.specialisation}</Text> : null

      let cancelledTiming = data.status && data.status === 'ReScheduled' ? (
        <View style={{flexDirection: 'row', marginVertical: 8}}>
          <Image source={TimeIcon}/><Text style={[styles.text, {color: colors.lightText, textDecorationLine: 'line-through', textDecorationStyle: 'solid'}]}>
            {this._formateTime(data.reScheduledTime)}
          </Text>
        </View>
      ) : null

      let footer = this._renderFooter();

      return (
        <View style={[styles.container, this.props.style]}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <View style={{flex:2}}>
              <Avatar source={data.avatar}/>
            </View>
            <View style={{flex: 6}}>

              <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={styles.name}>{data.name}</Text>
                  {specialisation}
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

            </View>
          </View>
          <View style={{marginTop: 8}}>
            {footer}
          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white
  },
  name: {
    fontSize: fontSizes['md'],
    color: colors.dark.text,
    marginVertical: 8
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
    zIndex: 10
  },
  ribbon: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.blue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 30
  },
  waiting: {
    borderRadius: 4,
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.background,
    borderColor: colors.blue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
