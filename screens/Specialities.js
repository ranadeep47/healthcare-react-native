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
import specialities from '../constants/specialities'
import SearchList from '../components/SearchList'

export default class Specialities extends React.Component {
  constructor(props) {
    super(props);
    //TODO: this should be in the initial state of a reducer when using redux;
    let sections = [];
    for(const key in specialities) {
      sections.push({title: key, data: specialities[key]});
    }
    this.state = {sections}
    this.allSections = sections;
    this.filterSpecialities = debounce(this.filterSpecialities, 200);
    this.filterSpecialities = this.filterSpecialities.bind(this);
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
                <Text style={styles.name}>{item}</Text>
            </View>
          </TouchableOpacity>
        )
    }
  }

  _renderSectionHeader({section: {title}}) {
    return (
      <View style={styles.section}>
        <Text style={{color: colors.text}}>{title}</Text>
      </View>
    )
  }

  filterSpecialities(text) {
    text = text.toLowerCase();
    //todo regexp for alphabets only
    if(!text.length || !/[a-z]+$/.test(text)) return this.setState({sections: this.allSections});
    let section;
    section = this.allSections.filter((obj) => obj.title === text[0].toUpperCase()).pop();
    let newSection = {title: section.title, data: section.data.filter((obj) => obj.toLowerCase().search(text) >= 0)}
    return this.setState({sections: [newSection]});
  }

  render() {
    return (
      <View style={styles['container']}>
        <SearchList
          onSelect={this._onSelect}
          onSearch={this.filterSpecialities}
          renderItem={this._returnRenderItem()}
          renderSectionHeader={this._renderSectionHeader}
          sections={this.state.sections}
          title="specialities"></SearchList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1 //Setting flex:1 in here and in the container of <SearchList is required to display the whole list
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: colors.background
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: colors.dark.background,
    backgroundColor: colors.white
  },
  name: {
    color: colors.dark.text
  }
})
