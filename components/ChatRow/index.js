import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { LinearGradient } from 'expo';

import moment from 'moment'
import { colors, fontSizes, gradients } from '../../constants/styles'
import Avatar from '../Avatar'


//props.onSelect, props.onAvatarSelect
//chat = { name, avatar, lastMessage, unread: [], }
const ChatRow = (props) => {
  const {data} = props;
  let unread = data.unread.length ? (
    <LinearGradient style={[styles.gradient, {width: 24, height: 24, borderRadius: 24/2, justifyContent: 'center'}]} colors={gradients.greenBlue}>
      <Text style={{color: colors.white, fontFamily: 'circularstd-medium', textAlign: 'center'}}>
        {data.unread.length}
      </Text>
    </LinearGradient>
  ) : null

  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity style={styles.left} onPress={props.onAvatarSelect}>
          <Avatar source={data.avatar} />
        </TouchableOpacity>
        <View style={styles.center}>
          <Text style={{color: colors.dark.text, fontSize: fontSizes['md'], marginVertical: 2}}>{data.name}</Text>
          <Text numberOfLines={1} style={{color: colors.text, fontSize: fontSizes['sm']}}>
            {data.lastMessage.message}
          </Text>
        </View>
        <View style={[styles.right, {justifyContent: 'space-between'}]}>
          <Text style={{fontSize: 13, color: colors.text}}>
            {"9:23 PM"}
          </Text>
          {unread}
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.separator,
    padding: 8
  },
  wrapper: {
    flexDirection: 'row',
    flex: 1
  },
  left: {
    flex: 1.15,
    paddingHorizontal: 4
  },
  center: {
    flex: 4,
    marginHorizontal: 4,
    marginVertical: 8
  },
  right: {
    flex: 1.1,
    marginTop: 8,
    alignItems: "flex-end"
  }
})

export default ChatRow
