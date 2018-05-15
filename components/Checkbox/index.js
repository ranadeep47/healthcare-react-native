import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'

import Tickmark from '../SvgIcons/Tickmark'

//<Checkbox shape="circle" onChange={(e) => console.log(e)} title="Monday" />
//TODO: props: onChange, title, checked, shape(circle,square) style tickStyle
export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked : props.checked }
  }

  _onChange() {
    this.setState({checked : !this.state.checked}, () => {
      this.props.onChange(this.state.checked);
    })
  }

  render() {
    let tick = this.props.shape === "circle" || this.state.checked ? <Tickmark fill={colors.white} style={{padding: 2}} /> : null;

    return (
      <View style={[styles['container'], this.props.style]}>
        <TouchableOpacity onPress={this._onChange.bind(this)} style={styles['container']}>
          <View style={[
            styles['box'],
            styles[this.props.shape],
            !this.state.checked ? {backgroundColor: colors.white} : null,
            this.props.shape === 'circle' && !this.state.checked ? {backgroundColor: colors.lightText, borderColor: colors.lightText} : null,
            this.props.checkMarkStyle
          ]}>
            {tick}
          </View>
        </TouchableOpacity>
        <Text style={styles['title']}>{this.props.title || ''}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  box: {
    width: 28,
    height: 28,
    backgroundColor: colors.blue,
    padding: 2,
    borderWidth: 2,
    borderColor: colors.blue
  },
  square: {
    borderRadius: 4,
  },
  circle: {
    borderRadius: 28/2,
  },
  title: {
    fontSize: fontSizes['md'],
    marginHorizontal: 16,
    paddingVertical: 6,
    color: colors.dark.text
  }
})
