import { router } from 'expo-router';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useApp } from '@/context/AppContext';

export default function RoleScreen() {
  const { setRole } = useApp();

  const selectRole = (role: 'collector' | 'recycler') => {
    setRole(role);

    if (role === 'collector') {
      router.replace('/collector');
    } else {
      router.replace('/recycler');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Scrap2Cash</Text>

        <Text style={styles.subtitle}>
          How will you use the platform?
        </Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() => selectRole('collector')}
        >
          <Text style={styles.icon}>🛒</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Collector / Kabadiwala
            </Text>

            <Text style={styles.cardDescription}>
              Sell scrap, discover prices, find recyclers and track earnings.
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => selectRole('recycler')}
        >
          <Text style={styles.icon}>♻️</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>
              Authorized Recycler
            </Text>

            <Text style={styles.cardDescription}>
              Discover scrap lots, connect with collectors and manage
              handovers.
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
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
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginTop: 8,
    marginBottom: 35,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },
  icon: {
    fontSize: 36,
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '800',
  },
  cardDescription: {
    color: '#777',
    marginTop: 6,
    lineHeight: 20,
  },
  arrow: {
    fontSize: 30,
    color: '#1B7F3A',
  },
});