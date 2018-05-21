import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList
} from 'react-native';

import { colors, fontSizes } from '../constants/styles'
import Specialisations from '../assets/images/specialisations'
import BottomNavigation from '../components/BottomNavigation'

import RightArrow from '../assets/images/right_arrow.png'
import SearchIcon from '../assets/images/SearchIcon.png'

export default class DoctorSpecialities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Specialisations}
  }

  _onSearch = () => {

  }

  _renderSpecialisation = ({item, index}) => {
      return (
        <TouchableOpacity style={styles.listRow} onPress={() => {}}>
          <View style={{width: 44, height: 44, backgroundColor: colors.lightGreen, borderRadius: 44/2, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={item.icon} />
          </View>
          <Text style={{marginLeft: 16, color: colors.dark.text, }}>{item.name}</Text>
          <Image source={RightArrow} style={{alignSelf: 'center', position: 'absolute', right: 32}}/>
        </TouchableOpacity>
      )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.title}>Start by choosing a speciality</Text>
        </View>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Search for specialities"
            placeholderTextColor={colors.lightText}/>
          <TouchableOpacity style={styles.search} onPress={this._onSearch}>
            <Image source={SearchIcon} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text}>{"Specialities".toUpperCase()}</Text>
          <FlatList
            keyExtractor={(item, index) => 'key'+index}
            style={styles.list}
            data={this.state.Specialisations}
            renderItem={this._renderSpecialisation}>
          </FlatList>
        </View>
        <BottomNavigation type="patient" active={0} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  },
  title: {
    marginTop: 32,
    color: colors.dark.text,
    fontSize: fontSizes['lg'],
    lineHeight: 22,
    alignSelf: 'center'
  },
  searchWrapper: {
    flexDirection: 'row',
    shadowColor: colors.shadow,
    shadowOpacity: 0.06,
    shadowRadius: 20,
    shadowOffset: {x: 0, y: 1},
    margin: 32
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.separator,
    paddingHorizontal: 16,
  },
  search: {
    position: 'absolute',
    right: 0,
    top: 4,
    paddingRight: 20,
    paddingTop: 10
  },
  text: {
    color: colors.text,
    fontSize: 13,
    paddingHorizontal: 32,
    paddingVertical: 16
  },
  list: {
    marginBottom: 280
  },
  listRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.separator,

  }
})
