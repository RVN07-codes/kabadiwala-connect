import { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { router } from 'expo-router';

import { useApp } from '@/context/AppContext';

const statuses = [
  'Listed',
  'Pickup Requested',
  'Accepted',
  'Picked Up',
  'Handover Completed',
  'Payment Completed',
];

export default function TrackingScreen() {
  const { selectedLot, updateLot } = useApp();

  const [currentIndex, setCurrentIndex] = useState(
    Math.max(
      0,
      statuses.indexOf(selectedLot?.status || 'Listed')
    )
  );

  const nextStatus = () => {
    if (!selectedLot) return;

    if (currentIndex < statuses.length - 1) {
      const nextIndex = currentIndex + 1;

      setCurrentIndex(nextIndex);

      updateLot(selectedLot.id, {
        status: statuses[nextIndex] as any,
      });
    } else {
      Alert.alert(
        'Transaction Complete',
        'The scrap lot has completed the recycling chain.'
      );
    }
  };

  if (!selectedLot) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <Text>No scrap lot selected.</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.replace('/collector')}
          >
            <Text style={styles.buttonText}>Go Home</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Lot Tracking</Text>

        <Text style={styles.lotId}>{selectedLot.id}</Text>

        <View style={styles.summary}>
          <Text style={styles.material}>
            {selectedLot.material}
          </Text>

          <Text>
            {selectedLot.weight} kg • ₹{selectedLot.estimatedValue}
          </Text>
        </View>

        <View style={styles.timeline}>
          {statuses.map((status, index) => {
            const completed = index <= currentIndex;

            return (
              <View style={styles.timelineRow} key={status}>
                <View
                  style={[
                    styles.dot,
                    completed && styles.completed,
                  ]}
                />

                <View style={styles.timelineText}>
                  <Text
                    style={[
                      styles.status,
                      completed && styles.statusCompleted,
                    ]}
                  >
                    {status}
                  </Text>

                  {index === currentIndex && (
                    <Text style={styles.current}>
                      Current status
                    </Text>
                  )}
                </View>
              </View>
            );
          })}
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={nextStatus}
        >
          <Text style={styles.buttonText}>
            {currentIndex === statuses.length - 1
              ? 'Complete'
              : 'Simulate Next Status →'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => router.replace('/collector')}
        >
          <Text>← Back to Dashboard</Text>
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
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
  },
  lotId: {
    color: '#777',
    marginTop: 5,
  },
  summary: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 16,
    marginTop: 20,
  },
  material: {
    fontSize: 19,
    fontWeight: '800',
    marginBottom: 5,
  },
  timeline: {
    marginTop: 30,
  },
  timelineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 22,
  },
  dot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#CCC',
  },
  completed: {
    backgroundColor: '#1B7F3A',
    borderColor: '#1B7F3A',
  },
  timelineText: {
    marginLeft: 15,
  },
  status: {
    color: '#999',
    fontWeight: '600',
  },
  statusCompleted: {
    color: '#222',
  },
  current: {
    color: '#1B7F3A',
    fontSize: 12,
    marginTop: 3,
  },
  button: {
    backgroundColor: '#1B7F3A',
    padding: 16,
    borderRadius: 12,
    marginTop: 15,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '800',
  },
  homeButton: {
    padding: 16,
    alignItems: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});