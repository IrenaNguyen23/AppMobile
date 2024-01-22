import axios from 'axios';
import { Box, Button, Center, FormControl, Heading, Input, VStack } from 'native-base';
import React, { useState } from 'react';
import { Alert } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpw, setConfirmPw] = useState('');

    const handleRegister = () => {
        let formData = {
            email: email,
            username: username,
            password: password,

        }
        if (!email || !username || !password || !confirmpw) {
            Alert.alert(` Vui lòng điền đầy đủ thông tin.`);
            return;
          }
        if (password !== confirmpw) {
            Alert.alert(` Mật khẩu và xác nhận mật khẩu không trùng khớp.`);
            return;
        }
        // Gửi yêu cầu đăng nhập đến API
        axios.post('https://65a998da219bfa3718698359.mockapi.io/user/auth', formData)
            .then((response) => {
                if (response.data) {
                    Alert.alert(` Đăng ký thành công! `);
                    navigation.navigate('Login');
                }
            })
            .catch((err) => console.log(err))
    }
    return <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Heading size="lg" color="coolGray.800" _dark={{
                color: "warmGray.50"
            }} fontWeight="semibold">
                Welcome
            </Heading>
            <Heading mt="1" color="coolGray.600" _dark={{
                color: "warmGray.200"
            }} fontWeight="medium" size="xs">
                Sign up to continue!
            </Heading>
            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>User Name</FormControl.Label>
                    <Input
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password"

                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Confirm Password</FormControl.Label>
                    <Input type="password"
                        onChangeText={(text) => setConfirmPw(text)}
                        value={confirmpw}
                    />
                </FormControl>
                <Button mt="2" colorScheme="indigo" onPress={handleRegister}>
                    Sign up
                </Button>
            </VStack>
        </Box>
    </Center>;
};

export default RegisterScreen;
