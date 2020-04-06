import React, {useState, useEffect, AsyncStorage} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default function CountDown() {
  const [sec, setSec] = useState(60);
  // 左がプロパティ、右がセッター、useStateの引数がプロパティの初期値

  // renderが描画されたあと(コミットされたあと)
  useEffect(() => {
    const timerId = setTimeout(() => {
      setSec(s => (s ? s - 1 : 60));
    }, 1000);
    return () => clearTimeout(timerId) ;
  }, [sec]);
  return <Text style={{fontSize: 100, fontWeight: '900',}}>{sec}</Text>;
} 