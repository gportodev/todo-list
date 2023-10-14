import type * as Icon from '@expo/vector-icons';

type FeatherIconNames = keyof (typeof Icon)['Feather']['glyphMap'];

export type Props = {
  name: FeatherIconNames;
  color: string;
  size: number;
};
