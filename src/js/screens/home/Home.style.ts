import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundColor: {backgroundColor: 'rgb(19,97,140)'},
  containerTop: {
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paddingOne: {paddingHorizontal: 20},
  paddingTwo: {paddingVertical: 10},
  marginOne: {marginVertical: 20},
  alignItems: {alignItems: 'center'},
  buttonLogout: {
    backgroundColor: 'rgb(19,97,140)',
    width: 90,
    borderRadius: 10,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
  },
  textButtonLogout: {
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
  },
  flexRow: {flexDirection: 'row'},
  textUser: {color: 'white', fontSize: 20},
  flexOne: {flex: 1},
  flexTwo: {flex: 5},
  flexThree: {flex: 4},
  input: {
    height: 40,
    borderBottomWidth: 1,
    marginRight: 20,
  },
  label: {
    paddingTop: 15,
    marginRight: 10,
  },
  color: {color: 'black'},
});
