import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { LinearGradient } from 'expo'
import { colors, fontSizes, gradients } from '../constants/styles'

import Button from '../components/Button'
import ProgressWizard from '../components/ProgressWizard'
import ProgressCircle from '../components/ProgressCircle'

export default class UploadCertificates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this._onContinue = this._onContinue.bind(this);
    this._onCancelUpload = this._onCancelUpload.bind(this);
  }

  static navigationOptions = {
    //TODO
  };

  _onContinue() {

  }

  _onCancelUpload() {

  }

  render() {


    return (
      <View style={styles['container']}>
        <LinearGradient colors={gradients['grayWhite']} style={styles['topCard']}>
          <Text style={styles['title']}>Create a new account</Text>
          <Text style={{color: colors.text, width: 200}}>Create an account with new phone number </Text>
          <View style={{marginTop: 32, flexDirection: 'row', justifyContent: 'center'}}>
            <ProgressWizard step={2}/>
          </View>
        </LinearGradient>
        <View style={styles['body']}>
          <Text style={{color: colors.dark.text, marginVertical: 10}}>Upload your certificates</Text>
          <Text style={{color: colors.text}}>
            Your certificates will not be shared with anyone. This is purely for our internal use to verify your identity.
          </Text>
          <Button style={{marginVertical: 20}} onPress={this._onCancelUpload} size='lg' background='transparent'>Cancel all uploads</Button>
          <View style={styles['uploads']}>

            <View style={styles['upload']}>
              <Image style={styles['upload_icon']} source={require('../assets/images/SquareIconPDF.png')} />
              <Text style={styles['upload_title']}>Master degree certificate.pdf</Text>
              <ProgressCircle style={{flex: 1}} progress={0.6} onCancel={() => {}} onFinish={() => {}}/>
            </View>

            <View style={styles['upload']}>
              <Image style={styles['upload_icon']} source={require('../assets/images/SquareIconPDF.png')} />
              <Text style={styles['upload_title']}>Address proof.pdf</Text>
              <ProgressCircle style={{flex: 1}} progress={0.6} onCancel={() => {}} onFinish={() => {}}/>
            </View>

          </View>
        </View>
        <LinearGradient colors={gradients['whiteGray']} style={styles['bottomCard']}>
          <Button size='lg'>Continue</Button>
        </LinearGradient>
      </View>
    )
  }

}
//<Close style={{...StyleSheet.absoluteFillObject, top: 12, left: 12}}/>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: colors.white
  },
  topCard: {
    paddingHorizontal: 32,
    paddingTop: 16,
    flex: 1.5
  },
  body:{
    paddingTop: 40, //TODO
    flex: 4,
    paddingHorizontal: 32,
    backgroundColor: colors.white
  },
  bottomCard: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 20,
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'circularstd-medium',
    marginVertical: 4,
    fontSize: fontSizes['x-lg'],
    color: colors.dark.text
  },
  upload: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: colors.separator
  },
  upload_icon: {
    alignSelf: 'center'
  },
  upload_title: {
    color: colors.dark.text,
    flex: 4,
    alignSelf: 'center',
    marginLeft: 10
  },

})
