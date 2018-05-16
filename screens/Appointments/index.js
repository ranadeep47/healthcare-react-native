import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import { colors, fontSizes, gradients } from '../../constants/styles'

import UpcomingAppointments from './UpcomingAppointments'
import PastAppointments from './PastAppointments'
import AppointmentRequests from './AppointmentRequests'
import BottomNavigation from '../../components/BottomNavigation'

import { Actions } from 'react-native-router-flux';

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: {
        index: 0,
        routes: [
          { key: 'upcoming', title: 'Upcoming' },
          { key: 'past', title: 'Past' },
          { key: 'requests', title: 'Requests' },
        ],
      }
    }
  }

  _handleIndexChange = index =>
  this.setState({
    tabs: {...this.state.tabs, index}
  });

_renderHeader = props => (
  <TabBar
    {...props}
    renderLabel={scene => <Text style={[styles.label, {color: scene.focused ? colors.blue : colors.lightText}]}>{scene.route.title}</Text>}
    bounces={false}
    indicatorStyle={styles.indicator}
    style={styles.tabbar}
    tabStyle={styles.tab}
  />
);

_renderScene = SceneMap({
  upcoming: UpcomingAppointments,
  past: PastAppointments,
  requests: AppointmentRequests
});

  render() {
    const { patient } = this.state;
    return (
      <View style={styles.container}>
        <TabViewAnimated
         useNativeDriver
         style={[styles.tabs]}
         navigationState={this.state.tabs}
         renderScene={this._renderScene}
         renderHeader={this._renderHeader}
         onIndexChange={this._handleIndexChange}
         initialLayout={initialLayout}/>
        <BottomNavigation type="doctor" active={0} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  tabs: {

  },
  indicator: {
    backgroundColor: colors.blue,
    height: 3
  },
  tabbar: {
    backgroundColor: colors.background,
    shadowOpacity: 0,
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
    elevation: 0
  },
  tab: {

  },
  label: {
    margin: 8,
    fontSize: fontSizes['sm'],
    color: colors.lightText
  }
})
