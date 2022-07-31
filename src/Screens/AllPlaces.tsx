import { PlaceList } from '@/Components';
import { PlaceType } from '@/types';
import { View, Text } from 'react-native';

const dummyPlaces = [
  {
    title: 'Warner Bros studio',
    imageUri: 'https://ecsmedia.pl/c/bugs-bunny-on-broadway-b-iext70232198.jpg',
    address: 'USA CA',
    location: { lat: 34.1489721891448, lng: -118.33720261907804 },
    id: new Date().toString + Math.random().toString()
  }
];

const AllPlaces = () => {
  return (
    <View>
      <PlaceList places={[...dummyPlaces]} />
    </View>
  );
};

export default AllPlaces;
