import { Ionicons } from '@expo/vector-icons';
import { TextInputProps, GestureResponderEvent } from 'react-native';

export interface IconButtonType {
  icon: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string | undefined;
  onPress: (event: GestureResponderEvent) => void;
  testID?: string;
}
