import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  } from 'react-native';
import * as Progress from 'react-native-progress';

import { colors, fontSizes } from '../../constants/styles'
import Lightbox from './BaseLightbox'

export default class QuoteLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes : [
        {quote: "Health is not valued till sickness comes.", author: "Thomas Fuller"},
        {quote: "You can't take good health for granted.", author: "Jack Osbourne"},
      ]
    }
  }

  closeModal = ()=> {
    this.setState({visible: false})
  }

  render() {
    const { data } = this.props;
    let random = Math.floor(Math.random() * this.state.quotes.length);
    let quote = this.state.quotes[random];

    return (
      <Lightbox vertical={0.4} align="center" visible={this.state.visible} style={styles.container}>
        <View style={styles.spinner}>
          <Progress.CircleSnail indeterminate={true} color={colors.blue} />
        </View>
        <Text style={styles.quote}>{quote.quote}</Text>
        <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
          <Text style={{color: colors.text, fontSize: fontSizes['sm']}}> - {quote.author}</Text>
        </View>
      </Lightbox>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 32,
    alignItems: 'center'
  },
  spinner: {
    width: 40,
    height: 40
  },
  quote: {
    marginVertical: 32,
    fontSize: fontSizes['lg'],
    color: colors.dark.text,
    fontStyle: 'italic',
    textAlign: 'center'
  }
})
