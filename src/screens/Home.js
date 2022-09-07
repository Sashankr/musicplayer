import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import { PRIMARY_COLOR,SECONDARY_COLOR } from '../constants/colors';

const Home = () => {
<SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Music Player</Text>
            <Text style={styles.description}>
              Listen to your favourite songs in a single place
            </Text>
            <View style={styles.curved}>
              <Text style={styles.play}>Play</Text>
            </View>
          </View>
          <View style={styles.homeImageContainer}>
            <Image
              style={styles.homeImage}
              source={require('../assets/images/listen-music.png')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 32,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 24,
    backgroundColor: PRIMARY_COLOR,
  },
  title: {
    color: SECONDARY_COLOR,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    fontSize: 32,
  },
  description: {
    color: SECONDARY_COLOR,
    fontFamily: 'Roboto-Regular',
    marginVertical: 10,
  },
  play: {
    padding: 8,
    color: PRIMARY_COLOR,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
  curved: {
    borderRadius: 10,
    backgroundColor: SECONDARY_COLOR,
    width: 60,
    marginVertical: 10,
  },
  homeImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeImage: {
    width: '100%',
    height: 390,
  },
});

export default Home