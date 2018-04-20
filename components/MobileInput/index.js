import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'

export default class MobileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: this.props.error,
      countryCode: props.countryCode,
      phoneNumber: ''
    }

    this._onChangeText = this._onChangeText.bind(this);
  }

  componentWillReceiveProps(newProps, oldProps) {
    if(newProps.countryCode !== this.props.countryCode) this.setState({countryCode: newProps.countryCode})
    if(newProps.error !== this.props.error) this.setState({error: newProps.error});
  }

  _onChangeText(phoneNumber) {
    this.setState({phoneNumber}, () => {
      this.props.onChange(this.state.phoneNumber);
    })
  }

  render() {
    let errorView = null;
    if(this.state.error) {
      errorView = <View style={styles['errorWrapper']}>
        <Text style={styles['errorText']}>Please enter your mobile number</Text>
      </View>
    }

    return (
      <View style={[styles['container'], this.props.style]}>
        <View style={[styles['inputWrapper'], this.state.error && styles['errorContainer']]}>
          <View style={styles['countryCodeWrapper']}>
            <Text style={styles['countryCode']}>{this.state.countryCode}</Text>
          </View>
          <TextInput
            onChangeText={this._onChangeText}
            value={this.state.phoneNumber}
            underlineColorAndroid={'transparent'}
            style={styles['input']}
            dataDetectorTypes='phoneNumber'
            keyboardType='phone-pad'
            maxLength={10}
            placeholder='Enter your mobile number'></TextInput>
        </View>
        {errorView}
      </View>
    )
  }
}
// placeholderTextColor={}


const styles = StyleSheet.create({
  container: {

  },
  inputWrapper: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: colors.separator,
  },
  countryCodeWrapper: {
    padding: 16,
    backgroundColor: colors.gray
  },
  countryCode: {
    color: colors.dark.text,
    fontSize: fontSizes['lg']
  },
  input: {
    flex: 1,
    fontSize: fontSizes['lg'],
    paddingHorizontal: 10
  },
  errorWrapper: {
    backgroundColor: colors.fadedRed,
    borderColor: colors.red,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 4,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0
  },
  errorText: {
    padding: 10,
    color: colors.red
  },
  errorContainer: {
    borderColor: colors.red,
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  }
})
