import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { LinearGradient } from 'expo';
import moment from 'moment';
import { Calendar } from 'react-native-calendars';
import { colors, fontSizes, gradients} from '../../constants/styles'

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment(props.selected || new Date())
    }
  }

  componentWillReceiveProps(newProps) {

  }

  _changeSelectedDate = (date) => {
    this.setState({selectedDate: moment(date.timestamp)})
  }

  _onChangeYear = () => {
    //TODO console.log('Change year');
  }

  render() {
    let selected = moment(this.state.selectedDate);
    let year = selected.year();
    let date = selected.format("ddd, MMMM YY");
    let dateString = selected.format('YYYY-MM-DD');

    return (
      <View style={[styles.container, this.props.style]}>
        <LinearGradient style={styles.top} colors={gradients.greenBlue}>
          <TouchableOpacity onPress={this._onChangeYear}>
            <Text style={styles.year}>{year}</Text>
          </TouchableOpacity>
          <Text style={styles.selectedDate}>{date}</Text>
        </LinearGradient>
        <Calendar
          // Initially visible month. Default = Date()
          current={dateString}
          markedDates={{
            [dateString] : { customStyles: {container: {padding: 2}}, selected: true }
          }}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={undefined}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={undefined}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={this._changeSelectedDate}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          // renderArrow={(direction) => (<Arrow />)}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          showWeekNumbers={false}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}

          style={{

          }}

          theme={{
            backgroundColor: colors.white,
            calendarBackground: colors.white,
            textSectionTitleColor: colors.text,

            selectedDayBackgroundColor: colors.blue,
            selectedDayTextColor: colors.white,

            todayTextColor: colors.lightBlack,
            dayTextColor: colors.lightBlack,
            // textDisabledColor: '#d9e1e8',
            // dotColor: '#00adf5',
            // selectedDotColor: '#ffffff',
            arrowColor: colors.black,
            monthTextColor: colors.lightBlack,
            textDayFontFamily: 'circularstd-book',
            textMonthFontFamily: 'circularstd-medium',
            textDayHeaderFontFamily: 'circularstd-book',
            // textMonthFontWeight: 'bold',
            textDayFontSize: fontSizes.sm,
            textMonthFontSize: fontSizes.md,
            textDayHeaderFontSize: fontSizes.sm
          }}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  },
  calendarStyle: {

  },
  top: {
    padding: 16
  },
  year: {
    fontFamily: 'circularstd-medium',
    fontSize: fontSizes.sm,
    textAlign: 'left',
    color: colors.lightWhite,
    marginVertical: 4
  },
  selectedDate: {
    fontFamily: 'circularstd-medium',
    fontSize: 30,
    // fontWeight: 'bold',
    textAlign: 'left',
    color: colors.white,
    marginVertical: 4
  }
})

/*
style={{
  borderWidth: 1,
  borderColor: 'gray',
  height: 350
}}
// Specify theme properties to override specific styles for calendar parts. Default = {}
theme={{
  backgroundColor: '#ffffff',
  calendarBackground: '#ffffff',
  textSectionTitleColor: '#b6c1cd',
  selectedDayBackgroundColor: '#00adf5',
  selectedDayTextColor: '#ffffff',
  todayTextColor: '#00adf5',
  dayTextColor: '#2d4150',
  textDisabledColor: '#d9e1e8',
  dotColor: '#00adf5',
  selectedDotColor: '#ffffff',
  arrowColor: 'orange',
  monthTextColor: 'blue',
  textDayFontFamily: 'monospace',
  textMonthFontFamily: 'monospace',
  textDayHeaderFontFamily: 'monospace',
  textMonthFontWeight: 'bold',
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 16
}}
*/
