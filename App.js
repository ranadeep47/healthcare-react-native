import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
// import { Ionicons } from '@expo/vector-icons';
import flags from './assets/images/flags'
import RootNavigation from './navigation/RootNavigation';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <RootNavigation />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync(getAssets()),
      Font.loadAsync({
        'circularstd-book': require('./assets/fonts/circularstd-book-webfont.ttf'),
        'circularstd-medium': require('./assets/fonts/circularstd-medium-webfont.ttf')
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    SetDefaultFontFamily();
    this.setState({ isLoadingComplete: true });
  };
}

SetDefaultFontFamily = () => {
    let components = [Text, TextInput]

    const customProps = {
        style: {
            fontFamily: "circularstd-book",
            fontSize: 15
        }
    }

    for(let i = 0; i < components.length; i++) {
        const TextRender = components[i].prototype.render;
        const initialDefaultProps = components[i].prototype.constructor.defaultProps;
        components[i].prototype.constructor.defaultProps = {
            ...initialDefaultProps,
            ...customProps,
        }
        components[i].prototype.render = function render() {
            let oldProps = this.props;
            this.props = { ...this.props, style: [customProps.style, this.props.style] };
            try {
                return TextRender.apply(this, arguments);
            } finally {
                this.props = oldProps;
            }
        };
    }
}

function getAssets() {
  var images = [
    require('./assets/images/MobileRegistration.png'),
    ...Object.values(flags)
  ]

  return images;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
