import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';


const FormButton = ({buttonTitle, handleFunc,...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handleFunc} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '90%',
    backgroundColor: '#303437',
    marginLeft: 18,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 30,
    height: 50,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});