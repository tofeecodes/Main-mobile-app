import React from 'react'
import { View, Text, TextInput } from 'react-native'
import tailwind from 'tailwind-rn'

const CustomTextInput = ({className, value, onChange, placeholder}) => {
    return (
       <TextInput style={className !== '' ? tailwind(`${className}`): ''} onChange={onChange} value={value} placeholder={placeholder || ''}/>
    )
}

export default CustomTextInput
