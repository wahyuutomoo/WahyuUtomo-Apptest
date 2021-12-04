import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts, colors } from '../../../utils';

const Header = ({ title }) => {
    return (
        <View style={{ backgroundColor: colors.primary, padding: 15 }}>
            <Text style={{ fontFamily: fonts.primary[600], fontSize: 16, color: colors.white }}>{title}</Text>
        </View>
    )
}

export default Header;
