import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import { Top } from './index'

export const StartOfNightView = ({statueHolder, onSubmit, onMenu}) => {
  console.log("rendering StartOfNightView")
    console.log(statueHolder)
  return (
    <View>
    <Top statueHolder={statueHolder} onMenu={onMenu}/>
    <Button title="Rozpocznij grę" onPress={onSubmit} />
    </View>
  );
}

export default StartOfNightView
