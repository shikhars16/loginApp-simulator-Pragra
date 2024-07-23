import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { tw } from 'tailwind-react-native-classnames';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }
    // Handle password reset logic here
    Alert.alert('Success', 'Password reset link sent to your email.');
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-gray-100`}>
      <View style={tw`w-11/12 bg-white p-6 rounded-lg shadow-lg`}>
        <Text style={tw`text-2xl font-bold text-center text-gray-800 mb-4`}>
          Forgot Password
        </Text>
        <TextInput
          style={tw`border border-gray-300 p-3 rounded-lg mb-4`}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity
          style={tw`bg-blue-500 p-3 rounded-lg`}
          onPress={handleForgotPassword}
        >
          <Text style={tw`text-white text-center font-semibold`}>
            Send Reset Link
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;
