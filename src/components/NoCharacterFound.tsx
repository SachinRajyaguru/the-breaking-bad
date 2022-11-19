import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, Typography} from '../theme';

const NoCharacterFound = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.no_character_found}>No character found</Text>
      <Text style={styles.try_again}>Try again</Text>
    </View>
  );
};

export default NoCharacterFound;

const styles = StyleSheet.create({
  mainContainer: {},
  no_character_found: {
    fontFamily: Typography.ROBOTO_LIGHT,
    fontSize: 24,
    color: Colors.GREEN,
  },
  try_again: {
    fontFamily: Typography.ROBOTO_LIGHT,
    fontSize: 24,
    color: Colors.WHITE,
  },
});
