import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'

const CustomText = ({ children, className }) => {
    return (
        <Text style={className !== '' ? tailwind(`${className}`): ''}>
           {children}
        </Text>
    )
}

export default CustomText
