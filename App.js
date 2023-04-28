import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListNews from './src/components/ListNews';
import Modal from './src/components/Modal';

const App = () => {
  return (
    <View style={styles.container}>
      <ListNews />
      <Modal />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({container: {flex: 1}});
