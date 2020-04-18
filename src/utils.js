import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import { NavigationActions, StackActions } from 'react-navigation';

const isEmailValid = email => {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const navigateToDashboard = navigation => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Dashboard' })]
  });

  navigation.dispatch(resetAction);
};

const storeTokenAndCurrentDate = async token => {
  try {
    await AsyncStorage.setItem('@token', token);
    await AsyncStorage.setItem('@date', moment().format());
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error storing token and date', e);
  }
};

const isTokenValid = async () => {
  try {
    const value = await AsyncStorage.getItem('@date');
    if (value) {
      const today = moment();
      const duration = moment.duration(today.diff(value));
      return duration.asDays() > 0;
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error checking token validity', e);
  }

  return false;
};

// eslint-disable-next-line consistent-return
const readToken = async () => {
  try {
    return await AsyncStorage.getItem('@token');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error reading token', e);
  }
};

export {
  isEmailValid,
  navigateToDashboard,
  storeTokenAndCurrentDate,
  isTokenValid,
  readToken
};
