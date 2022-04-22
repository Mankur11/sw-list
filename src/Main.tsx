import React, {useCallback, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, SIZES} from '../constants';
import {IPeople} from './models/IPeople';
import {RootState} from './state';
import {fetchPeopleRequest} from './state/actions';
import NetInfo from '@react-native-community/netinfo';
import {actionTypes} from './state/Actionypes';
import {getOfStorage, sendToStorage} from './asyncStorage/storageMethods';

const Main = () => {
  const dispatch = useDispatch();

  let {pending, people} = useSelector((state: RootState) => state.people);

  const isConnected = useSelector(
    (state: any) => state.connectionState.isConnected,
  );

  useEffect(() => {
    async function setSavedPeople() {
      await sendToStorage('people', people);
    }
    async function getSavedPeople() {
      let _savedPeople: any = await getOfStorage('people');
      people = _savedPeople;
    }
    people && people.length > 0 ? setSavedPeople() : getSavedPeople();
  }, [people]);

  useEffect(() => {
    showConnectionAlert();
    dispatch(fetchPeopleRequest());
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      dispatch({
        type: actionTypes.SET_CONNECTION_INFO,
        payload: {
          isConnected: !state.isConnected,
        },
      });
    });
    return () => unsubscribe();
  }, []);

  const showConnectionAlert = useCallback(() => {
    !isConnected && Alert.alert('There is no internet connection');
  }, [isConnected]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.listWrapper}
        contentContainerStyle={pending ? styles.pendingStateWrapper : {}}>
        {!pending && people.length > 0 ? (
          people.map((p: IPeople) => (
            <View key={p.name} style={styles.textWrapper}>
              <Text style={styles.nameText}>{p.name}</Text>
              <Text style={styles.text}>height - {p.height}</Text>
              <Text style={styles.text}>gender - {p.gender}</Text>
              <Text style={styles.text}>born - {p.birth_year}</Text>
            </View>
          ))
        ) : pending ? (
          <View style={styles.activityIndicator}>
            <ActivityIndicator size={'large'} />
          </View>
        ) : (
          <View style={styles.textWrapper}>
            <Text style={styles.nameText}>Nothing found</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  listWrapper: {
    padding: SIZES.height * 0.02,
  },
  textWrapper: {
    paddingHorizontal: SIZES.width * 0.04,
    paddingVertical: SIZES.height * 0.02,
  },
  text: {
    fontSize: SIZES.height * 0.02,
    color: COLORS.fontColor,
  },
  nameText: {
    fontSize: SIZES.height * 0.02,
    fontWeight: '600',
    paddingBottom: SIZES.height * 0.02,
    color: COLORS.fontColor,
  },
  activityIndicator: {
    justifyContent: 'center',
  },
  pendingStateWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
export default Main;
