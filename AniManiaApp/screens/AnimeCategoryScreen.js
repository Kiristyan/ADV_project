import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  animeImage: {
    width: 110,
    height: 160,
    margin: 5,
    borderRadius: 2,
    marginTop: 50,
    marginRight: 10,
  },
  animeTitle: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
});

function AnimeCategoryScreen() {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    setFavorites((prevFavorites) => [...prevFavorites, item]);
  };



  const animeData = [
    { title: 'One Piece', source: require('../assets/onepiece.png') },
    { title: 'Jujutsu Kaisen', source: require('../assets/jujutsukaisen.png') },
    { title: 'Frieren: Beyond Journeys End', source: require('../assets/frieren.png') },
    { title: 'Attack on Titan: Final Season', source: require('../assets/aot.jpg') },
    { title: 'Demon Slayer', source: require('../assets/dslayer.jpg') },
    { title: 'Fullmetal Alchemist', source: require('../assets/fma.png') },
    { title: 'Dr. Stone', source: require('../assets/dstone.jpg') },
    { title: 'Mashle', source: require('../assets/mashle.jpg') },
    { title: 'Mushoku Tensei', source: require('../assets/mtensei.png') },
    { title: 'One Punch Man', source: require('../assets/opm.jpg') },
    { title: 'Steins: GATE', source: require('../assets/sgate.png') },
    { title: 'vinland Saga', source: require('../assets/vsaga.jpg') },
  ];

  const navigateToFavorites = () => {
    navigation.navigate('Favorites', { favorites }); // Pass favorites as a parameter
  };

  return (
    <ImageBackground source={require('../assets/blackbg.jpg')} style={styles.background}>
      <View style={styles.container}>
        <FlatList
          data={animeData}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.animeImage} onPress={() => addToFavorites(item)}>
              <Image source={item.source} style={styles.animeImage} />
              <Text style={styles.animeTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity onPress={navigateToFavorites}>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default AnimeCategoryScreen;