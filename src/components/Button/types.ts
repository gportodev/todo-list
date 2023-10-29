import { type Props as IconsProps } from '../Icon/types';
import { type TouchableHighlightProps } from 'react-native';

type Props = {
  iconProps: IconsProps;
} & TouchableHighlightProps;

export type { Props };
