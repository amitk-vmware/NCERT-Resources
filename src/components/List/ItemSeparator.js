import React from 'react';
import {StyleSheet, View} from 'react-native';

const ItemSeparator = () => {
  const {divider} = styles;
  return <View style={divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: 'gray',
    margin: 10,
  },
});

export default ItemSeparator;
