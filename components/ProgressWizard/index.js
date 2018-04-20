import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'

import Tickmark from '../SvgIcons/Tickmark'

const ProgressWizard = (props) => {
  //32 [30, 210] 110 [108,132] 188 [186, 54]
  let barDimensions = {
    1: {width: 32, left: 30, remainingWidth: 210},
    2: {width: 110, left: 108, remainingWidth: 132},
    3: {width: 188, left: 186, remainingWidth: 54},
    4: {width: 240, left: 0, remainingWidth: 0}
  }

  let tickMark = <Tickmark style={{padding: 2.5}} fill={colors.white}/>
  return (
    <View style={[styles['container'], props.style]}>
      <View style={[styles['bar'], {width: barDimensions[props.step].width}]}></View>
      <View style={[styles['bar'], styles['inCompleteBar'], {left: barDimensions[props.step].left, width: barDimensions[props.step].remainingWidth}]}></View>
      <View style={styles['icons']}>
        <View style={[styles['icon'], styles['first'], {backgroundColor: colors.blue}]}>
          {tickMark}
        </View>
        <View style={[styles['icon'], styles['second'], props.step > 1 ? {backgroundColor: colors.blue} : null]}>
          {props.step > 1 ? tickMark : null}
        </View>
        <View style={[styles['icon'], styles['third'], props.step > 3 ? {backgroundColor: colors.blue} : null]}>
          {props.step > 3 ? tickMark : null}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 240    
  },
  bar: {
    height: 6,
    borderRadius: 50,
    backgroundColor: colors.blue,
    top: 0
  },
  inCompleteBar: {
    backgroundColor: colors.lightGray,
    top: 0,
    ...StyleSheet.absoluteFillObject,
  },
  icons: {
    ...StyleSheet.absoluteFillObject,
    top: 0
  },
  icon: {
    ...StyleSheet.absoluteFillObject,
    width: 24,
    height: 24,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 24/2,
    top: -9,
    zIndex: 10
  },
  first: {
    left: 30
  },
  second: {
    left: 108
  },
  third: {
    left: 186
  }
})

export default ProgressWizard
