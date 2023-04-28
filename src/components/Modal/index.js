import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useState} from 'react';
import PopUp from './PopUp';
import AlertWithOneOption from './Alert';

const Modal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView} testID="modal-component">
      <PopUp visible={modalVisible}>
        <AlertWithOneOption
          setAlert={() => setModalVisible(false)}
          title="Ocurrio un error"
          desc="Descripcion del error"
          textFirstButton="Aceptar"
        />
      </PopUp>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <View>
          <Text style={styles.textStyle}>Show Modal</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
