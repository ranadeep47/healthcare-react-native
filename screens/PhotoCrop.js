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

import Photo from '../assets/images/photo.png'
import CropFrame from '../assets/images/crop_frame.png'
import Rotate from '../assets/images/rotate.png'

const { width, height } = Dimensions.get('window');

export default class PhotoCrop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.photo} source={Photo} />
        <Image style={styles.frame} source={CropFrame} />
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.text}>CANCEL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Image source={Rotate} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.text}>DONE</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

/*

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: 'center',
  },
  photo: {
    width: width,
    resizeMode:'cover'
  },
  frame: {
    transform: [{scale: 0.9}],
    position: 'absolute',
    left: 0,
    right: 0,
    marginLeft: 24    
  },
  text: {
    color: colors.white,
    fontSize: fontSizes['md']
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 32
  }
});
