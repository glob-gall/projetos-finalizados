import styled from 'styled-components/native'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { Platform } from 'react-native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`

export const Title = styled.Text`
  color: #f4ede8;
  font-size: 24px;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`
export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 36px;
`

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`
export const CreateAcountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232119;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const CreateAcountButtonText = styled.Text`
  color: #ff9000;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`
