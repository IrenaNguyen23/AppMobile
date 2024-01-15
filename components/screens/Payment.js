import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';

const PaymentSelectionScreen = ({ navigation }) => {
  const handlePaymentSelection = (paymentMethod) => {
    // Xử lý chọn hình thức thanh toán tại đây
    console.log('Selected payment method:', paymentMethod);
    ToastAndroid.show('Items will be Deliverd SOON!', ToastAndroid.SHORT);
    navigation.navigate("Home");

    // Chuyển hướng hoặc thực hiện các bước tiếp theo tùy theo nhu cầu của bạn
  };

  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>Chọn phương thức thanh toán</Text>
      <TouchableOpacity onPress={() => handlePaymentSelection('momo')}>
        <View style={styles.paymentOption}>
          <Image
            source={require('../databases/images/payment/momo.png')}
            style={styles.paymentIcon}
          />
          <Text style={styles.paymentText}>Momo</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePaymentSelection('vnpay')}>
        <View style={styles.paymentOption}>
          <Image
            source={require('../databases/images/payment/vnpay.png')}
            style={styles.paymentIcon}
          />
          <Text style={styles.paymentText}>VNPay</Text>
        </View>
      </TouchableOpacity>

      {/* Thêm các tùy chọn thanh toán khác nếu cần */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
  },
  paymentIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  paymentText: {
    fontSize: 18,
  },
  headerText:{
    fontSize: 18,
    marginBottom: 20,
  },
});

export default PaymentSelectionScreen;
