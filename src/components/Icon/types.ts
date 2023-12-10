import type * as Icon from '@expo/vector-icons';
import { type ViewProps } from 'react-native';

type FeatherIconNames = keyof (typeof Icon)['Feather']['glyphMap'];
type IoniconsIconNames = keyof (typeof Icon)['Ionicons']['glyphMap'];

type IconFamilies =
  | {
      family: 'Feather';
      name: FeatherIconNames;
    }
  | {
      family: 'Ionicons';
      name: IoniconsIconNames;
    };

type Props = {
  name: string;
  color: string;
  size: number;
  style?: ViewProps;
} & Pick<IconFamilies, 'family'>;

export type { IconFamilies, Props };
