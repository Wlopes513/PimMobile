import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const LoginScreen = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const signIn = () => {
    // Adicione aqui a lógica de login.
 };

 return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo da Empresa</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Entrar" onPress={signIn} />
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 },
 logo: {
    fontSize: 40,
    marginBottom: 40,
 },
 input: {
    width: '90%',
    height: 40,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    padding: 10,
 },
});

export default LoginScreen;
