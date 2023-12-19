import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutUsText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  highlightText: {
    fontWeight: 'bold',
    color: '#F5772B',
  },
  purposeText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'left',
    marginBottom: 20,
  },
  featuresText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'left',
    marginBottom: 20,
  },
});

function AboutUsScreen() {
  return (
    <ImageBackground source={require('../assets/blackbg.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.aboutUsText}>
          Welcome to <Text style={styles.highlightText}>AniMania</Text>! 🌟{'\n\n'}
        </Text>

        <Text style={styles.purposeText}>
          Our Purpose:
        </Text>
        <Text style={styles.aboutUsText}>
          At <Text style={styles.highlightText}>AniMania</Text>, we aim to create a revolutionary platform for anime and manga enthusiasts. Our mission is to provide a seamless and immersive experience, connecting users with their favorite anime and manga titles in innovative ways.{'\n\n'}
        </Text>

        <Text style={styles.featuresText}>
          Key Features:
        </Text>
        <Text style={styles.aboutUsText}>
          - <Text style={styles.highlightText}>Discover:</Text> Explore a vast collection of anime and manga titles from various genres.{'\n'}
          - <Text style={styles.highlightText}>Beta Features:</Text> Be among the first to test and experience cutting-edge features before the official release.{'\n'}
          - <Text style={styles.highlightText}>Community:</Text> Engage with fellow fans, share recommendations, and participate in discussions.{'\n'}
          - <Text style={styles.highlightText}>Feedback:</Text> Help shape the future of the app by providing valuable feedback and insights.{'\n\n'}
        </Text>

        <Text style={styles.aboutUsText}>
          Thank you for joining us on this exciting journey! Together, let's redefine the anime and manga experience.
        </Text>
      </View>
    </ImageBackground>
  );
}

export default AboutUsScreen;
