import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const scraps = [
  { name: 'Paper', icon: '📄', rate: 12 },
  { name: 'Plastic', icon: '🧴', rate: 25 },
  { name: 'Metal', icon: '🔩', rate: 45 },
  { name: 'E-Waste', icon: '📱', rate: 80 },
];

export default function SellScreen() {
  const [selected, setSelected] = useState('Plastic');
  const [quantity, setQuantity] = useState(1);

  const scrap = scraps.find((x) => x.name === selected)!;
  const total = scrap.rate * quantity;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹ Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Sell your scrap</Text>
        <Text style={styles.subtitle}>
          Select the material you want to recycle.
        </Text>

        <Text style={styles.heading}>Scrap category</Text>

        <View style={styles.grid}>
          {scraps.map((item) => (
            <TouchableOpacity
              key={item.name}
              onPress={() => setSelected(item.name)}
              style={[
                styles.card,
                selected === item.name && styles.selectedCard,
              ]}
            >
              <Text style={styles.icon}>{item.icon}</Text>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.rate}>₹{item.rate}/kg</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.heading}>Quantity</Text>

        <View style={styles.quantityBox}>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Text style={styles.control}>−</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.quantity}>{quantity.toFixed(1)}</Text>
            <Text style={styles.kg}>kilograms</Text>
          </View>

          <TouchableOpacity
            style={styles.circle}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text style={styles.control}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.estimate}>
          <Text style={styles.estimateLabel}>Estimated value</Text>
          <Text style={styles.amount}>₹{total}</Text>
          <Text style={styles.calculation}>
            {quantity} kg × ₹{scrap.rate}/kg
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/pickup')}
        >
          <Text style={styles.buttonText}>Continue to Pickup →</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.aiButton}
          onPress={() => router.push('/ai')}
        >
          <Text style={styles.aiText}>✨ Identify with AI instead</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F9F7' },
  content: { padding: 20 },

  back: {
    fontSize: 16,
    color: '#176B3A',
    fontWeight: '700',
    marginBottom: 20,
  },

  title: {
    fontSize: 29,
    fontWeight: '900',
    color: '#17231C',
  },

  subtitle: {
    color: '#77817B',
    marginTop: 6,
    marginBottom: 30,
  },

  heading: {
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 14,
    color: '#26342B',
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 18,
    marginBottom: 14,
    borderWidth: 2,
    borderColor: 'transparent',
  },

  selectedCard: {
    borderColor: '#176B3A',
    backgroundColor: '#EDF7F0',
  },

  icon: { fontSize: 32, marginBottom: 12 },
  name: { fontSize: 15, fontWeight: '800', color: '#27372D' },

  rate: {
    marginTop: 5,
    color: '#176B3A',
    fontSize: 12,
    fontWeight: '700',
  },

  quantityBox: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  circle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EAF3EC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  control: {
    fontSize: 26,
    color: '#176B3A',
  },

  quantity: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '900',
  },

  kg: {
    color: '#7D877F',
    fontSize: 12,
    textAlign: 'center',
  },

  estimate: {
    backgroundColor: '#176B3A',
    borderRadius: 20,
    padding: 22,
    marginBottom: 20,
  },

  estimateLabel: { color: '#CFE7D6', fontSize: 13 },
  amount: { color: '#fff', fontSize: 34, fontWeight: '900', marginTop: 5 },

  calculation: {
    color: '#D9EEE0',
    marginTop: 5,
  },

  button: {
    backgroundColor: '#176B3A',
    borderRadius: 15,
    padding: 17,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
  },

  aiButton: {
    alignItems: 'center',
    padding: 18,
  },

  aiText: {
    color: '#176B3A',
    fontWeight: '700',
  },
});