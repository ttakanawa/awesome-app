import React, {useState, useEffect, AsyncStorage} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function Counter({title}) {
  const [count, setCount] = useState(0);
  const [sec, setSec] = useState(60);
  // 左がプロパティ、右がセッター、useStateの引数がプロパティの初期値

  // renderが描画されたあと(コミットされたあと)
  useEffect(() => {
    const timerId = setTimeout(() => {
      setSec(s => (s ? s - 1 : 60));
    }, 1000);
    return () => clearTimeout(timerId) ;
  }, [sec]);
  // return <Text style={{fontSize: 100, fontWeight: '900',}}>{sec}</Text>;
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 5,
    }}>
      <Text style={{flex: 2}}>{title}</Text>
      <Text style={{flex: 1}}>{count}回</Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Button title=" ⚡️ " onPress={() => setCount(0)} />
        <Button title=" + " onPress={() => setCount(count + 1)} />
      </View>
    </View>
  )
}