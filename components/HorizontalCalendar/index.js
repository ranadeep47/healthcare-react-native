import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import moment from 'moment'

import { colors, fontSizes } from '../../constants/styles'

//TODO: startDate={new {Date} prev={1} next={14} onSelect
export default class HorizontalCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: moment(this.props.startDate || new Date()) }
  }

  onSelect(selected) {
    this.setState({selected}, () => {
      this.props.onSelect(selected);
    })
  }

  render() {
    const {onSelect, prev, next} = this.props;
    const startDate = moment(this.props.startDate || new Date());
    const prevDays = [...Array(prev+1).keys()].slice(1).map((n) => startDate.subtract(n, 'days'))
    const nextDays = [...Array(next+1).keys()].slice(1).map((n) => startDate.add(n, 'days'));
    const calendar = [...prevDays, startDate, ...nextDays];

    return (
        <ScrollView horizontal={true} style={[styles['container'], this.props.style]}>
          {calendar.map((m, i) => {
            const isSelected = this.state.selected.isSame(m, 'day');
            return (
              <View key={i} style={styles['dateWrapper']}>
                <Text style={styles['month']}>{m.format("MMM")}</Text>
                <View style={[styles['date'], isSelected ? styles['selected'] : null]}>
                  <Text>{m.format("D")}</Text>
                </View>
                <Text style={styles['day']}>{m.format("ddd")}</Text>
              </View>
            )
          })}
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  dateWrapper: {

  },
  month: {

  },
  date: {

  },
  day: {

  },
  selected: {

  }
})
