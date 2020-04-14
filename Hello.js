import React, {useState, useContext, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  AsyncStorage,
  TextInput,
  NativeModules,
  Dimensions
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Counter from './Counter';
import ThemeContext from './ThemeContext';
import CountDown from './CountDown'

// const {width, height} = Dimensions.get('window');

export default function Hello() {
  const {theme} = useContext(ThemeContext);
  const [counterNames, setCounterNames] = useState([]); // カウンター名の配列
  const [text, setText] = useState('aiueo');

  useEffect(() => {
    const { DeviceInformation } = NativeModules
    console.log(DeviceInformation)
    DeviceInformation.getInfo('こんにちは', (...info) => {
      console.log(info)
    })
  }, []);

  useEffect(() => {
    AsyncStorage.getItem('counters').then(old => {
      // console.log('load', old);
      if (old) {
        setCounterNames(JSON.parse(old));
      } else {
        setCounterNames(['コーラ飲んだ', 'グミ食べた']);
      }
    });
  }, []);

  useEffect(() => {
    const json = JSON.stringify(counterNames);
    // console.log('save', json);
    AsyncStorage.setItem('counters', json).then();
  }, [counterNames]);

  return (
    <View style={[styles.container, styles[theme]]}>
      <CountDown/>
      <TextInput
        style={{
        width: Dimensions.get('window').width,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
      }}
        onChangeText={(inputValue) => setText(inputValue)}
        value={text}
        onSubmitEditing={() => {
          setCounterNames([...counterNames, text]);
          setText('');
        }}
        returnKeyType='done'
      />
      {counterNames.map((counterName, index) => (
        <Counter title={counterName} key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  light: {
    backgroundColor: 'white',
  },
  dark: {
    backgroundColor: '#666'
  }
});
