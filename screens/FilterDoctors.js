import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { colors, fontSize } from '../constants/styles'

import Button from '../components/Button'
import Checkbox from '../components/Checkbox'

export default class FilterDoctors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        {name: "English", checked: true},
        {name: "Spanish", checked: true},
        {name: "Arabic", checked: false},
        {name: "Portuguese", checked: false},
      ]
    }
  }

  static navigationOptions = {
    //TODO
  };

  _onChange(index) {
    let languages = this.state.languages.slice();
    languages[index].checked = !languages[index].checked;
    this.setState({languages});
  }

  _onApply = () => {

  }

  render() {
    const numFilters = this.state.languages.filter((l) => l.checked).length || ''
    return (
      <View style={styles.container}>
        <Text style={{margin: 16, color: colors.text}}>LANGUAGE</Text>
        <View style={styles.checkboxes}>
          {
            this.state.languages.map((language, i) => {
              return (
                <View key={i} style={styles.wrapper}>
                  <Text style={{
                    color: language.checked ? colors.dark.text : colors.text,
                    fontFamily: language.checked ? 'circularstd-medium' : 'circularstd-book'}}>
                    {language.name}
                  </Text>
                  <Checkbox checkMarkStyle={styles.checkbox} checked={language.checked} shape="square" onChange={this._onChange.bind(this, i)} />
                </View>
              )
            })
          }
        </View>
        <View style={styles.submit}>
          <Button style={{flex: 1}} size="lg" onPress={this._onApply}>Apply {numFilters} filters</Button>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingTop: 32,
    flexDirection: 'column',
    flex: 1
  },
  checkboxes: {
    backgroundColor: colors.white
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: colors.background
  },
  checkbox: {
    transform: [{scale: 0.7}],
    marginLeft: 32
  },
  submit: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 16,
    paddingHorizontal: 32
  }
})
