import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RnModalize from '../RnModalize';

const ItemRnModalize = ({
    modalizeRef,
    loading_modalize
}) => {
    return (
        <RnModalize ref={modalizeRef} withHandle={false} modalHeight={300} childrenMarginTop={5}>
            <Text>dfdfdf</Text>
        </RnModalize>
    )
}

export default ItemRnModalize;
