import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors, fontSizes } from '../../constants/styles'
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default class RangeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multiSliderValue: [3, 7]
    }
  }

  multiSliderValuesChange = (values) => {
    this.setState({
      multiSliderValue: values,
    });
  }

  render() {
    return (
      <View>
        <View>
        <MultiSlider
          selectedStyle={{backgroundColor: colors.blue}}
          unselectedStyle={{backgroundColor: colors.lightGray}}
          markerStyle={{backgroundColor: colors.blue, height: 20, width: 20}}
          pressedMarkerStyle={{backgroundColor: colors.blue}}
          trackStyle={{height: 6, borderRadius: 6}}


          markerOffsetY={2}

          values={[this.state.multiSliderValue[0], this.state.multiSliderValue[1]]}
          sliderLength={280}
          onValuesChange={this.multiSliderValuesChange}

          min={0}
          max={23}
          step={1}

          allowOverlap
          snapped/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
