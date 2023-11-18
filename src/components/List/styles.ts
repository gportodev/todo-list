import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';
import { Sizes } from '../../constants/Size';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 32,
  },
  flatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  flatHeaderText: {
    fontFamily: Fonts.bold,
    fontSize: Sizes.medium,
    color: Colors.blue,
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counterView: {
    width: 24,
    height: 19,
    backgroundColor: Colors.gray400,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    color: Colors.gray200,
    fontFamily: Fonts.bold,
    fontSize: Sizes.small,
  },
  item: {
    width: '100%',
    height: 64,
    backgroundColor: Colors.gray500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: Colors.gray400,
    borderRadius: 8,
    shadowColor: 'red',
    elevation: 0.06,
    shadowRadius: 8,
    padding: 12,
    paddingLeft: 8,
    marginBottom: 8,
  },
  text: {
    fontFamily: Fonts.regular,
    fontSize: Sizes.medium,
    lineHeight: 19.6,
    color: Colors.gray100,
    width: 235,
    height: 40,
  },
});
