import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {MovieDetails} from '../components/MovieDetail';
import {useMovieDetails} from '../hooks/useMovieDetails';

const MovieDetailsContainer = ({route, navigation}) => {
  const movie = route.params.movie;
  const uriPath = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;

  const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

  const {isLoading, movieFull, cast} = useMovieDetails(movie.id);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={{...styles.movieImage, height: windowHeight * 0.7}}
            resizeMode="stretch"
            source={{uri: uriPath}}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>
            Original Title: {movie.original_title}
          </Text>
          <Text style={styles.infoTitle}>{movie.title}</Text>
        </View>
        <View style={{flex: 1, marginTop: 10}}>
          {isLoading ? (
            <ActivityIndicator size={50} color="red" />
          ) : (
            <MovieDetails movieFull={movieFull} cast={cast} />
          )}
        </View>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{height: 36, width: 36}}
              source={require('../assets/back.png')}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: 'white',
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  movieImage: {
    flex: 1,
  },
  infoContainer: {
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  infoTitle: {
    fontSize: 18,
  },
  backButton: {
    position: 'absolute',
    marginLeft: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.6,
    elevation: 1,
  },
  textButton: {
    color: 'white',
  },
});

export default MovieDetailsContainer;
