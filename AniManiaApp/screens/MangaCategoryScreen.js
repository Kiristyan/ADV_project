import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

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

const animeData = [
  { title: 'Blue Lock', source: require('../assets/bluelock.png') },
  { title: 'Chainsawman', source: require('../assets/chainsawman.png') },
  { title: 'Kagurabachi', source: require('../assets/kagurabachi.png') },

  { title: 'Berserk', source: require('../assets/berserk.png') },
  { title: 'Vagabond', source: require('../assets/vaga.jpg') },
  { title: 'Record of Ragnarok', source: require('../assets/ragnarok.jpg') },

  { title: 'Komi Can`t Communicate ', source: require('../assets/komi.jpg') },
  { title: 'Spy X Family', source: require('../assets/spy.jpg') },
  { title: 'Sakamoto Days', source: require('../assets/sdays.jpeg') },

  { title: 'Solo Leveling', source: require('../assets/solo.jpg') },
  { title: 'Homunculus', source: require('../assets/homun.png') },
  { title: 'Black Clover', source: require('../assets/clover.jpg') },



 
];

function MangaCategoryScreen() {
  return (
    <ImageBackground source={require('../assets/blackbg.jpg')} style={styles.background}>
      <View style={styles.container}>

        <FlatList
          data={animeData}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.animeImage}>
              <Image source={item.source} style={styles.animeImage} />
              <Text style={styles.animeTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}

export default MangaCategoryScreen;
