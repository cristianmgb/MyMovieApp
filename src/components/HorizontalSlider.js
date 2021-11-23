import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {MovieCard} from './MovieCard';

export const HorizontalSlider = ({title, movies}) => {
  const renderItem = item => {
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
      {title && <Text style={styles.title}>{title}</Text>}
      <FlatList
        data={movies}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 5,
    marginVertical: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
