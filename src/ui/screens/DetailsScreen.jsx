import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DetailsScreen = ({route, navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          color: 'white',
        }}></Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
