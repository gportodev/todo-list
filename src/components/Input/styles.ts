import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { Sizes } from '../../constants/Size';

export default StyleSheet.create({
  container: {
    flexGrow: 0.95,
    width: 271,
    height: 54,
    backgroundColor: Colors.gray500,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.gray700,
    padding: 16,
    alignItems: 'center',
    gap: 8,
    fontSize: Sizes.big,
    fontFamily: Fonts.regular,
    lineHeight: 22.4,
    color: Colors.gray100,
  },
});
