import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import * as Progress from 'react-native-progress';
import { colors, fontSizes } from '../../constants/styles'

import Close from '../SvgIcons/Close'
import Tickmark from '../SvgIcons/Tickmark'

export default class ProgressCircle extends React.Component{
  constructor(props) {
    super(props);
    this.state = {progress: this.props.progress}
  }

  componentWillReceiveProps(newProps) {
    if(newProps.progress !== this.props.progress) {
      this.setState({ progress: newProps.progress }, () => {
        if(newProps.progress === 1 && this.props.progress < 1) {
          this._onFinish();
        }
      })
    }
  }

  _onCancel() {
    //TODO: this.props.onCancel
  }

  _onFinish() {
    //TODO: this.props.onFinish
  }

  render() {
    let Button = null;
    if(this.state.progress === 1) Button = <Tickmark style={styles['icon']}/>
    else Button = <TouchableOpacity style={styles['icon']} onPress={this._onCancel.bind(this)}><Close/></TouchableOpacity>
    return (
      <View>
        <Progress.Circle borderWidth={0} size={40} progress={this.state.progress} unfilledColor={colors.lightBlue} color={colors.blue}>
          {Button}
        </Progress.Circle>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  icon: {
    ...StyleSheet.absoluteFillObject,
    top: 12,
    left: 12
  }
})
