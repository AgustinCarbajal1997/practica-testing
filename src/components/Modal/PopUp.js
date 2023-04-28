import React from 'react';
import {View, Modal, StyleSheet} from 'react-native';

const PopUp = ({visible, children}) => {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.modalBackground}>
        <View style={[styles.modalContainer]}>{children}</View>
      </View>
    </Modal>
  );
};

export default PopUp;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: '#00000044',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 20,
    overflow: 'hidden',
  },
});
