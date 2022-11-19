import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {SearchIcon} from '@assets/svg-icons';

const SearchButton = ({onPress, style}) => {
  return (
    <Pressable onPress={onPress} style={[styles.mainContainer, style]}>
      <SearchIcon />
    </Pressable>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  mainContainer: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
