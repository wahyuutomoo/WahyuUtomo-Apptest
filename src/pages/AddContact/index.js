import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, ToastAndroid } from 'react-native';
import { DummyProfilePic } from '../../assets';
import { Input, Header, ButtonCustom } from '../../components';
import { useForm, getImageFromLibrary } from '../../utils';
import { ApiContact } from '../../network';


const AddContact = ({ navigation }) => {
    const [addContact, setAddContact] = useForm({});
    const [loading, setLoading] = useState(false)


    async function GetContact(firstName, lastName, age, photo) {
        setLoading(true)
        await ApiContact.PostContact(firstName, lastName, age, photo.uri)
            .then((res) => {
                const { data } = res
                console.log("dfgdfgdg", res)
                navigation.goBack()
            })
            .catch((err) => {
                console.log("errrr", err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const getImage = () => {
        getImageFromLibrary()
            .then((val) => {
                console.log(val)
                setAddContact('pic', val)
            })
    };

    const saveContact = () => {
        if (addContact.firstName && addContact.lastName && addContact.age) {
            GetContact(addContact.firstName, addContact.lastName, addContact.age, addContact?.pic ? addContact.pic : DummyProfilePic)
        } else {
            ToastAndroid.show("Lengkapi form terlebih dahulu.", ToastAndroid.SHORT)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Header title={"Tambah Kontak"} />

            <View style={{ flex: 1, paddingHorizontal: 15 }}>
                <TouchableOpacity onPress={() => getImage()} style={{ alignItems: 'center', marginVertical: 20 }} >
                    <Image
                        source={addContact?.pic ? addContact?.pic : DummyProfilePic}
                        style={{ width: 100, height: 100, borderRadius: 100, }}
                    />
                </TouchableOpacity>

                <Input
                    title={"First Name"}
                    value={addContact.firstName}
                    onChangeText={(value) => setAddContact('firstName', value)}
                />

                <Input
                    title={"Last Name"}
                    value={addContact.lastName}
                    onChangeText={(value) => setAddContact('lastName', value)}
                />

                <Input
                    title={"Age"}
                    value={addContact.age}
                    maxLength={2}
                    keyboardType={'number-pad'}
                    onChangeText={(value) => setAddContact('age', value.replace(/^[0-9]*\$/, ''))}
                />

                <ButtonCustom
                    title={"Simpan Kontak"}
                    onPress={() => saveContact()}
                />
            </View>
        </View>
    )
}

export default AddContact

const styles = StyleSheet.create({})
