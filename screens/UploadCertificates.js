import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import { LinearGradient } from 'expo'
import { colors, fontSizes, gradients } from '../constants/styles'
import LeftArrow from '../assets/images/left_arrow.png'

import Button from '../components/Button'
import ProgressWizard from '../components/ProgressWizard'
import ProgressCircle from '../components/ProgressCircle'

import { Actions } from 'react-native-router-flux';

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
    // Actions.push('quote_loader_lightbox');
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
            <ProgressWizard step={3}/>
          </View>
        </LinearGradient>
        <ScrollView style={styles['body']}>
          <TouchableOpacity style={styles.back} onPress={() => {}}>
            <Image source={LeftArrow} style={{marginRight: 8}}/>
            <Text style={{color: colors.blue, fontSize: fontSizes['sm']}}>BACK</Text>
          </TouchableOpacity>
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
        </ScrollView>
        <LinearGradient colors={gradients['whiteGray']} style={styles['bottomCard']}>
          <Button size='lg' onPress={this._onContinue}>Continue</Button>
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
    paddingTop: 16
  },
  body:{
    paddingTop: 24, //TODO
    paddingHorizontal: 32,
    backgroundColor: colors.white
  },
  back: {
    flexDirection: 'row',
    marginVertical: 8
  },
  bottomCard: {
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
