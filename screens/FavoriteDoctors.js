import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { colors, fontSizes, gradients } from '../constants/styles'

import DoctorCard from '../components/DoctorCard'

import { Actions } from 'react-native-router-flux';

export default class FavoriteDoctors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [
        {
          name: "Dr. Jeff Mason",
          avatar: "https://randomuser.me/api/portraits/men/18.jpg",
          rating: 4.2,
          language: ['English'],
          location: "Bangalore, India",
          repliesIn: 2,
          experience: "20+",
          isOnline: true
        },
        {
          name: "Dr. Mark Woods",
          avatar: "https://randomuser.me/api/portraits/men/5.jpg",
          rating: 4,
          language: ['English'],
          location: "Mumbai, India",
          repliesIn: 4,
          experience: "2+",
          isOnline: true
        }
      ]
    }
  }

  _onRemoveFromFavorites = (item) => {
    // console.log(item);
    Actions.push("patient_confirm_pay");
  }

  _onViewDoctor = (item) => {
    console.log(item);
  }

  _renderDoctors = ({item, index}) => {
    return (
      <View style={styles.card}>
        <DoctorCard data={item} />
        <View style={{flexDirection: 'row', borderTopWidth: 1, borderColor: colors.separator, flex: 1, marginTop: -2}}>
          <TouchableOpacity style={[styles.button, {borderRightWidth: 1, borderColor: colors.separator, flex: 1.7, borderBottomLeftRadius: 4}]} onPress={this._onRemoveFromFavorites.bind(this, item)}>
            <Text style={[styles.buttonText]}>Remove from favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {flex: 1, borderBottomRightRadius: 4}]} onPress={this._onViewDoctor.bind(this, item)}>
            <Text style={[styles.buttonText]}>View doctor</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles['container']}>
        <FlatList
          keyExtractor={(item, index) => 'key'+index}
          style={styles.list}
          data={this.state.doctors}
          renderItem={this._renderDoctors}>
        </FlatList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1
  },
  card: {
    marginHorizontal: 32,
    marginVertical: 8
  },
  list: {
    marginTop: 16
  },
  button: {
    padding: 16,
    backgroundColor: colors.white
  },
  buttonText: {
    fontSize: fontSizes['sm'],
    color: colors.dark.text
  }
})
