import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';


const FormInput = ({labelValue, placeholderText,  ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 20,
    width: '90%',
    borderColor: '#ccc',
    borderRadius: 30,
    borderWidth: 1,
    marginLeft: 18,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    lineHeight: 24,
  },
  
});