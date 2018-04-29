import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo';

import { colors, fontSizes, gradients } from '../../constants/styles'

import TextField from '../TextField'
import Button from '../Button'

export default class FeedbackCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: ''
    }
  }

  _onClose = () => {

  }

  _onSubmit = () => {

  }

  render() {
    return (
      <LinearGradient colors={gradients.greenBlue} style={styles.container}>
        <View style={[styles.wrapper]}>
          <Text style={{color: colors.white}}>What do you thing we should improve?</Text>
        </View>
        <View style={[styles.wrapper]}>
          <TextField
            style={styles.textInput}
            inputStyle={{color: colors.white}}
            placeholder="Start typing here..."
            placeholderTextColor={colors.borderWhite}/>
        </View>
        <View style={[styles.wrapper, styles.buttonsContainer]}>
          <Button style={{borderWidth: 1, width: 120}} onPress={this._onClose} background="transparent" border={colors.borderWhite} size="md">
            Close
          </Button>
          <TouchableOpacity onPress={this._onSubmit} style={styles.submit}>
            <Text style={{color: colors.white}}>Submit Feedback</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  wrapper: {
    marginVertical: 8
  },
  textInput: {
    borderColor: colors.borderWhite,
    backgroundColor: 'transparent'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  submit: {
    backgroundColor: colors.dark.text,
    borderWidth: 1,
    borderColor: colors.dark.text,
    paddingVertical: 16,
    paddingHorizontal: 28,
    borderRadius: 4
  }
})
