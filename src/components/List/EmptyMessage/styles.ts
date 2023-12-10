import { StyleSheet } from 'react-native';
import Colors from '../../../constants/Colors';
import { Fonts } from '../../../constants/Fonts';
import { Sizes } from '../../../constants/Size';

export default StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    borderTopWidth: 1,
    borderColor: Colors.gray400,
  },
  text: {
    color: Colors.gray300,
    textAlign: 'center',
    fontFamily: Fonts.regular,
    fontSize: Sizes.medium,
    lineHeight: 19.6,
  },
});
