import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SectionList
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'
import SearchBar from '../SearchBar'

/*Required props
  title, onSearch, renderItem, renderSectionHeader, sections
*/

export default class SearchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sections: props.sections}
  }

  componentWillReceiveProps(newProps, oldProps) {
    if(newProps.sections.length !== this.state.sections.length ||
      newProps.sections[0].data.length !== this.state.sections[0].data.length)
    this.setState({sections: newProps.sections});
  }

  render() {
    return (
      <View style={styles['container']}>
        <SearchBar title={this.props.title} onChangeText={this.props.onSearch}></SearchBar>
        <SectionList
          keyExtractor={(item, index) => `key-${index}`}
          removeClippedSubviews={true}
          scrollEventThrottle={16}
          renderItem={this.props.renderItem}
          renderSectionHeader={this.props.renderSectionHeader}
          sections={this.state.sections}
        ></SectionList>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
