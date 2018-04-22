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
import Checkbox from '../components/Checkbox'
import TextField from '../components/TextField'
import Switch from '../components/Switch'

export default class Preferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  static navigationOptions = {
    //TODO
  };

  render() {
    return (
      <View style={styles['container']}>
        <View style={styles['body']}>
          <View>
            <View style={{paddingVertical: 16,paddingHorizontal: 20}}>
              <Text style={{color: colors.dark.text, marginVertical: 8}}>On which modes of communication are you available?</Text>
              <Checkbox
                style={{marginVertical: 8}}
                title={"Audio Call"}
                shape="circle"
                checked={true}
                onChange={() => {}}/>
              <Text style={{color: colors.text, marginVertical: 8}}>How much is your consulting fees for 30mins</Text>
              <TextField placeholder={'Enter amount in USD'} />
            </View>
            <View style={{paddingVertical: 8, paddingHorizontal: 20, borderBottomWidth: 1, borderColor: colors.dark.background, borderTopWidth: 1}}>
              <Checkbox
                style={{marginVertical: 8}}
                title={"Video Call"}
                shape="circle"
                checked={false}
                onChange={() => {}}/>
              <Checkbox
                style={{marginVertical: 8}}
                title={"Chat"}
                shape="circle"
                checked={false}
                onChange={() => {}}/>
            </View>
            <View style={{ paddingVertical: 16,paddingHorizontal: 20}}>
              <Text style={{color: colors.dark.text}}>Would you like us to turn on immedite on-demand consultation?</Text>
              <Text style={{color: colors.text, marginVertical: 8}}>Turning on immediate consultation will allow patients to approach you directly </Text>
              <Switch on={false}/>
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
  body: {
    flex: 4
  },
  bottomCard: {
    flex: 0.5,
    paddingHorizontal: 32,
    paddingVertical: 20,
    justifyContent: 'center'
  },

})
