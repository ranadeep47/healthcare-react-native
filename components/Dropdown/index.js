import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected : `Select your ${props.title}`,
      open: false
    }

    this._onToggle = this._onToggle.bind(this);
    this._onSelect = this._onSelect.bind(this);
  }

  _onToggle() {
    this.setState({ open: !this.state.open });
  }

  _onSelect(obj, i) {
    this.props.onSelect(obj, i);
    this._onToggle();
    this.setState({selected: obj.title})
  }

  render() {
    let list = null;
    let _this = this;
    if(this.state.open) list = (
      <ScrollView style={styles['list']}>
        {this.props.list.map((obj, i) => {
          return (
            <TouchableOpacity key={i} onPress={_this._onSelect.bind(_this, obj, i)}>
              <View style={styles['listItem']}>
                <Text style={styles['itemText']}>{obj.title}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    )

    return (
      <View style={[styles['container'], this.props.style]}>
        <TouchableOpacity onPress={this._onToggle}>
          <View style={styles['placeholder']}>
            <Text style={styles['selected']}>{this.state.selected}</Text>
            <View style={styles['triangle']}></View>
          </View>
        </TouchableOpacity>
        { list }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.dark.background,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
  },
  placeholder: {
    backgroundColor: colors.white,
    padding: 8,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  selected: {
    color: colors.lightText,
    fontSize: fontSizes['md'],
    flex: 4
  },
  triangle: {
    alignSelf: 'center',
    height: 0,
    width: 0,
    borderTopWidth: 8,
    borderRightWidth: 4,
    borderBottomWidth: 0,
    borderLeftWidth:4,
    borderTopColor: colors.text,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  list: {
    height: 180,
    backgroundColor: colors.white,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  listItem: {
    paddingVertical: 12,
    paddingHorizontal: 16
  },
  itemText: {
    color: colors.text,
    fontSize: fontSizes['md'],
  }
})
