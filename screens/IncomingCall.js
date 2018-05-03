import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { LinearGradient } from 'expo';

import Avatar from '../components/Avatar'

import AudioCallIcon from '../assets/images/attend_audio_call.png'
import VideoCallIcon from '../assets/images/attend_video_call.png'
import CutCallIcon from '../assets/images/cut_call.png'

import { colors, fontSizes, gradients } from '../constants/styles'

export default class IncomingCall extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const doctor = {
      name: "Dr. Adeline Woods",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      speciality: "Cardio sciences & cardio vascular surgey"
    }

    return (
      <LinearGradient
        locations={[0.8, 1]}
        style={styles.container}
        colors={[colors.background, colors.white]}>
        <View style={{flex: 3, flexDirection: 'column', justifyContent: 'flex-end'}}>
          <Text style={{color: colors.dark.text}}>Incoming call...</Text>
        </View>
        <View style={{marginVertical: 32, alignItems: 'center', flex: 4}}>
          <Avatar style={styles.avatar} source={doctor.avatar} />
          <Text style={{marginVertical: 8, color: colors.dark.text}}>{doctor.name}</Text>
          <Text style={{marginVertical: 8, color: colors.text}}>{doctor.speciality}</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => {}}>
            <Image source={VideoCallIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={AudioCallIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={CutCallIcon} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

/*

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 90/2,
    marginVertical: 16
  },
  icons: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 240
  },

});
