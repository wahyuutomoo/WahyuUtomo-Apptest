import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Header } from '../../components';
import { colors, fonts } from '../../utils';

const DetailContact = ({ navigation, route }) => {
    const { item } = route.params;

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <Header title={"Detail Saya"} />

            <View style={{ flex: 1, paddingHorizontal: 15, padding: 15 }}>
                <Image
                    source={{ uri: item.photo }}
                    style={{ width: 100, height: 100, borderRadius: 100, alignSelf: 'center', marginBottom: 10 }}
                />

                <Text style={{ alignSelf: 'center', fontFamily: fonts.primary[700], color: colors.black }}>{item.firstName} {item.lastName}</Text>
                <Text style={{ alignSelf: 'center', fontFamily: fonts.primary[500], color: colors.black }}>{item.age} Tahun</Text>
            </View>
        </View>
    )
}

export default DetailContact

const styles = StyleSheet.create({})
