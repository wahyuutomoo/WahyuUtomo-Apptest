import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { colors, fonts } from '../../../utils';

const ButtonCustom = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={{ backgroundColor: colors.primary, padding: 14, borderRadius: 6 }} >
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 15, color: colors.white, textAlign: 'center' }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonCustom;
