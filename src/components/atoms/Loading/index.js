import React from 'react';
import { Modal, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';
import { colors, fonts } from '../../../utils'

const Loading = ({ type }) => {

    if (type == "loading_screen") {
        return (
            <View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={true}
                >
                    <View style={styles.container}>
                        <LottieView source={require('../../../assets/lottie/loading.json')} autoPlay loop style={{ width: 100 }} />
                    </View>
                </Modal>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView source={require('../../../assets/lottie/loading.json')} autoPlay loop style={{ width: 100 }} />
        </View>
    )
}

export default Loading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.70)',
    }
});