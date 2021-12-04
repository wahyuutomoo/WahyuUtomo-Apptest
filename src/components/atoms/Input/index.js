import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors, fonts } from '../../../utils'

const Input = ({ title, value, onChangeText, keyboardType, maxLength, placeholder, editable }) => {
    const [colorBorder, setColorBorder] = useState(colors.black)

    const onFocusForm = () => {
        setColorBorder(colors.primary)
    }

    const onBlurForm = () => {
        setColorBorder(colors.black)
    }

    return (
        <View>
            <Text style={{ fontFamily: fonts.primary[500], color: colors.black, marginBottom: 4 }}>{title}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                maxLength={maxLength}
                placeholder={placeholder}
                editable={editable}
                onFocus={onFocusForm}
                onBlur={onBlurForm}
                style={{ borderWidth: 1, fontFamily: fonts.primary[400], padding: 8, borderRadius: 7, marginBottom: 25, color: colors.black, borderColor: colorBorder }}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({})
