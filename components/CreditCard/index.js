import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';

import { LinearGradient } from 'expo'
import { colors, fontSizes, gradients } from '../../constants/styles'

import CardCensored from '../../assets/images/card_censored.png'
import VisaIcon from '../../assets/images/visa.png'

const CreditCard = (props) => {
  const { card } = props;
  return (
    <LinearGradient style={[styles.container, props.style]} colors={gradients.black}>
      <Text style={styles.text}>Current balance</Text>
      <Text style={styles.balance}>{card.balance}</Text>
      <View style={[styles.row, {marginVertical: 16}]}>
        <Image source={CardCensored} />
        <Text style={styles.cardNumber}>{card.number}</Text>
      </View>
      <View style={[styles.row, {justifyContent: 'space-between'}]}>
        <Text style={styles.expiry}>{card.expiry}</Text>
        <Image source={VisaIcon} />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    // margin: 32,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 6
  },
  text: {
    color: colors.fadedWhiteText
  },
  balance: {
    fontSize: 26,
    color: colors.white,
    marginTop: 8
  },
  cardNumber: {
    fontSize: 21,
    color: colors.fadedWhite,
    marginLeft: 12
  },
  row: {
    flexDirection: 'row',
    marginVertical: 8,
    alignItems: 'center'
  },
  expiry: {
    fontSize: 17,
    color: colors.fadedWhite
  },

})

export default CreditCard
