import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TextInput
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'
//// TODO: this.props.onChangeText is required prop.
// <SearchBar title={'countries'} onChangeText={(e) => console.log(e)}></SearchBar>

const SearchBar = (props) => {
  return (
    <View style={styles['container']}>
      <TextInput
        style={styles['input']}
        underlineColorAndroid={'transparent'}
        onChangeText={props.onChangeText}
        placeholder={`Search for ${props.title}`}></TextInput>
      <Image style={styles['icon']} source={require('../../assets/images/SearchIcon.png')}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderWidth: 0.5,
    borderColor: colors.dark.background
  },
  input: {
    flex: 4
  },
  icon: {
    width: 20,
    height: 20
  }
})

export default SearchBar
