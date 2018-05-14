import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import { colors, fontSizes, gradients } from '../../constants/styles'
import { Actions } from 'react-native-router-flux';

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import UpcomingBookings from './Upcoming'
import PastBookings from './Past'
import RequestedBookings from './Requested'

import Avatar from '../../components/Avatar'

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class PatientBookings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: {
        index: 2,
        routes: [
          { key: 'upcoming', title: 'Upcoming' },
          { key: 'past', title: 'Past' },
          { key: 'requested', title: 'Requested' },
        ],
      },

      patient: {
        name: "Raj Abhishek",
        avatar: "https://randomuser.me/api/portraits/men/10.jpg",
        age: "26 years"
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
  upcoming: UpcomingBookings,
  past: PastBookings,
  requested: RequestedBookings
});

  render() {
    const { patient } = this.state;
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', padding: 16}}>
          <Avatar source={patient.avatar} />
          <View style={{marginHorizontal: 16}}>
            <Text style={{color: colors.dark.text, fontSize: fontSizes['md']}}>{patient.name}</Text>
            <Text style={{color: colors.text, fontSize: fontSizes['sm'], marginVertical: 4}}>{patient.age}</Text>
          </View>
        </View>
        <TabViewAnimated
         useNativeDriver
         style={[styles.tabs]}
         navigationState={this.state.tabs}
         renderScene={this._renderScene}
         renderHeader={this._renderHeader}
         onIndexChange={this._handleIndexChange}
         initialLayout={initialLayout}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50/2
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
