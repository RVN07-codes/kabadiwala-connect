import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function PickupScreen() {
  const [time, setTime] = useState('5:00 PM');

  const bookPickup = () => {
    Alert.alert(
      'Pickup booked! 🎉',
      'Your pickup request has been sent to a nearby kabadiwala.',
      [
        {
          text: 'Track Pickup',
          onPress: () => router.replace('/tracking'),
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹ Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Schedule pickup</Text>
        <Text style={styles.subtitle}>
          Choose when you want our partner to collect your scrap.
        </Text>

        <Text style={styles.heading}>Pickup location</Text>

        <View style={styles.location}>
          <Text style={styles.pin}>📍</Text>

          <View style={{ flex: 1 }}>
            <Text style={styles.address}>Bhusawal, Maharashtra</Text>
            <Text style={styles.addressSub}>Your current location</Text>
          </View>

          <Text style={styles.change}>Change</Text>
        </View>

        <Text style={styles.heading}>Pickup date</Text>

        <View style={styles.dateRow}>
          <TouchableOpacity style={[styles.date, styles.active]}>
            <Text style={styles.day}>TODAY</Text>
            <Text style={styles.dateNumber}>5</Text>
            <Text style={styles.month}>SEP</Text>
          </TouchableOpacity>

          <View style={styles.date}>
            <Text style={styles.day}>TOM</Text>
            <Text style={styles.dateNumber}>6</Text>
            <Text style={styles.month}>SEP</Text>
          </View>

          <View style={styles.date}>
            <Text style={styles.day}>MON</Text>
            <Text style={styles.dateNumber}>7</Text>
            <Text style={styles.month}>SEP</Text>
          </View>
        </View>

        <Text style={styles.heading}>Pickup time</Text>

        <View style={styles.times}>
          {['3:00 PM', '5:00 PM', '7:00 PM'].map((t) => (
            <TouchableOpacity
              key={t}
              onPress={() => setTime(t)}
              style={[styles.time, time === t && styles.selectedTime]}
            >
              <Text
                style={[
                  styles.timeText,
                  time === t && styles.selectedTimeText,
                ]}
              >
                {t}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.heading}>Nearby kabadiwala</Text>

        <View style={styles.kabadiwala}>
          <View style={styles.kAvatar}>
            <Text>R</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.kName}>Raj Scrap Center</Text>
            <Text style={styles.kInfo}>⭐ 4.8 • 1.2 km away</Text>
            <Text style={styles.kInfo}>Usually responds in 5 min</Text>
          </View>

          <Text style={styles.verified}>✓</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={bookPickup}>
          <Text style={styles.buttonText}>Confirm Pickup</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F9F7' },
  content: { padding: 20 },

  back: {
    color: '#176B3A',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 20,
  },

  title: { fontSize: 29, fontWeight: '900', color: '#17231C' },

  subtitle: {
    color: '#78827B',
    marginTop: 6,
    marginBottom: 30,
    lineHeight: 20,
  },

  heading: {
    fontSize: 17,
    fontWeight: '800',
    color: '#27362D',
    marginBottom: 13,
    marginTop: 10,
  },

  location: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  pin: { fontSize: 25, marginRight: 12 },
  address: { fontWeight: '800', fontSize: 15 },
  addressSub: { color: '#858E88', fontSize: 12, marginTop: 3 },

  change: { color: '#176B3A', fontWeight: '700', fontSize: 12 },

  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  date: {
    backgroundColor: '#fff',
    width: '31%',
    padding: 14,
    borderRadius: 17,
    alignItems: 'center',
  },

  active: {
    backgroundColor: '#176B3A',
  },

  day: { fontSize: 10, fontWeight: '800', color: '#7D877F' },

  dateNumber: {
    fontSize: 26,
    fontWeight: '900',
    marginVertical: 3,
  },

  month: { fontSize: 10, color: '#7D877F', fontWeight: '700' },

  times: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  time: {
    width: '31%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 14,
    alignItems: 'center',
  },

  selectedTime: {
    backgroundColor: '#176B3A',
  },

  timeText: {
    fontWeight: '700',
    color: '#46534B',
    fontSize: 12,
  },

  selectedTimeText: { color: '#fff' },

  kabadiwala: {
    backgroundColor: '#fff',
    padding: 17,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },

  kAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DDEFE2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  kName: { fontWeight: '800', fontSize: 14 },
  kInfo: { color: '#7A857E', fontSize: 11, marginTop: 3 },

  verified: {
    color: '#176B3A',
    fontSize: 22,
    fontWeight: '900',
  },

  button: {
    backgroundColor: '#176B3A',
    padding: 17,
    borderRadius: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },
});