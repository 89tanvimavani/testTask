import {View, Text, ToastAndroid, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getApi} from '../../services/api';
import {styles} from './homeScreen.styles';
import {CommonHeader} from '../../commonComponents/commonHeader';

const HomeScreen = ({navigation}) => {
  const [employeesList, setEmployeesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getEmployeesList();
  }, []);

  const getEmployeesList = () => {
    setIsLoading(true);

    const endPoint = 'employee/getEmployeeList.php';

    // API CALL FOR GETTING EMPLOYEES LIST
    getApi(endPoint)
      .then(response => {
        console.log('response =========>', response);
        setEmployeesList(response);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        ToastAndroid.show(
          'Something went wrong, please try again later!',
          ToastAndroid.SHORT,
        );
        setIsLoading(false);
      });
  };

  const handleHeaderOnPress = () => {
    navigation.navigate('SelEmployListScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader
        title={'Employees List'}
        isHomeScreen={true}
        onPres={handleHeaderOnPress}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
