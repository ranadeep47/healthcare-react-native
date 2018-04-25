import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';

import moment from 'moment'

import { colors, fontSizes } from '../../constants/styles'

//TODO: startDate={new {Date} prev={1} next={14} onSelect
export default class HorizontalCalendar extends React.Component {
  constructor(props) {
    super(props);
    const {onSelect, prev, next, startDate} = props;
    const start = moment(startDate || new Date());
    const prevDays = Array(prev).fill().map((e,i)=>i+1).map((n) => moment(start).subtract(n, 'days'))
    const nextDays = Array(next).fill().map((e,i)=>i+1).map((n) => moment(start).add(n, 'days'));
    const calendar = [...prevDays, start, ...nextDays];

    this.state = {
      selected: moment(this.props.startDate || new Date()),
      calendar: calendar
    }
  }

  _onSelect(selected) {
    this.setState({selected}, () => {
      this.props.onSelect(selected);
    })
  }

  _keyExtractor = (item, index) => 'key'+index;

  _renderItem= ({item, index}) => {
    const isSelected = this.state.selected.isSame(item, 'day');
    return (
      <View style={[styles['dateWrapper'], this.props.styles]}>
        <Text style={styles['month']}>{item.format("MMM")}</Text>
        <TouchableOpacity
          onPress={this._onSelect.bind(this, item)}
          style={[styles['date'], isSelected ? styles['selected'] : null]}>
          <Text
            style={{fontSize: fontSizes['xx-lg'], color: isSelected ? colors.white : colors.dark.text}}>
            {item.format("D")}
          </Text>
        </TouchableOpacity>
        <Text style={styles['day']}>{item.format("ddd")}</Text>
      </View>
    )
  }

  render() {
    return (
        <FlatList
          data={this.state.calendar}
          renderItem={this._renderItem}
          horizontal
          keyExtractor={this._keyExtractor}
          style={[styles['container'], this.props.style]}>
        </FlatList>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white
  },
  dateWrapper: {
    width: 60,
    padding: 8,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  month: {
    fontSize: 13,
    color: colors.text,
    textAlign: 'center',
  },
  date: {
    width: 32,
    height: 32,
    borderRadius: 32/2,
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  day: {
    fontSize: 13,
    color: colors.text,
    textAlign: 'center'
  },
  selected: {
    backgroundColor: colors.blue
  }
})
