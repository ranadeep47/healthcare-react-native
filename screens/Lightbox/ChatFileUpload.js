import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
  } from 'react-native';

import { colors, fontSizes } from '../../constants/styles'
import Lightbox from './BaseLightbox'

import Button from '../../components/Button'

export default class ChatFileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }

  _cancelAppointment = () => {

  }

  closeModal = () => {
    this.setState({visible: false})
  }

  render() {
    return (
      <Lightbox vertical={0.5} align="bottom" visible={this.state.visible}>
        <View style={styles.container}>
          <Text style={styles.text}>Where are you files located? </Text>
          <View style={styles.buttons}>
            <View style={[styles.row]}>
              <Button size="lg" style={styles.largeButton} onPress={() => {}}>
                Choose from uploaded files on $name
              </Button>
            </View>
            <View style={[styles.row]}>
              <Button size="lg" background="transparent" style={styles.largeButton} onPress={() => {}}>
                Select files from phone
              </Button>
            </View>
            <View style={[styles.row]}>
              <Button size="lg" background="transparent" style={styles.largeButton} onPress={this.closeModal}>
                Cancel
              </Button>
            </View>
          </View>
        </View>
      </Lightbox>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 32
  },
  text: {
    fontSize: fontSizes['md'],
    color: colors.dark.text
  },
  buttons: {
    marginVertical: 32
  },
  largeButton: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    marginVertical: 8
  },
})
