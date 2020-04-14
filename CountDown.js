import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'


export default function CountDown() {
  const [sec, setSec] = useState(60);
  // 左がプロパティ、右がセッター、useStateの引数がプロパティの初期値

  // renderが描画されたあと(コミットされたあと)
  useEffect(() => {
    const timerId = setTimeout(() => {
      setSec(s => (s ? s - 1 : 60));
    }, 1000);
    return () => clearTimeout(timerId);
  }, [sec]);
  return <Text style={{alignItems: 'center'}}>{sec}</Text>;
}