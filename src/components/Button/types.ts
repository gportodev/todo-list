import { type Props as IconsProps } from '../Icon/types';
import { type TouchableOpacityProps } from 'react-native';

type Props = {
  iconProps: IconsProps;
} & TouchableOpacityProps;

export type { Props };
