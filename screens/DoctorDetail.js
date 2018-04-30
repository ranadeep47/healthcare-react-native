import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { colors, fontSizes, gradients } from '../constants/styles'

import Button from '../components/Button'
import Avatar from '../components/Avatar'
import Ratings from '../components/Ratings'

import GlobeIcon from '../assets/images/globe_icon.png'
import LocationIcon from '../assets/images/location.png'
import Heart from '../assets/images/heart.png'

export default class DoctorDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  _onHeart = () => {

  }

  render() {
    return (
      <View style={styles['container']}>
        <View style={styles.profile}>
          <View style={[styles.row]}>
            <View style={{flex: 1}}>
              <Avatar isOnline={true} source={"https://randomuser.me/api/portraits/men/4.jpg"} />
            </View>
            <View style={{marginLeft: 8, marginVertical: 0, flex: 4}}>
              <Text style={{fontSize: fontSizes['md'], color: colors.dark.text, marginVertical: 4}}>Adeline Woods</Text>
              <Text style={{fontSize: fontSizes['sm'], color: colors.text}}>replies in 2 mins</Text>
            </View>
            <View style={{alignItems: 'center', flex: 0.8}}>
              <TouchableOpacity onPress={this._onHeart}>
                <Image source={Heart} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginVertical: 8}}>
            <Text style={{color: colors.text, fontSize: fontSizes['sm']}}>Cardio sciences & cardio vascular surgery</Text>
          </View>
          <View style={{marginVertical: 8}}>
            <View style={[styles.row]}>
              <Image source={GlobeIcon} />
              <Text style={[styles.imageSideText]}>English</Text>
            </View>
            <View style={[styles.row]}>
              <Image source={LocationIcon} style={{marginLeft: 2}}/>
              <Text style={[styles.imageSideText]}>Mumbai, India</Text>
            </View>
            <View style={[styles.row, {}]}>
              <Text style={styles.rating}>4.2</Text>
              <Ratings rating={4.2} />
            </View>
          </View>
        </View>
        <View style={styles.contact}>
          <Text style={{fontSize: fontSizes['md'], color: colors.dark.text, marginVertical: 16}}>Consult with the doctor for 30 mins</Text>
          <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <Button size="md" style={[styles.smallButton, {marginRight: 8}]}>
              Video Call {"\n"}
              <Text style={{fontSize: 13, color: colors.lightWhite}}>pay 30$</Text>
            </Button>
            <Button size="md" style={[styles.smallButton, {marginLeft: 8}]}>
              Audio Call {"\n"}
              <Text style={{fontSize: 13, color: colors.lightWhite}}>pay 20$</Text>
            </Button>
          </View>
          <View style={[styles.row]}>
            <Button size="lg" background="transparent" style={styles.largeButton}>
              Chat with the doctor {"\n"}
              <Text style={{fontSize: 13, color: colors.blue}}>pay 10$</Text>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  profile: {
    backgroundColor: colors.background,
    padding: 16,
    flex: 0.7
  },
  contact: {
    backgroundColor: colors.white,
    padding: 16,
    flex: 1
  },
  row: {
    flexDirection: 'row',
    marginVertical: 8
  },
  imageSideText: {
    padding: 2,
    alignSelf: 'center',
    marginLeft: 8,
    fontSize: fontSizes['md'],
    color: colors.dark.text
  },
  rating: {
    fontSize: fontSizes['md'],
    color: colors.text,
    alignSelf: 'center',
    padding: 2,
    marginRight: 8
  },
  smallButton: {
    flex: 1,
    paddingVertical: 8
  },
  largeButton: {
    flex: 1,
    paddingVertical: 8
  }
})

/*
<Button size="lg">
  Chat with the doctor {"\n"}
  <Text style={{fontSize: 13, }}>pay 10$</Text>
</Button>
*/
