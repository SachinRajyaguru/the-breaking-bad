import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {BreakingBadCharacters} from '@components';
import {fetchCharacters} from '@redux/actions';
import {toggleFavorite} from '@redux/slices/slice-characters';
import {useDispatch, useSelector} from 'react-redux';
import {wp} from '../../theme';

const FavouriteListScreen = ({route, navigation}) => {
  const arrFavoriteCharacters = useSelector(state =>
    state.characterReducer.characters.filter(character => character.isFavorite),
  );
  const dispatch = useDispatch();

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={arrFavoriteCharacters}
        numColumns={2}
        keyExtractor={(item, index) => item.char_id}
        columnWrapperStyle={{
          marginHorizontal: wp(2),
          marginVertical: wp(2),
        }}
        renderItem={({item, index}) => {
          return (
            <BreakingBadCharacters
              char_id={item.char_id}
              name={item.name}
              nickname={item.nickname}
              img={item.img}
              isFavorite={item.isFavorite}
              onPressFavorite={() => {
                dispatch(toggleFavorite({index: index}));
              }}
              style={{
                width: wp(46),
                marginHorizontal: wp(1),
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default FavouriteListScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
