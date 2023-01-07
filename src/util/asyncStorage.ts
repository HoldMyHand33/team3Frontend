import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (value: string) => {
  try {
    await AsyncStorage.setItem('token', value);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    console.log(error);
  }
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (!value) {
      console.log('토큰 없음');
    }

    return value;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    console.log(error);
  }
};
