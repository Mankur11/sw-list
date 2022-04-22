import AsyncStorage from '@react-native-community/async-storage';

const getOfStorage = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key).then(res => {
      if (res) {
        return JSON.parse(res);
      }
    });
  } catch (error) {}
};

const clearStorage = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

const sendToStorage = async (key: string, value: any) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {}
};

export {getOfStorage, clearStorage, sendToStorage};
