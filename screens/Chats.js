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

import { colors, fontSizes } from '../constants/styles'

import Button from '../components/Button'
import ChatRow from '../components/ChatRow'
import FeedbackCard from '../components/FeedbackCard'

import BottomNavigation from '../components/BottomNavigation'

export default class Chats extends React.Component {
  constructor(props) {
    super(props);
    let now = moment(new Date());

    this.state = {
      chats : [
        {
          name: 'Raymond Romero',
          avatar: 'https://randomuser.me/api/portraits/men/6.jpg',
          lastMessage: {message: "Cardio science & radio labs bla bla", createdAt: moment(now).subtract(30, 'minutes')},
          unread: [{message: "bla bla 1", createdAt: new Date()}],
        },
        {
          name: 'Russell Clarke',
          avatar: 'https://randomuser.me/api/portraits/men/8.jpg',
          lastMessage: {message: "Cardio science & radio labs bla bla", createdAt: moment(now).subtract(1, 'day')},
          unread: [{message: "bla bla 1", createdAt: new Date()}, {message: "bla bla 1", createdAt: new Date()}],
        },
        {
          name: 'Lola Fox',
          avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
          lastMessage: {message: "Cardio science & radio labs bla bla", createdAt: moment(now).subtract(2, 'months')},
          unread: [],
        }
      ]
    }
  }

  _onSelect = (item) => {
    console.log(item)
  }

  _onAvatarSelect = (item) => {
    Actions.push("user_profile_lightbox", {data: item});
  }

  _renderItem = ({item, index}) => {
    return (
      <ChatRow data={item} onSelect={this._onSelect.bind(this, item)} onAvatarSelect={this._onAvatarSelect.bind(this, item)}/>
    )
  }

  render() {
    return (
      <View style={styles['container']}>
        <FlatList
          keyExtractor={(item, index) => 'key'+index}
          style={styles.list}
          data={this.state.chats}
          renderItem={this._renderItem}/>
        <BottomNavigation type="doctor" active={1} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  },

  list: {
    flex: 1
  }
})
