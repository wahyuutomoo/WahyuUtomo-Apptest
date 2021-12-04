import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

const Loading = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView source={require('../../../assets/lottie/loading.json')} autoPlay loop style={{   width: 100 }} />
        </View>
    )
}

export default Loading;