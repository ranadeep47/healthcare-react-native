import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Animated, Dimensions, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { colors, fontSizes } from '../../constants/styles'

const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

export default class BaseLightbox extends Component {
  static propTypes = {
    children: PropTypes.any,
    horizontalPercent: PropTypes.number,
    verticalPercent: PropTypes.number,
  }

  constructor(props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(0),
      visible : this.props.visible || true
    };
  }

  componentWillReceiveProps(newProps) {
    if(newProps.visible === false) this.setState({visible: false}, () => {
      this.closeModal();
    })
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      duration: 100,
      toValue: 1,
    }).start();
  }

  closeModal = () => {
    Animated.timing(this.state.opacity, {
      duration: 100,
      toValue: 0,
    }).start(Actions.pop);
  }

  _renderLightBox = () => {
    const { children, align } = this.props;
    let horizontalPercent = 1, verticalPercent = 0.8;
    if(align === 'center') {
      horizontalPercent = 0.9;
      verticalPercent = 0.5;
    }
    const height = verticalPercent ? deviceHeight * verticalPercent : deviceHeight;
    const width = horizontalPercent ? deviceWidth * horizontalPercent : deviceWidth;

    return (
      <View
        style={{
          width,
          height,
          backgroundColor: 'white'
        }}
      >
        {children}
      </View>
    );
  }

  render() {
    const { align } = this.props;
    let alignStyles = { justifyContent: 'center', alignItems: 'center' };
    if(align === 'bottom') alignStyles.justifyContent = 'flex-end';
    else if (align === 'top') alignStyles.justifyContent = 'flex-start';

    return (
      <Animated.View style={[styles.container, { opacity: this.state.opacity }, alignStyles]}>
        {this._renderLightBox()}
      </Animated.View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.overlay,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
