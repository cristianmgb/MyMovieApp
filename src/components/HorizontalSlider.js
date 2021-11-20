/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {MovieCard} from './MovieCard';

export const HorizontalSlider = ({title, movies}) => {
  const _renderItem = item => {
    return (
      <MovieCard
        movie={item}
        width={120}
        height={170}
        marginHorizontal={5}
        marginVertical={5}
      />
    );
  };

  return (
    <View style={{marginVertical: 10}}>
      {title && <Text style={styles.flatlistText}>{title}</Text>}

      <FlatList
        data={movies}
        renderItem={({item}) => _renderItem(item)}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlistText: {
    marginHorizontal: 5,
    marginVertical: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
