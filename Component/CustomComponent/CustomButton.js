import React from 'react'
import { View, Text, Button, TouchableHighlight } from 'react-native'

const CustomButton = ({ children, className, title, color, onPress }) => {
    return (
      <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD">
      <Button title={title} color={color} onPress={onPress}/>
      </TouchableHighlight>
    )
}

export default CustomButton
