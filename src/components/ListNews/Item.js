import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Item = ({data}) => {
  return (
    <View style={styles.container}>
      <Text>{data?.title?.rendered}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
