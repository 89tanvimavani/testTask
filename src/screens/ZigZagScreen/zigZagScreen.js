import React from 'react';
import {styles} from './zigZagScreen.styles';
import {CommonHeader} from '../../commonComponents/commonHeader';
import {SafeAreaView} from 'react-native';

const ZigZagScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader title={'Zig Zag'} />
    </SafeAreaView>
  );
};

export default ZigZagScreen;
