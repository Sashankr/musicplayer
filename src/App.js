/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './constants/colors';



/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView >
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Music Player</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 32,
    marginHorizontal:10,
    borderRadius:10,
    padding: 24,
    backgroundColor : PRIMARY_COLOR,
    
  },
  title:{
    color : SECONDARY_COLOR,
    fontFamily:'Poppins-SemiBold',
    fontWeight:'600',
    fontSize:32
  }
});

export default App;
