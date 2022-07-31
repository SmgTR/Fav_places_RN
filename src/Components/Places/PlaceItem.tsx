import { PlaceType } from '@/types';
import { FC } from 'react';
import { View, Text, ListRenderItemInfo, Image, Pressable } from 'react-native';

const PlaceItem: FC<PlaceType> = ({ id, imageUri, address, title, location }) => {
  return (
    <Pressable>
      <Image source={{ uri: imageUri }} />
      <View>
        <Text>{title}</Text>
        <Text>{address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;
