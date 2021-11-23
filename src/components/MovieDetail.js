import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import currencyFormatter from 'currency-formatter';
import {CastItem} from './CastItem';

export const MovieDetails = ({movieFull, cast}) => {
  const renderItem = item => {
    return <CastItem actor={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.movieDetailText}>{movieFull.vote_average}</Text>
        <Text style={styles.movieDetailText}>
          {' '}
          | {movieFull.genres.map(g => g.name).join(', ')}
        </Text>
      </View>
      <View style={{paddingVertical: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Synopsis:</Text>
        <Text>{movieFull.overview}</Text>
      </View>
      <View style={{paddingVertical: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Budget:</Text>
        <Text>{currencyFormatter.format(movieFull.budget, {code: 'USD'})}</Text>
      </View>
      <Text style={{fontSize: 20, fontWeight: 'bold', paddingVertical: 10}}>
        Casting:
      </Text>
      <FlatList
        data={cast}
        renderItem={({item}) => renderItem(item)}
        key={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{hetght: 60}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movieDetailText: {
    fontSize: 15,
    marginLeft: 5,
  },
});
