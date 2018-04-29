import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
  } from 'react-native';

import { colors, fontSizes } from '../../constants/styles'
import Lightbox from './BaseLightbox'
import Avatar from '../../components/Avatar'
import Ratings from '../../components/Ratings'

import GlobeIcon from '../../assets/images/globe_icon.png'
import LocationIcon from '../../assets/images/location.png'

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    }
  }

  closeModal = ()=> {
    this.setState({visible: false})
  }

  render() {
    const { data } = this.props;
    return (
      <Lightbox align="center" visible={this.state.visible} style={styles.container}>
        <View style={[styles.row]}>
          <Avatar source={data.avatar} />
          <View style={{margin: 8}}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.experience}>8+ years of experience</Text>
          </View>
        </View>
        <Text style={styles.speciality}>Cardio sciences & cardio vascular surgey</Text>
        <View>
          <View style={[styles.row]}>
            <Image source={GlobeIcon} />
            <Text style={[styles.imageSideText]}>English</Text>
          </View>
          <View style={[styles.row]}>
            <Image source={LocationIcon} style={{marginLeft: 2}}/>
            <Text style={[styles.imageSideText]}>Mumbai, India</Text>
          </View>
        </View>
        <View style={[styles.row, {justifyContent: 'center', marginTop: 32}]}>
          <Text style={styles.rating}>4.2</Text>
          <Ratings rating={4.2} />
        </View>
      </Lightbox>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 16,
    flexDirection: 'column',
    flex: 0
  },
  row: {
    flexDirection: 'row',
    marginVertical: 8
  },
  name: {
    color: colors.dark.text,
    fontSize: fontSizes['md']
  },
  experience: {
    fontSize: fontSizes['sm'],
    color: colors.text,
    marginVertical: 4
  },
  speciality: {
    fontSize: fontSizes['sm'],
    color: colors.text,
    marginBottom: 32,
    marginTop: 16
  },
  imageSideText: {
    padding: 2,
    alignSelf: 'center',
    marginLeft: 8
  },
  rating: {
    fontSize: fontSizes['md'],
    alignSelf: 'center',
    padding: 2,
    marginRight: 8
  }
})
