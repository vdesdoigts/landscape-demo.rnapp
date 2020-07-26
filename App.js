/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, } from 'react';
import { withAnchorPoint } from 'react-native-anchor-point';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

const CARD_WIDTH = Dimensions.get('window').width
const CARD_HEIGHT = Dimensions.get('window').height

const App = () => {
  const [isFullscreen, setFullscreen] = useState()

  return (
    <>
      <View style={styles.background}>
        <Image
          style={[styles.image, isFullscreen && styles.imageFullscreen]}
          source={{
            uri: 'https://images.unsplash.com/photo-1595533768273-e8bee69577ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1962&q=80',
          }}
        />
      </View>
      <TouchableHighlight
        style={styles.buttonFullscreen}
        onPress={() => setFullscreen(!isFullscreen)}
      >
        <Text>Fullscreen</Text>
      </TouchableHighlight>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#a6abaa',
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    backgroundColor: '#03fcd3',
  },
  imageFullscreen: {
    position: 'absolute',
    zIndex: 1,
    top: Dimensions.get('window').width / 2 + 34, // @todo : find 34, maybe ios statusbar or safe view area
    left: -1 * (Dimensions.get('window').width / 2  + 34),
    width: CARD_HEIGHT,
    height: CARD_WIDTH,
    backgroundColor: '#03fcd3',
    resizeMode: 'contain',
    transform: [
      { rotate: '90deg' },
    ],
  },
  buttonFullscreen: {
    position: 'absolute',
    zIndex: 2,
    left: 0,
    bottom: 40,
    width: '100%',
    height: 40,
    backgroundColor: '#000',
  },
});

export default App;
