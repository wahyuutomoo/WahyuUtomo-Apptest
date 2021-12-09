import React, { useEffect, useState, useCallback, useRef } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SetListContact } from '../../redux/action'
import { DummyProfilePic, IcPlusRound } from '../../assets'
import { Gap, Header, Loading, ItemRnModalize } from '../../components';
import { ApiContact } from '../../network';
import { colors, cstyles, fonts } from '../../utils';


const ListContact = ({ navigation }) => {
    const dispatch = useDispatch();
    const modalizeRef = useRef(null);
    const onActiveRnModalize = useCallback(() => modalizeRef.current?.open(), []);
    const onCloseRnModalize = useCallback(() => modalizeRef.current?.close(), []);
    const { list_data } = useSelector((state) => state.ContactReducer);
    const [loading, setLoading] = useState(false)

    async function GetContact() {
        setLoading(true)
        await ApiContact.GetContact()
            .then((res) => {
                const { data } = res
                console.log("JSHKJSHS", res)
                dispatch(SetListContact(data))
            })
            .catch((err) => {
                console.log("errrr", err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const openDetailContact = (item) => {
        navigation.navigate("DetailContact", { item })
        console.log(item)
    }

    useEffect(() => {
        GetContact()
    }, [])


    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity key={index} onPress={() => openDetailContact(item)} style={{ ...cstyles.shadow(1), padding: 16, borderRadius: 10, marginVertical: 8 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={{ uri: item.photo }}
                        onError={() => console.log("error")}
                        style={{ width: 50, height: 50, borderRadius: 50 }}
                    />
                    <View>
                        <Text style={{ fontFamily: fonts.primary[600], color: colors.black, marginStart: 10 }}>{item?.firstName} {item?.lastName}</Text>
                        <Gap height={5} />
                        <Text style={{ fontFamily: fonts.primary[500], color: colors.black, marginStart: 10 }}>{item?.age}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <View style={{ flex: 1 }}>
                <Header title={"Kontak Saya"} />

                {
                    !loading ? (
                        <FlatList
                            data={list_data}
                            contentContainerStyle={{ paddingHorizontal: 15 }}
                            keyExtractor={(_, index) => index.toString()}
                            showsHorizontalScrollIndicator={false}
                            renderItem={renderItem}
                        />
                    ) : (
                        <Loading />
                    )
                }

                <TouchableOpacity onPress={() => navigation.navigate("AddContact")} style={{ position: 'absolute', bottom: 30, right: 25 }}>
                    <IcPlusRound width={70} height={70} />
                </TouchableOpacity>
            </View>
        </>

    )
}

export default ListContact

const styles = StyleSheet.create({})
