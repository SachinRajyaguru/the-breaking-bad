import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {HeartFavorite} from '../assets/svg-icons';
import {Typography, Colors, wp} from '../theme';

interface BreakingBadCharactersProps {
  char_id: string;
  name: string;
  nickname: string;
  img: string;
  isFavorite: boolean;
  onPress: () => void;
  onPressFavorite: () => void;
  style: StyleProp<ViewStyle>;
}

const BreakingBadCharacter = ({
  char_id,
  name,
  nickname,
  img,
  isFavorite,
  onPress,
  onPressFavorite,
  style,
}: BreakingBadCharactersProps) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('DetailsScreen')}
      style={[styles.mainContainer, style]}>
      <Image source={{uri: img}} style={styles.mainImage} />
      <View style={styles.details}>
        <View>
          <Text style={styles.lbl_name}>{name}</Text>
          <Text style={styles.lbl_nickname}>{nickname}</Text>
        </View>
        <Pressable onPress={onPressFavorite}>
          <HeartFavorite isFavourite={isFavorite} />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default BreakingBadCharacter;

const styles = StyleSheet.create({
  mainContainer: {},
  mainImage: {
    // height: 194,
    width: wp(40),
    aspectRatio: 3 / 4,
    borderRadius: 6,
    alignSelf: 'center',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginHorizontal: 8,
  },
  lbl_name: {
    fontFamily: Typography.ROBOTO_BOLD,
    fontSize: 16,
    lineHeight: 19,
    color: Colors.WHITE,
  },
  lbl_nickname: {
    fontFamily: Typography.ROBOTO_LIGHT,
    fontSize: 14,
    lineHeight: 16,
    color: Colors.WHITE,
  },
});
