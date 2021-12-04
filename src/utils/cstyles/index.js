import { StyleSheet } from 'react-native';

export const cstyles = StyleSheet.create({
  shadow: (shadow = 2) => ({
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.82,
    shadowRadius: 10,
    // margin: 5,
    elevation: shadow,
  }),
});