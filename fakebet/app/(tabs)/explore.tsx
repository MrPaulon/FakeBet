import { StyleSheet, Image, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#f87171', dark: '#353636' }}
      headerImage={
        <FontAwesome5
          size={310}
          color="#808080"
          name="fire"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Tendances :</ThemedText>
      </ThemedView>
      <ThemedText>Découvrez les derniers paris en cours :</ThemedText>
      
      <ThemedView className='filtresclass'>
        <Link href="/other" asChild>
          <Pressable>
            <Text>Home</Text>
          </Pressable>
        </Link>
        <Link href="/other" asChild>
          <Pressable>
            <Text>Home</Text>
          </Pressable>
        </Link>
      </ThemedView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#991b1b',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  filtresclass: {
    display: "flex",
    alignItems: 'flex-start',
    width: "100%",
  }
});
