import { router } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useApp } from '@/context/AppContext';

export default function LotsScreen() {
  const { lots, setSelectedLot } = useApp();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Scrap Lots</Text>

        <Text style={styles.subtitle}>
          Every lot gets a unique traceable reference.
        </Text>

        {lots.map((lot) => (
          <TouchableOpacity
            key={lot.id}
            style={styles.card}
            onPress={() => {
              setSelectedLot(lot);
              router.push('/tracking');
            }}
          >
            <View style={styles.top}>
              <Text style={styles.id}>{lot.id}</Text>

              <Text style={styles.status}>{lot.status}</Text>
            </View>

            <Text style={styles.material}>
              {lot.material}
            </Text>

            <View style={styles.row}>
              <Text>{lot.category}</Text>
              <Text>{lot.weight} kg</Text>
              <Text style={styles.value}>
                ₹{lot.estimatedValue}
              </Text>
            </View>

            <Text style={styles.location}>
              📍 {lot.location}
            </Text>
          </TouchableOpacity>
        ))}
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
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
  },
  subtitle: {
    color: '#777',
    marginTop: 5,
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 2,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  id: {
    fontSize: 12,
    color: '#777',
    fontWeight: '700',
  },
  status: {
    color: '#1B7F3A',
    fontSize: 12,
    fontWeight: '700',
  },
  material: {
    fontSize: 18,
    fontWeight: '800',
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  value: {
    fontWeight: '800',
  },
  location: {
    color: '#777',
    marginTop: 10,
  },
});