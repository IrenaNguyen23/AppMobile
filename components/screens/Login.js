import axios from 'axios';
import { Box, Center, FormControl, HStack, Heading, Input, Link, VStack, Button } from 'native-base';
import React, { useState } from 'react';
import { Text, Alert, TextInput } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Gửi yêu cầu đăng nhập đến API
    let formData = {
      username: username,
      password: password,
    };

    // Gửi yêu cầu đăng nhập đến API
    axios
      .get('https://65a998da219bfa3718698359.mockapi.io/user/auth', formData)
      .then((response) => {
        if (response.data.length > 0) {
          const matchingUser = response.data.find((user) => user.username === username && user.password === password);

          if (matchingUser) {
            // Tài khoản tồn tại và thông tin đăng nhập chính xác, có thể đăng nhập
            Alert.alert('Đăng nhập thành công!');
            navigation.navigate('Home');
            // Thực hiện các hành động cần thiết sau khi đăng nhập thành công
            // Ví dụ: Chuyển hướng sang màn hình chính
          } else {
            // Thông tin đăng nhập không chính xác
            Alert.alert('Thông tin đăng nhập không chính xác.');
          }
        } else {
          // Tài khoản không tồn tại
          Alert.alert('Tài khoản không tồn tại.');
        }
      })
      .catch((err) => {
        console.error(err);
        Alert.alert('Đã xảy ra lỗi. Vui lòng thử lại.');
      });
  };
  /*   return (
      /*   <View style={styles.container}>
          <Text>Login</Text>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <Button title="Login" onPress={handleLogin} />
          <Text 
           onPress={() => navigation.navigate('SignUp')}>
            Chưa có tài khoản?
          </Text>
        </View> */

  return <Center w="100%">
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
        Welcome
      </Heading>
      <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
        Sign in to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label>User Name</FormControl.Label>
          <Input value={username}
            onChangeText={setUsername} />
        </FormControl>
        <FormControl>
          <FormControl.Label>Password</FormControl.Label>
          <Input type="password" value={password}
            onChangeText={setPassword} />
          <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
            Forget Password?
          </Link>
        </FormControl>
        <Button mt="2" colorScheme="indigo" onPress={handleLogin} >
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
            I'm a new user.{" "}
          </Text>
          <Link
            onPress={() => navigation.navigate('SignUp')}
            _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm"
            }} >
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  </Center>;
};
export default LoginScreen;
