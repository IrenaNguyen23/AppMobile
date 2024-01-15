import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    username: username,
                    password: password,
                    name: {
                        firstname: firstname,
                        lastname: lastname,
                    },
                    address: {
                        city: city,
                        street: street,
                        number: number,
                        zipcode: zipcode,
                        geolocation: {
                            lat: lat,
                            long: long,
                        },
                    },
                    phone: phone,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Đăng ký thành công. Thông tin người dùng:', data);
                navigation.navigate('Login');
                // Xử lý khi đăng ký thành công, ví dụ: điều hướng đến màn hình chính
            } else {
                console.log('Đăng ký thất bại');
                // Xử lý khi đăng ký thất bại, ví dụ: hiển thị thông báo lỗi
                Alert.alert('Đăng ký thất bại', 'Vui lòng kiểm tra lại thông tin đăng ký.');
            }
        } catch (error) {
            console.error('Lỗi khi đăng ký:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.halfInput}>
                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập email"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.halfInput}>
                    <Text style={styles.label}>Username:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập tên đăng nhập"
                        onChangeText={(text) => setUsername(text)}
                        value={username}
                    />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.halfInput}>
                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập mật khẩu"
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.halfInput}>
                    <Text style={styles.label}>First Name:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập tên"
                        onChangeText={(text) => setFirstname(text)}
                        value={firstname}
                    />
                </View>
                <View style={styles.halfInput}>
                    <Text style={styles.label}>Last Name:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập họ"
                        onChangeText={(text) => setLastname(text)}
                        value={lastname}
                    />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.halfInput}>
                    <Text style={styles.label}>City:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập thành phố"
                        onChangeText={(text) => setCity(text)}
                        value={city}
                    />

                </View>
                <View style={styles.halfInput}>
                    <Text style={styles.label}>Street:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập đường"
                        onChangeText={(text) => setStreet(text)}
                        value={street}
                    />
                </View>
                <View style={styles.halfInput}>
                    <Text style={styles.label}>Number:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập số nhà"
                        onChangeText={(text) => setNumber(text)}
                        value={number}
                    />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.halfInput}>
                    <Text style={styles.label}>Zipcode:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập mã bưu chính"
                        onChangeText={(text) => setZipcode(text)}
                        value={zipcode}
                    />

                </View>
                <View style={styles.halfInput}>
                    <Text style={styles.label}>Latitude:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập vĩ độ"
                        onChangeText={(text) => setLat(text)}
                    />
                </View>
                <View style={styles.halfInput}>
                    <Text style={styles.label}>Longitude:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập kinh độ"
                        onChangeText={(text) => setLong(text)}
                        value={long}
                    />
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.halfInput}>
                    <Text style={styles.label}>Phone:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập số điện thoại"
                        onChangeText={(text) => setPhone(text)}
                        value={phone}
                    />
                </View>
            </View>

            <Button title="Đăng Ký" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 16,
    },
    halfInput: {
        flex: 1,
    },
    label: {
        fontSize: 16,
        marginBottom: 4,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 8,
    },
});

export default RegisterScreen;
