import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'

export default class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: false};
  }

  _onToggle = () => {
    this.setState({selected: !this.state.selected}, () => {
      this.props.onChange(this.state.selected);
    })
  }

  render() {
    return (
      <TouchableOpacity style={[styles.button, {backgroundColor: this.state.selected? colors.blue: colors.white}, this.props.style]} onPress={this._onToggle}>
        <Text style={[styles.text, {color: this.state.selected ? colors.white : colors.blue}]}>{this.props.children}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.blue,
    paddingVertical: 8,
    // paddingHorizontal: 16,
    width: 78,
    height: 40,
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: fontSizes['sm']
  }
})
