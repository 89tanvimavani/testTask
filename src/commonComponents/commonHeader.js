import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../assets/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const CommonHeader = ({
  title,
  isHomeScreen,
  onPres,
  isBackButton,
  onBackPress,
}) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {justifyContent: isHomeScreen && 'space-between'},
      ]}>
      <StatusBar backgroundColor={Colors.primaryColor1} />
      {isBackButton && (
        <TouchableOpacity onPress={onBackPress}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={25}
            color={Colors.white}
          />
        </TouchableOpacity>
      )}
      <Text style={[styles.titleTextStyle, {marginLeft: isBackButton && 15}]}>
        {title}
      </Text>
      {isHomeScreen && (
        <TouchableOpacity onPress={onPres}>
          <MaterialCommunityIcons
            name="arrow-right-thin-circle-outline"
            size={25}
            color={Colors.white}
          />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor1,
    paddingVertical: 20,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTextStyle: {
    color: Colors.white,
    fontSize: 17,
    fontWeight: '800',
  },
});
