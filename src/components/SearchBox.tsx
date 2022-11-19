import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  Pressable,
  PressableProps,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {useHeaderHeight} from '@react-navigation/elements';
import {Typography, Colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

interface SearchBoxProps {
  textInputProps: TextInputProps;
  onPressX: () => void;
  onChangeText: (text: string) => void;
  searchText: string;
}

const SearchBox = (props: SearchBoxProps) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <Pressable onPress={() => navigation.goBack()}>
        <FeatherIcon name={'arrow-left'} size={24} color={'white'} />
      </Pressable>
      <TextInput
        style={styles.textInput}
        placeholder={'Search'}
        placeholderTextColor={'white'}
        onChangeText={props.onChangeText}
        value={props.searchText}
        {...props.textInputProps}
      />
      <Pressable onPress={() => props.onChangeText('')}>
        <FeatherIcon name={'x'} size={24} color={'white'} />
      </Pressable>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#242424',
    height: 86,
    paddingHorizontal: 16,
  },
  textInput: {
    flex: 1,
    margin: 0,
    padding: 0,
    fontSize: 36,
    fontFamily: Typography.ROBOTO_LIGHT,
    paddingHorizontal: 16,
    color: Colors.WHITE,
  },
});
