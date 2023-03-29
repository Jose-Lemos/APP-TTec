import {StyleSheet, Text, View } from 'react-native';

const PantallaChat = (prop) => {
    return (
        <View >
            <Text style={styles.txtChat}>Estamos en el Chat</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    txtChat:{
        marginTop: 50,
    }
});

export default PantallaChat;