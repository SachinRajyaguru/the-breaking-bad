import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {HeartFavorite} from '@assets/svg-icons';

const HeartFavoriteButton = ({onPress, style, isFavourite}) => {
  return (
    <Pressable onPress={onPress} style={[styles.mainContainer, style]}>
      <HeartFavorite isFavourite={true} />
    </Pressable>
  );
};

export default HeartFavoriteButton;

const styles = StyleSheet.create({
  mainContainer: {
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
});
