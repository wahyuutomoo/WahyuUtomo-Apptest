import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors, fonts } from '../../../utils';

const Dot = ({
    top, bottom, left, right, color, titleDot, width = 18, height = 18
}) => (
    <View style={[styles.container(top, bottom, left, right, color, width, height), { alignItems: 'center' }]}>
        <Text style={{ fontFamily: fonts.primary[500], alignSelf: 'center', color: colors.white, fontSize: 10, marginBottom: -3 }}>{titleDot}</Text>
    </View>
);

export default Dot;

const styles = StyleSheet.create({
    container: (top, bottom, left, right, color, width, height) => ({
        width,
        height,
        position: 'absolute',
        top,
        bottom,
        left,
        right,
        backgroundColor: color,
        borderRadius: 18,
        justifyContent: 'center'
    }),
});