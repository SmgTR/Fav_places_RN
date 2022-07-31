import { PlacesListType, PlaceType } from '@/types';
import { FC } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PlaceItem from './PlaceItem';

const PlacesList: FC<PlacesListType> = ({ places }) => {
  function renderPlaceItem({ item }: { item: PlaceType }) {
    return <PlaceItem {...item} />;
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet</Text>
      </View>
    );
  } else {
    return (
      <FlatList data={places} keyExtractor={(place) => place.id} renderItem={renderPlaceItem} />
    );
  }
};

const styles = StyleSheet.create({
  fallbackContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fallbackText: {
    fontSize: 16
  }
});

export default PlacesList;
