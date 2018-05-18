import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { colors, fontSizes, gradients } from '../constants/styles'

import Callee from '../assets/images/callee_photo.png'
import Caller from '../assets/images/caller_photo.png'
import CutAudio from '../assets/images/stop_audio.png'
import CutVideo from '../assets/images/stop_video.png'
import CutCall from '../assets/images/cut_video_call.png'

const { width, height } = Dimensions.get('window');


export default class VideoCall extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.callDetails}>
          <Text style={styles.text}>Dr. Mamie Wagner</Text>
          <Text style={styles.text}>00:45</Text>
        </View>
        <Image style={styles.callee} source={Callee} />
        <Image style={styles.caller} source={Caller} />
        <View style={styles.bottom}>
          <View style={styles.callFunctions}>
            <TouchableOpacity onPress={() => {}}>
              <Image source={CutVideo} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <Image source={CutAudio} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => {}}>
              <Image source={CutCall} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

/*

*/

const styles = StyleSheet.create({
  container: {

  },
  callDetails:{
    position: 'absolute',
    top: 48,
    left: 24,
    bottom: 0,
    zIndex: 10
  },
  text: {
    color: colors.white,
    fontSize: fontSizes['md']
  },
  callee: {
    width: width,
    height: height
  },
  caller: {
    position: 'absolute',
    bottom: 160,
    right: 20,
    width: 100,
    height: 125,
    borderRadius: 4
  },
  callFunctions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 112,
    marginVertical: 16
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 32,
    alignItems: 'center'
  }
});
