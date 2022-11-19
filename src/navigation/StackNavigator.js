import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  DetailsScreen,
  FavouriteListScreen,
  SearchScreen,
} from '../ui/screens';
import {Pressable, Text, View} from 'react-native';
import {Colors, Typography} from '../theme';
import {SearchButton, HeartFavoriteButton} from '@components';
import FeatherIcon from 'react-native-vector-icons/Feather';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer
      theme={{
        dark: false,
        colors: {
          card: Colors.BLACK,
          background: Colors.BLACK,
        },
      }}>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontFamily: Typography.ROBOTO_BOLD,
            fontSize: 23,
          },
          headerTitle: ({style, children, tintColor}) => {
            return <Text style={[style, {color: tintColor}]}>{children}</Text>;
          },
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({route, navigation}) => ({
            title: 'The Breaking bad',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: Colors.BLACK_V2,
            },
            headerRight: () => {
              return (
                <View style={{flexDirection: 'row', marginRight: 8}}>
                  <SearchButton
                    onPress={() => {
                      navigation.navigate('SearchScreen');
                    }}
                    style={{
                      marginHorizontal: 8,
                    }}
                  />
                  <HeartFavoriteButton
                    onPress={() => {
                      navigation.navigate('FavouriteListScreen');
                    }}
                    style={{
                      marginHorizontal: 8,
                    }}
                    isFavourite={false}
                  />
                </View>
              );
            },
          })}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FavouriteListScreen"
          component={FavouriteListScreen}
          options={({route, navigation}) => ({
            title: 'Favourites',
            headerTintColor: Colors.GREEN,
            headerLeft: null,
            headerStyle: {
              backgroundColor: Colors.GRAY,
            },
            headerRight: () => (
              <Pressable
                style={{marginRight: 8}}
                onPress={() => navigation.pop()}>
                <FeatherIcon name={'x'} size={24} color={Colors.WHITE} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {StackNavigator};
export default StackNavigator;
