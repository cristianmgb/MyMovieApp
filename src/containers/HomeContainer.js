import React, {useContext, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {GradientBackgraund} from '../components/GradientBackgraund';
import {MovieCard} from '../components/MovieCard';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {useMovies} from '../hooks/useMovies';
import {getImageColors} from '../utils/getImageColors';
import {GradientContext} from '../context/GradientContext';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
const HomeContainer = ({navigation}) => {
  const {setRootColors} = useContext(GradientContext);
  const {loading, nowPlaying, topRated, upComing} = useMovies();
  console.log('home', nowPlaying);

  const getCarouselColor = async index => {
    const movie = nowPlaying[index];
    const uriPath = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
    const [primary = 'red', secondary = 'blue'] = await getImageColors(
      movie.id,
      uriPath,
    );
    setRootColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getCarouselColor(0);
    }
  }, [nowPlaying]);

  if (loading) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size={100} color="red" />
      </View>
    );
  } else {
    return (
      <GradientBackgraund>
        <SafeAreaView>
          <View style={{...styles.carouselContainer, height: windowHeight / 2}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}) => <MovieCard movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              onSnapToItem={index => getCarouselColor(index)}
            />
          </View>
          <ScrollView style={{height: windowHeight / 2}}>
            <HorizontalSlider title="Top rated" movies={topRated} />
            <HorizontalSlider title="Upcoming" movies={upComing} />
          </ScrollView>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                style={{height: 25, width: 25, resizeMode: 'contain'}}
                source={require('../assets/settings.png')}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </GradientBackgraund>
    );
  }
};

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselContainer: {
    paddingVertical: 20,
  },
  backButton: {
    position: 'absolute',
    left: windowWidth - 45,
    top: 40,
    marginLeft: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.6,
    elevation: 1,
  },
});

export default HomeContainer;
