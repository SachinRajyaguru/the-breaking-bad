import React, {useReducer, useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import {
  NoCharacterFound,
  SearchBox,
  BreakingBadCharacters,
} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {wp} from '../../theme';

const SearchScreen = ({route, navigation}) => {
  const insets = useSafeAreaInsets();
  const [input, setInput] = useState('');
  // local redux data setting
  const [results, setResults] = useState([]);
  const [searchTimer, setSearchTimer] = useState(null);

  const fetchData = text => {
    fetch(`https://www.breakingbadapi.com/api/characters?name=${text}`)
      .then(res => res.json())
      .then(res => {
        console.log(text);
        setResults(res);
      });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={{height: insets.top, backgroundColor: '#242424'}} />
      <SearchBox
        searchText={input}
        onChangeText={text => {
          if (searchTimer) {
            clearTimeout(searchTimer);
          }
          setInput(text);
          setSearchTimer(
            setTimeout(() => {
              fetchData(text);
            }, 500),
          );
        }}
      />
      <FlatList
        data={results}
        numColumns={2}
        keyExtractor={(item, index) => item.char_id}
        columnWrapperStyle={{
          marginHorizontal: wp(2),
          marginVertical: wp(2),
        }}
        ListEmptyComponent={NoCharacterFound}
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

export default SearchScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
