import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { debounce } from 'lodash'
import { colors, fontSizes } from '../constants/styles'
import countries from '../constants/countries'
import SearchList from '../components/SearchList'

export default class Countries extends React.Component {
  constructor(props) {
    super(props);
    //TODO: this should be in the initial state of a reducer when using redux;
    let sections = [];
    for(const key in countries) {
      sections.push({title: key, data: countries[key]});
    }
    this.state = {sections}
    this.allSections = sections;
    this.filterCountries = debounce(this.filterCountries, 200);
    this.filterCountries = this.filterCountries.bind(this);
  }

  static navigationOptions = {
    //TODO
  };

  _onSelect(item) {
    console.log(item)
    //TODO: navigate
  }

  _returnRenderItem() {
    var _this = this; //TODO: hack, closure to store context, replace it with an action when using redux for onPress handler
    return function _renderItem({item, index, section}) {
        return (
          <TouchableOpacity onPress={(e) => _this._onSelect(this.item)}>
            <View style={styles['row']}>
                <Text style={styles['name']}>{item.name}</Text>
                <Text style={styles['code']}>{item.code}</Text>
            </View>
          </TouchableOpacity>
        )
    }
  }

  _renderSectionHeader({section: {title}}) {
    return (
      <View style={styles['section']}>
        <Text>{title}</Text>
      </View>
    )
  }

  filterCountries(text) {
    text = text.toLowerCase();
    //todo regexp for alphabets only
    if(!text.length || !/[a-z]+$/.test(text)) return this.setState({sections: this.allSections});
    let section;
    section = this.allSections.filter((obj) => obj.title === text[0].toUpperCase()).pop();
    let newSection = {title: section.title, data: section.data.filter((obj) => obj.name.toLowerCase().search(text) >= 0)}
    return this.setState({sections: [newSection]});
  }

  render() {
    return (
      <View style={styles['container']}>
        <SearchList
          onSelect={this._onSelect}
          onSearch={this.filterCountries}
          renderItem={this._returnRenderItem()}
          renderSectionHeader={this._renderSectionHeader}
          sections={this.state.sections}
          title="countries"></SearchList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  section: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: colors.background
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: colors.dark.background,
    backgroundColor: colors.white
  },
  name: {
    flex: 6
  },
  code: {
    flex: 1,
    color: colors.blue
  }
})
