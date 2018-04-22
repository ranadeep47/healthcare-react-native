import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
//TODO: props( min, max, step, onChange, [width])
export default class RangeSlider extends React.Component {
  constructor(props) {
    super(props);
    let {start, stop} = props;
    this.state = {
      multiSliderValue: [start, stop]
    }
  }

  multiSliderValuesChange = (values) => {
    this.setState({multiSliderValue: values}, () => {
      this.props.onChange(values);
    });
  }

  render() {
    let {min, max, step} = this.props;

    return (
      <View>
        <View>
        <MultiSlider
          selectedStyle={{backgroundColor: colors.blue}}
          unselectedStyle={{backgroundColor: colors.lightGray}}
          markerStyle={{backgroundColor: colors.blue, height: 20, width: 20}}
          pressedMarkerStyle={{backgroundColor: colors.blue}}
          trackStyle={{height: 5, borderRadius: 6}}


          markerOffsetY={2}

          values={[this.state.multiSliderValue[0], this.state.multiSliderValue[1]]}
          sliderLength={this.props.width || 320}
          onValuesChange={this.multiSliderValuesChange}

          min={min}
          max={max}
          step={step}

          allowOverlap
          snapped/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
