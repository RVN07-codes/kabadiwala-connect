import { router } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        <View style={styles.header}>
          <View>
            <Text style={styles.smallText}>Good morning 👋</Text>
            <Text style={styles.title}>Kabadiwala Connect</Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>K</Text>
          </View>
        </View>

        <View style={styles.locationBox}>
          <Text style={styles.location}>📍 Bhusawal, Maharashtra</Text>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>
            Turn Scrap Into Cash ♻️
          </Text>

          <Text style={styles.heroText}>
            Sell your recyclable waste easily and book a nearby pickup.
          </Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push('/sell')}
          >
            <Text style={styles.primaryButtonText}>
              Sell Scrap →
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Quick Actions</Text>

        <View style={styles.grid}>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/sell')}
          >
            <Text style={styles.icon}>♻️</Text>
            <Text style={styles.cardTitle}>Sell Scrap</Text>
            <Text style={styles.cardText}>
              Get an estimated value
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/ai')}
          >
            <Text style={styles.icon}>🤖</Text>
            <Text style={styles.cardTitle}>AI Identify</Text>
            <Text style={styles.cardText}>
              Identify your scrap
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/pickup')}
          >
            <Text style={styles.icon}>🚚</Text>
            <Text style={styles.cardTitle}>Book Pickup</Text>
            <Text style={styles.cardText}>
              Schedule a pickup
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/tracking')}
          >
            <Text style={styles.icon}>📍</Text>
            <Text style={styles.cardTitle}>Track Pickup</Text>
            <Text style={styles.cardText}>
              See pickup status
            </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.aiCard}>
          <Text style={styles.aiTitle}>🤖 Smart Scrap Identification</Text>

          <Text style={styles.aiText}>
            Not sure what type of scrap you have?
            Let our AI demo identify it for you.
          </Text>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => router.push('/ai')}
          >
            <Text style={styles.secondaryButtonText}>
              Try AI →
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9F7',
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  smallText: {
    fontSize: 14,
    color: '#6B7280',
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    marginTop: 4,
  },

  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#1B8A4B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
  },

  locationBox: {
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 14,
    marginBottom: 18,
  },

  location: {
    fontSize: 14,
    color: '#444',
  },

  hero: {
    backgroundColor: '#1B8A4B',
    padding: 22,
    borderRadius: 22,
    marginBottom: 28,
  },

  heroTitle: {
    color: 'white',
    fontSize: 27,
    fontWeight: '800',
  },

  heroText: {
    color: '#E8F7ED',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
    marginBottom: 18,
  },

  primaryButton: {
    backgroundColor: 'white',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  primaryButtonText: {
    color: '#1B8A4B',
    fontSize: 16,
    fontWeight: '800',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 14,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
  },

  icon: {
    fontSize: 28,
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '800',
  },

  cardText: {
    color: '#777',
    marginTop: 5,
    lineHeight: 18,
  },

  aiCard: {
    backgroundColor: '#EAF6EE',
    padding: 20,
    borderRadius: 20,
    marginTop: 10,
  },

  aiTitle: {
    fontSize: 18,
    fontWeight: '800',
  },

  aiText: {
    color: '#555',
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 15,
  },

  secondaryButton: {
    backgroundColor: '#1B8A4B',
    paddingVertical: 13,
    borderRadius: 12,
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: 'white',
    fontWeight: '800',
  },
});