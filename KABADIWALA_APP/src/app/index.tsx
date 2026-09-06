import { router } from 'expo-router';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>♻️</Text>

        <Text style={styles.title}>Scrap2Cash</Text>

        <Text style={styles.tagline}>
          Turn Scrap Into Cash.
          {'\n'}
          Connect. Recycle. Earn.
        </Text>

        <Text style={styles.description}>
          A digital bridge between scrap collectors and authorized recyclers.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/role')}
        >
          <Text style={styles.buttonText}>Get Started →</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          Kabadiwala Connect • SIH 2026
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9F7',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 28,
  },
  logo: {
    fontSize: 64,
    textAlign: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    textAlign: 'center',
  },
  tagline: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 18,
    lineHeight: 30,
  },
  description: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 18,
    marginBottom: 45,
  },
  button: {
    backgroundColor: '#1B7F3A',
    paddingVertical: 17,
    borderRadius: 14,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
  },
  footer: {
    textAlign: 'center',
    marginTop: 35,
    color: '#888',
    fontSize: 12,
  },
});