import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {StackNavigator} from './src/navigation';

const App = ({}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle={'light-content'} />
      <StackNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
