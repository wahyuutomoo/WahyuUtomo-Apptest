import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Divider = ({ height, color, width, marginLeft, marginHorizontal, alignSelf, marginVertical, marginTop, marginBottom }) => (
  <View style={{ height, backgroundColor: color, width, marginLeft, marginHorizontal, alignSelf, marginVertical, marginTop, marginBottom }} />
);

export default Divider;