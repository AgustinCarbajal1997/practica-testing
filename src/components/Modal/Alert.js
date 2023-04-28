import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import React from 'react';
const AlertWithOneOption = ({setAlert, title, desc, textFirstButton}) => {
  return (
    <View style={styles.container} testID="alert-component">
      <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
        <TouchableWithoutFeedback onPress={() => setAlert(false)}>
          <View testID="cross-close">
            <Text>X</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
      <View style={styles.buttons}>
        <TouchableWithoutFeedback onPress={() => setAlert(false)}>
          <View>
            <Text style={styles.button}>{textFirstButton}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AlertWithOneOption;

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    paddingVertical: 20,
    paddingHorizontal: 7,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  desc: {
    paddingVertical: 20,
    fontSize: 13,
    textAlign: 'center',
    color: 'black',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    padding: 6,
    borderRadius: 23,
    marginLeft: 20,
    paddingHorizontal: 45,
    paddingVertical: 10,
  },
});
