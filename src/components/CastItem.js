import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';

export const CastItem = ({actor}) => {
  const uriPath = 'https://image.tmdb.org/t/p/w500' + actor.profile_path;
  return (
    <View style={styles.container}>
      {actor.profile_path ? (
        <Avatar rounded source={{uri: uriPath}} size={50} />
      ) : (
        <Avatar rounded title="N/A" />
      )}
      <View style={{paddindLeft: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>
          {actor.original_name}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>
          {'como ' + actor.character}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    shadowColor: 'grey',
    overflow: 'hidden',
    shadowOffset: {width: 0, height: 15},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    paddingRight: 10,
    paddingLeft: 5,
    marginRight: 10,
    marginTop: 5,
    paddingVertical: 5,
  },
});
