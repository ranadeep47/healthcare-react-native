import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Rating from 'react-native-rating'
import { LinearGradient } from 'expo';
import { Actions } from 'react-native-router-flux';

import Avatar from '../components/Avatar'
import Button from '../components/Button'
import DatePicker from '../components/DatePicker'

import { colors, fontSizes, gradients } from '../constants/styles'

const images = {
  starFilled: require('../assets/images/rating_full.png'),
  starUnfilled: require('../assets/images/rating_empty.png')
}

export default class IncomingCall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: ""
    }
  }

  _onSubmit = () => {
    Actions.push("date_picker_lightbox");
  }

  render() {
    return (
      <LinearGradient
        locations={[0.8, 1]}
        style={styles.container}
        colors={[colors.background, colors.white]}>
        <View style={{flex: 1}}>
          <View style={{flex: 2, justifyContent: 'flex-end'}}>
            <Text style={styles.title}>How was the consultation with the doctor?</Text>
            <View style={{alignSelf: 'center', marginVertical: 16}}>
              <Rating
                starStyle={{
                  width: 24,
                  height: 24,
                  marginHorizontal: 4
                }}
                onChange={rating => console.log(rating)}
                selectedStar={images.starFilled}
                unselectedStar={images.starUnfilled}/>
            </View>
          </View>
          <View style={{flex: 5, marginVertical: 32}}>
            <TextInput
              style={styles.input}
              placeholder="Tell us more..."
              multiline = {true}
              numberOfLines = {4}
              underlineColorAndroid="transparent"
              onChangeText={(feedback) => this.setState({feedback})}
              value={this.state.feedback} />
            <Button style={styles.submit} size="md" onPress={this._onSubmit}>Submit</Button>            
          </View>
        </View>
      </LinearGradient>
    );
  }
}

/*

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 48,
  },
  title: {
    fontSize: 17,
    color: colors.dark.text,
    textAlign: 'left',
    lineHeight: 24
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: colors.lightBackground,
    borderColor: colors.lightText,
    textAlignVertical: "top"
  },
  submit: {
    marginVertical: 16,
    width: 150,
    alignSelf: 'flex-end'
  }
});
