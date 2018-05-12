import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { colors, fontSizes } from '../constants/styles'

import Avatar from '../components/Avatar'
import Attachment from '../assets/images/attachment.png'
import Send from '../assets/images/send_message.png'

//TODO: Fix the keyboard scroll issue : https://medium.freecodecamp.org/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580
export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {message: "Hey my sound isnt working", time: "10:20 AM", avatar: "https://randomuser.me/api/portraits/men/18.jpg", sender: "Jeff Mason"},
        {message: "That is so weird I can’t hear you at all.", time: "10:25 AM", avatar: "https://randomuser.me/api/portraits/men/19.jpg", sender: "Adeline Woods"},
        {message: "Can you hear me?", time: "10:22 AM", avatar: "https://randomuser.me/api/portraits/men/18.jpg", sender: "Jeff Mason"},
        {message: "Hey my sound isnt working", time: "10:20 AM", avatar: "https://randomuser.me/api/portraits/men/18.jpg", sender: "Jeff Mason"},
        {message: "Can you hear me?", time: "10:22 AM", avatar: "https://randomuser.me/api/portraits/men/18.jpg", sender: "Jeff Mason"},
        {message: "I will message john about this. He will fix it!", time: "10:25 AM", avatar: "https://randomuser.me/api/portraits/men/19.jpg", sender: "Adeline Woods"},
        {message: "That is so weird I can’t hear you at all.", time: "10:25 AM", avatar: "https://randomuser.me/api/portraits/men/19.jpg", sender: "Adeline Woods"},
        {message: "I will message john about this. He will fix it!", time: "10:25 AM", avatar: "https://randomuser.me/api/portraits/men/19.jpg", sender: "Adeline Woods"},
        {message: "Hey my sound isnt working", time: "10:20 AM", avatar: "https://randomuser.me/api/portraits/men/18.jpg", sender: "Jeff Mason"},
        {message: "Can you hear me?", time: "10:22 AM", avatar: "https://randomuser.me/api/portraits/men/18.jpg", sender: "Jeff Mason"},
        {message: "That is so weird I can’t hear you at all.", time: "10:25 AM", avatar: "https://randomuser.me/api/portraits/men/19.jpg", sender: "Adeline Woods"},
        {message: "I will message john about this. He will fix it!", time: "10:25 AM", avatar: "https://randomuser.me/api/portraits/men/19.jpg", sender: "Adeline Woods"},
        {message: "Let me send you the file", time: "10:20 AM", avatar: "https://randomuser.me/api/portraits/men/18.jpg", sender: "Jeff Mason"},
        // {message: "", time: "10:22 AM", avatar: "https://randomuser.me/api/portraits/men/18.jpg", sender: "Jeff Mason"},
      ]
    }
  }

  componentWillMount() {
    //setting the top nav bar params
    this.props.navigation.setParams({ chat: {name: "Adeline Woods", avatar: "https://randomuser.me/api/portraits/men/19.jpg", status: "Online" }});
  }

  _renderSent = (item, shouldRenderAvatar) => {
    let avatar = shouldRenderAvatar ? <Avatar style={styles.avatar} source={item.avatar} /> : null;
    return (
      <View style={[styles.message, {alignSelf: 'flex-end', marginBottom: shouldRenderAvatar ? 16 : 4}]}>
        <View style={[styles.messageWrapper, { backgroundColor: colors.blue },
          shouldRenderAvatar ? {marginRight: 0} : {marginRight: 32},
          shouldRenderAvatar ? {borderTopRightRadius : 0} : {borderBottomRightRadius: 0}]}>
          <Text style={[styles.messageText,{color: colors.white}]}>{item.message}</Text>
          <Text style={[styles.messageTime,{color: colors.lightWhite}]}>{item.time}</Text>
        </View>
        { avatar }
      </View>
    )
  }

  _renderReceived = (item, shouldRenderAvatar) => {
    let avatar = shouldRenderAvatar ? <Avatar style={styles.avatar} source={item.avatar} /> : null;
    return (
      <View style={[styles.message ,{alignSelf: 'flex-start', marginBottom: shouldRenderAvatar ? 16 : 4}]}>
        { avatar }
        <View style={[ styles.messageWrapper ,{backgroundColor: colors.dark.gray},
            shouldRenderAvatar ? {marginLeft: 0} : {marginLeft: 52},
            shouldRenderAvatar ? {borderTopLeftRadius : 0} : {borderBottomLeftRadius: 0}]}>
          <Text style={[styles.messageText,{color: colors.dark.text}]}>{item.message}</Text>
          <Text style={[styles.messageTime,{color: colors.lightText}]}>{item.time}</Text>
        </View>
      </View>
    )
  }

  _renderFile = () => {
    //TODO;
  }

  _renderMessages = ({item, index}) => {
    //TODO: Use AsyncStorage to determine user details
    let shouldRenderAvatar = false;
    if(this.state.messages[index+1] && this.state.messages[index+1].sender !== item.sender) shouldRenderAvatar = true;
    if(this.state.messages.length === 1 || !this.state.messages[index+1]) shouldRenderAvatar = true;

    if(item.sender === "Jeff Mason") return this._renderSent(item, shouldRenderAvatar);
    else return this._renderReceived(item, shouldRenderAvatar);
  }

  _onAttach = () => {
    Actions.push("chat_uplaod_lightbox")
  }

  _onSend = () => {

  }

  render() {
    return (
      <View style={styles['container']}>
        <FlatList
          keyExtractor={(item, index) => 'key'+index}
          style={styles.list}
          data={this.state.messages}
          renderItem={this._renderMessages}>
        </FlatList>
        <View style={styles.footer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              multiline
              underlineColorAndroid="transparent"
              placeholder="Type your message here"
              placeholderTextColor={colors.lightText}/>
            <TouchableOpacity style={styles.attachment} onPress={this._onAttach}>
              <Image source={Attachment} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.send} onPress={this._onSend}>
            <Image source={Send} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    paddingHorizontal: 16
  },
  message: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  messageWrapper: {
    flex: 0.8,
    borderRadius: 15,
     padding: 8
  },
  messageText: {
    flexWrap: 'wrap',
    fontSize: fontSizes['sm']
  },
  messageTime: {
    alignSelf: 'flex-end',
    fontSize: fontSizes['x-sm']
  },
  footer: {
    backgroundColor: colors.white,
    padding: 8,
    flexDirection: 'row',
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 35/2,
    marginHorizontal: 8
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 8,
  },
  input: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: colors.dark.gray,
    paddingHorizontal: 16
  },
  send: {
    width: 40,
    height: 40,
    borderRadius: 40/2,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  attachment: {
    position: 'absolute',
    right: 0,
    paddingRight: 20,
    paddingTop: 10
  }
})
