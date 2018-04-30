import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo';

import { colors, fontSizes, gradients } from '../../constants/styles'

import Avatar from '../Avatar'
import Favorite from '../SvgIcons/Favorite'


export default class DoctorCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;

    return (
      <View style={styles.container}>
        <View style={[styles.row, styles.top]}>
          <View style={{flex: 1.5}}><Avatar source={data.avatar} isOnline={data.isOnline} /></View>
          <View style={{flex: 4, marginLeft: 8}}>
            <Text style={{fontSize: fontSizes['md'], color: colors.dark.text, marginVertical: 2}}>{data.name}</Text>
            <Text style={[styles.smallText, {marginVertical: 2}]}>{data.language.join(',')}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Favorite fill={colors.lightText} />
            <Text style={[styles.smallText, {paddingTop: 4, paddingLeft: 8}]}>{data.rating}</Text>
          </View>
        </View>
        <View style={[styles.row, styles.middle]}>
          <Text style={[styles.smallText]}>{data.location}</Text>
        </View>
        <View style={[styles.row, styles.bottom]}>
          <Text style={[styles.smallText]}>replies in {data.repliesIn} min</Text>
          <Text style={[styles.smallText, {color: colors.dark.text}]}>{data.experience} years of exp</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 4,
    shadowColor: colors.shadow,
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: {x: 0, y: 1}
  },
  top: {

  },
  middle: {
    justifyContent: 'flex-end'
  },
  bottom: {
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
    marginVertical: 4
  },
  smallText: {
    color: colors.text,
    fontSize: fontSizes['sm']
  }
})
