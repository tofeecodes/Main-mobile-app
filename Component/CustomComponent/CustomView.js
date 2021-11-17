import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'

const CustomView = ({ children, className }) => {
    return (
        <View style={className !== '' ? tailwind(`${className}`): ''}>
         {children}
        </View>
    )
}

export default CustomView
