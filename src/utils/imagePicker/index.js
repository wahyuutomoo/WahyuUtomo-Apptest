import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


export const getImageLaunchCamera = () => {
    return new Promise((resolve, reject) => {
        launchCamera({ quality: 1, maxWidth: 620, maxHeight: 620 }, (response) => {
            try {
                const res = response.assets[0];
                if (!res.didCancel && !res.error) {
                    const image = {
                        uri: res.uri,
                        type: res.type,
                        name: res.fileName,
                    };
                    resolve(image)
                }
            } catch (error) {
                console.log(error)
                reject(error);
            }
        });
    });
};


export const getImageFromLibrary = () => {
    return new Promise((resolve, reject) => {
        launchImageLibrary({ quality: 1, maxWidth: 620, maxHeight: 620 }, (response) => {
            try {
                const res = response.assets[0];
                if (!res.didCancel && !res.error) {
                    const image = {
                        uri: res.uri,
                        type: res.type,
                        name: res.fileName,
                    };
                    resolve(image)
                }
            } catch (error) {
                reject(error);
            }
        });
    });
};