import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const statuses = [
  'Pickup requested',
  'Kabadiwala accepted',
  'Kabadiwala on the way',
  'Scrap picked up',
  'Payment completed',
];

export default function TrackingScreen() {
  const [current, setCurrent] = useState(1);

  const nextStatus = () => {
    if (current < statuses.length - 1) {
      setCurrent(current + 1);
    } else {
      Alert.alert('Completed! 🎉', 'Your scrap transaction is complete.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => router.replace('/')}>
          <Text style={styles.back}>‹ Home</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Pickup tracking</Text>

        <View style={styles.statusCard}>
          <Text style={styles.live}>● LIVE STATUS</Text>

          <Text style={styles.statusTitle}>{statuses[current]}</Text>

          <Text style={styles.statusSub}>
            Raj Scrap Center • Bhusawal
          </Text>
        </View>

        <Text style={styles.heading}>Pickup progress</Text>

        <View style={styles.timeline}>
          {statuses.map((status, index) => {
            const completed = index <= current;

            return (
              <View key={status} style={styles.timelineRow}>
                <View style={styles.lineContainer}>
                  <View
                    style={[
                      styles.dot,
                      completed && styles.completedDot,
                    ]}
                  >
                    {completed && <Text style={styles.check}>✓</Text>}
                  </View>

                  {index !== statuses.length - 1 && (
                    <View
                      style={[
                        styles.line,
                        index < current && styles.completedLine,
                      ]}
                    />
                  )}
                </View>

                <View style={styles.timelineText}>
                  <Text
                    style={[
                      styles.status,
                      completed && styles.completedText,
                    ]}
                  >
                    {status}
                  </Text>

                  {index === current && (
                    <Text style={styles.now}>Current status</Text>
                  )}
                </View>
              </View>
            );
          })}
        </View>

        <View style={styles.orderCard}>
          <Text style={styles.orderTitle}>Pickup details</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Material</Text>
            <Text style={styles.value}>Plastic</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Quantity</Text>
            <Text style={styles.value}>5 kg</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Estimated value</Text>
            <Text style={styles.amount}>₹125</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={nextStatus}>
          <Text style={styles.buttonText}>
            {current === statuses.length - 1
              ? 'Transaction Complete'
              : 'Simulate Next Status →'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F9F7' },

  content: { padding: 20, flex: 1 },

  back: {
    color: '#176B3A',
    fontWeight: '700',
    marginBottom: 20,
  },

  title: {
    fontSize: 29,
    fontWeight: '900',
    color: '#17231C',
    marginBottom: 22,
  },

  statusCard: {
    backgroundColor: '#176B3A',
    borderRadius: 22,
    padding: 22,
    marginBottom: 28,
  },

  live: {
    color: '#BDE5C8',
    fontSize: 11,
    fontWeight: '800',
  },

  statusTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '900',
    marginTop: 10,
  },

  statusSub: {
    color: '#D0E9D7',
    marginTop: 6,
  },

  heading: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 18,
  },

  timelineRow: {
    flexDirection: 'row',
    minHeight: 55,
  },

  lineContainer: {
    width: 35,
    alignItems: 'center',
  },

  dot: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: '#DDE3DF',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },

  completedDot: {
    backgroundColor: '#176B3A',
  },

  check: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '900',
  },

  line: {
    width: 2,
    flex: 1,
    backgroundColor: '#DDE3DF',
  },

  completedLine: {
    backgroundColor: '#176B3A',
  },

  timelineText: {
    paddingLeft: 12,
  },

  status: {
    fontSize: 14,
    color: '#8A938D',
    fontWeight: '600',
  },

  completedText: {
    color: '#26352C',
    fontWeight: '800',
  },

  now: {
    color: '#176B3A',
    fontSize: 11,
    marginTop: 3,
  },

  orderCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginTop: 18,
  },

  orderTitle: {
    fontWeight: '800',
    fontSize: 15,
    marginBottom: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 9,
  },

  label: { color: '#7C867F', fontSize: 13 },
  value: { fontWeight: '700', fontSize: 13 },

  amount: {
    color: '#176B3A',
    fontWeight: '900',
    fontSize: 15,
  },

  button: {
    backgroundColor: '#176B3A',
    padding: 17,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 'auto',
  },

  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '800',
  },
});