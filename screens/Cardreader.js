import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import * as Progress from 'react-native-progress';
import { LinearGradient } from 'expo';

import { colors, fontSizes, gradients } from '../constants/styles'

import CardReader from '../assets/images/card_reader.png'
import CreditCard from '../components/CreditCard'

// const {width, height} = Dimensions.get('window');

export default class Cardreader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const card = {
      balance: "$954.55",
      number: "0068",
      expiry: "09/17"
    }

    return (
      <LinearGradient style={styles.container} colors={gradients.greenBlue}>
        <View style={{flex: 1,justifyContent: 'center', alignItems: 'flex-start'}}>
          <Image style={styles.reader} source={CardReader} />
          <View style={styles.slide}></View>
          <CreditCard style={[styles.card, {transform: [{rotate: "-90deg"},{translateY: 120}]}]}card={card} />
        </View>
        <View style={styles.processing}>
          <Text style={styles.text}>Processing payment...</Text>
          <View style={styles.spinner}>
            <Progress.CircleSnail indeterminate={true} color={colors.white} />
          </View>
        </View>
      </LinearGradient>
    );
  }
}

/*

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  reader:{
    zIndex: 10
  },
  slide: {
    position: 'absolute',
    left: 62,
    zIndex: 2,
    height: 20,
    width: 200,
    backgroundColor: colors.text,
    borderRadius: 10,
    transform: [{rotate: "-90deg"}]
  },
  card: {
    position: 'absolute',
    left: -20
  },
  processing: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject,
    top: 400
  },
  spinner: {
    height: 40,
    height: 40,
    marginLeft: 16
  },
  text: {
    fontSize: fontSizes['md'],
    color: colors.white
  }
});
