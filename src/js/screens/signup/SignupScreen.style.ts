import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  flex1: {flex: 1},

  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  widthInput: {width: '47%'},
  containerDatePinker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'rgb(179,189,197)',
    borderBottomWidth: 1,
  },
  colorWhite: {color: 'rgb(179,189,197)'},
  dateIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
    marginLeft: 0,
  },
  dateInput: {
    marginLeft: 36,
    borderColor: 'rgb(179,189,197)',
  },
  containerRadio: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
    borderBottomColor: 'rgb(179,189,197)',
    borderBottomWidth: 1,
  },
  radioStyle: {flexDirection: 'row', alignItems: 'center', flex: 1},
  containerContentForm: {
    borderWidth: 1,
    borderColor: 'rgb(179,189,197)',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  containerImageBackground: {position: 'relative'},
  height200: {height: 200},
  containerAvatar: {
    position: 'absolute',
    height: 150,
    width: 150,
    bottom: '10%',
    left: '30%',
  },
  avatarStyle: {
    height: 150,
    width: 150,
    borderRadius: 200,
    borderColor: 'rgb(179,189,197)',
    borderWidth: 2,
  },

  textAlign: {textAlign: 'center'},
  flex2: {flex: 2},
  textDate: {
    textAlign: 'center',
    paddingVertical: 10,
  },
  styleAppBar: {
    height: 70,
    backgroundColor: 'transparent',
    width: '100%',
  },
  styleCustom: {
    position: 'relative',
  },
  styleCustomItem: {
    position: 'absolute',
  },
  styleCustomItem1: {
    left: '25%',
    top: '20%',
  },
  marginHorizontal20: {marginHorizontal: 50, marginBottom: 40},

  styleCustomItem2: {position: 'absolute', left: '22%', top: '20%'},
  containerButton: {position: 'absolute', bottom: 0, flex: 1, width: '100%'},
  styleButton: {
    height: 50,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgb(179,189,197)',
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: 'rgb(42,20,73)',
  },
  styleMale: {marginLeft: 15},
});
