import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase.config';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AnimeCategoryScreen from './AnimeCategoryScreen';
import MangaCategoryScreen from './MangaCategoryScreen';

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
  userIcon: {
    position: 'absolute',
    top: 20,
    right: 30,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aniManiaText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#F5772B',
    marginBottom: 50,
  },
  BetaText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 5, 
    marginBottom: 60,
  },
  mostWatchText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    marginRight: 140,
  },
  logoContainer: {
    flexDirection: 'row',
    marginBottom: 80,
    marginRight: 5,
  },
  logoImage: {
    width: 115,
    height: 160,
    marginHorizontal: 5,
    marginRight: 10,
    marginBottom: 5,
  },
  logoTitle: {
    color: 'white',
    fontSize: 14,
    marginTop: 10,
    marginLeft: 15,
  },
  mangaText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 15,
    marginBottom: 15,
    marginRight: 220,
  },
  seeMoreText: {
    color: 'white',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  seeMoreText2: {
    color: 'white',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default function HomeScreen() {
  const navigation = useNavigation();
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // Handle the case when the user is not authenticated
      }
    });

    return () => unsubscribe();
  }, []);

  const handleAccount = () => {
    navigation.navigate('Account');
  };

  const handleMostWatchToday = () => {
    navigation.navigate('AnimeCategory');
  };

  const handleMostPopularManga = () => {
    navigation.navigate('MangaCategory');
  };

  const renderLogo = (imageSource, title, categoryScreen) => (
    <TouchableOpacity onPress={() => navigation.navigate(categoryScreen)} style={styles.logoImage}>
      <Image source={imageSource} style={styles.logoImage} />
      <Text style={styles.logoTitle}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={require('../assets/blackbg.jpg')} style={styles.background}>
      <View style={styles.container}>
        {/* User icon */}
        <TouchableOpacity style={styles.userIcon} onPress={handleAccount}>
          <MaterialCommunityIcons name="account" size={28} color="white" />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.aniManiaText}>AniMania</Text>
          <Text style={styles.BetaText}>ᵇᵉᵗᵃ</Text>
        </View>

        <TouchableOpacity onPress={handleMostWatchToday} style={{ flexDirection: 'row' }}>
          <Text style={styles.mostWatchText}>Most Watch Today 🌟</Text>
          <Text style={styles.seeMoreText} onPress={handleMostWatchToday}>
            See more...
          </Text>
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          {renderLogo(require('../assets/onepiece.png'), 'One Piece', 'AnimeCategory')}
          {renderLogo(require('../assets/jujutsukaisen.png'), 'Jujutsu Kaisen', 'AnimeCategory')}
          {renderLogo(require('../assets/frieren.png'), 'Frieren: Beyond Journeys End', 'AnimeCategory')}
        </View>

        <TouchableOpacity onPress={handleMostPopularManga} style={{ flexDirection: 'row' }}>
          <Text style={styles.mangaText}>Manga 📖</Text>
          <Text style={styles.seeMoreText2} onPress={handleMostPopularManga}>
            See more...
          </Text>
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          {renderLogo(require('../assets/bluelock.png'), 'Blue Lock', 'MangaCategory')}
          {renderLogo(require('../assets/chainsawman.png'), 'Chainsawman', 'MangaCategory')}
          {renderLogo(require('../assets/kagurabachi.png'), 'Kagurabachi', 'MangaCategory')}
        </View>
      </View>
    </ImageBackground>
  );
}
