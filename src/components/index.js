import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native'
import * as cards from '../cards'

export const StatueHolder = ({statueHolder}) => {
  let pos = ''
  if (statueHolder !== null) {
    pos = 'Posążek: [' + cards[statueHolder.faction][statueHolder.role].name + ', ' + statueHolder.name + ']'
  }
  return (
    <View>
      <Text>
        {pos}
      </Text>
    </View>
  )
}

export const Top = ({statueHolder, onMenu}) => {
  return (
    <View>
      <Button title='Menu' onPress={onMenu} />
      <StatueHolder statueHolder={statueHolder} />
    </View>
  )
}

export default { Top }
