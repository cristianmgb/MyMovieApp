import AsyncStorage from '@react-native-async-storage/async-storage';

export const KEY_DATA_REGISTER = '@data_register';

const storeData = async (key, value) => {
  try {
    const val = JSON.stringify(value);
    await AsyncStorage.setItem(key, val);
  } catch (e) {
    console.log(e);
  }
};

const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (e) {
    console.log(e);
  }
};

const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
};

export {storeData, getData, removeData};
