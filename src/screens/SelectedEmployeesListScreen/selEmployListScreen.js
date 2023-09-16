import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {CommonHeader} from '../../commonComponents/commonHeader';
import {styles} from './selEmployListScreen.style';

const SelEmployListScreen = ({navigation}) => {
  const onBackPress = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader
        title={'Selected Employees'}
        isBackButton={true}
        onBackPress={onBackPress}
      />
    </SafeAreaView>
  );
};

export default SelEmployListScreen;
