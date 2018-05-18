import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'

import PDF from '../../assets/images/pdf_file.png'
import File from '../../assets/images/sample_file.png'

import ProgressCircle from '../ProgressCircle'

const FileUploadMessage = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <View>
        <Image source={File} />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 8}}>
        <Image source={PDF} />
        <Text style={styles.text}>Blood test report.pdf</Text>
        <ProgressCircle
          style={{}}
          size={36}
          unfilledColor={colors.fadedWhite}
          color={colors.white}
          progress={0.6}
          onCancel={() => {}}
          onFinish={() => {}}/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.infoText}>3 pages | 180KB</Text>
        <Text style={styles.infoText}>4:03PM</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    padding: 8,
    borderRadius: 15,
    width: 240
  },
  text: {
    fontSize: fontSizes['md'],
    color: colors.white,
    paddingHorizontal: 8
  },
  infoText: {
    color: colors.lightWhite,
    fontSize: 13
  }
})

export default FileUploadMessage
