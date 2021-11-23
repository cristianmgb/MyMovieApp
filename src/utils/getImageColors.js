import ImageColors from 'react-native-image-colors';

export const getImageColors = async (key, uri) => {
  let primary = '';
  let secondary = '';

  const result = await ImageColors.getColors(uri, {
    fallback: '#084F6A',
    cache: true,
    key: key.toString(),
  });

  if (result) {
    if (result.platform === 'android') {
      primary = result.dominant;
      secondary = result.average;
    } else if (result.platform === 'ios') {
      primary = result.primary;
      secondary = result.secondary;
    } else {
      throw new Error('Platform not supported');
    }
  }
  return [primary, secondary];
};
