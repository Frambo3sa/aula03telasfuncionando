import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Input, Button, Text, Avatar } from 'react-native-elements';

const Stack = createStackNavigator();

function telalogin({navigation}) {
  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>Login</Text>
     
      <Avatar
        size="large"
        rounded
        source={{ uri: "https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png" }}
      />

      <Input
      placeholder='Email'
      leftIcon={{type: 'material', name: 'email'}}
      keyboardType='email-adress'
      autoCapitalize='none'
      />
       <Input
      placeholder='senha'
      leftIcon={{type: 'material', name: 'lock'}}
      secureTextEntry
      />
      <Button
      title="Cadastrar"
      buttonStyle= {styles.button}
      onPress={()=> navigation.navigate('Cadastrar')}
      />
      <Button
      title="entrar"
      buttonStyle= {styles.button}
      onPress={()=> alert('Login feito')}
      />
      <Button
      title="Esqueceu a senha"
      buttonStyle= {styles.button}
      onPress={()=> navigation.navigate('RecSenha')}
      />
    </View>
  );
}


function Cadastrar({navigation}) {
  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>Login</Text>

      <Input
      placeholder='Email'
      leftIcon={{type: 'material', name: 'email'}}
      keyboardType='email-adress'
      autoCapitalize='none'
      />
       <Input
      placeholder='senha'
      leftIcon={{type: 'material', name: 'lock'}}
      secureTextEntry
      />
      <Button
      title="cadastre-se"
      buttonStyle= {styles.button}
      onPress={()=> navigation.navigate('telalogin')}
      />
    </View>
  );
}

function RecSenha() {
  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>RecuperarSenha</Text>

      <Input
      placeholder='nova senha'
      leftIcon={{type: 'material', name: 'lock'}}
      secureTextEntry
      />
       <Input
      placeholder='confirmar nova senha'
      leftIcon={{type: 'material', name: 'lock'}}
      secureTextEntry
      />
      <Button
      title="entrar"
      buttonStyle= {styles.button}
      onPress={()=> navigation.navigate('telalogin')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="telalogin">
        <Stack.Screen name="telalogin" component={telalogin} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} options={{ title: 'Cadastrar' }} />
        <Stack.Screen name="RecSenha" component={RecSenha} options={{ title: 'RecSenha' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 30,
  },
  button: {
    width: 200,
    marginTop: 10,
    marginBottom: 10,
  },
  clearButton: {
    color: 'gray',
  },
});
