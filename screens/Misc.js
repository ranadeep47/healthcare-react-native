import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { colors, fontSizes } from '../constants/styles'

import LeftArrow from '../assets/images/left_arrow.png'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import TextField from '../components/TextField'
import BottomNavigation from '../components/BottomNavigation'

export default class Misc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience : [5]
    }
  }

  multiSliderValuesChange = (values) => {
    this.setState({experience: values}, () => {
      // this.props.onChange(values); TODO
    });
  }

  render() {
    return (
      <View style={styles['container']}>

        <TouchableOpacity style={styles.back} onPress={() => {}}>
          <Image source={LeftArrow} style={{marginRight: 8}}/>
          <Text style={{color: colors.blue, fontSize: fontSizes['sm']}}>BACK</Text>
        </TouchableOpacity>

        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 16}}>
            <Text>Experience</Text>
            <Text>{this.state.experience} years</Text>
          </View>
          <MultiSlider
            selectedStyle={{backgroundColor: colors.blue}}
            unselectedStyle={{backgroundColor: colors.lightGray}}
            markerStyle={{backgroundColor: colors.blue, height: 20, width: 20}}
            pressedMarkerStyle={{backgroundColor: colors.blue}}
            trackStyle={{height: 5, borderRadius: 6}}
            markerOffsetY={2}
            values={this.state.experience}
            sliderLength={320}
            onValuesChange={this.multiSliderValuesChange}
            min={1}
            max={30}
            step={1}
            snapped/>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
          <TextField
            label="First name"
            style={{flex: 1, marginRight: 8}}
            inputStyle={{}}
            placeholder="First name"/>
          <TextField
            label="Last name"
            style={{flex: 1, marginLeft: 8}}
            inputStyle={{}}
            placeholder="Last name"/>
        </View>

        <BottomNavigation type="patient" active={0} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 32
  },
  back: {
    flexDirection: 'row'
  }
})
