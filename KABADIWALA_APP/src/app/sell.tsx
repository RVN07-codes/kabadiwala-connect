import { useState } from 'react';
import { router } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import { useApp } from '@/context/AppContext';
import { ScrapCategory } from '@/types';

const materials: {
  category: ScrapCategory;
  icon: string;
  description: string;
  rate: number;
}[] = [
  {
    category: 'Mobile Phones',
    icon: '📱',
    description: 'Old or damaged smartphones',
    rate: 300,
  },
  {
    category: 'Computers & Laptops',
    icon: '💻',
    description: 'Laptops, CPUs and computer parts',
    rate: 280,
  },
  {
    category: 'LCD / LED Displays',
    icon: '🖥️',
    description: 'LCD, LED and monitor panels',
    rate: 70,
  },
  {
    category: 'PCB',
    icon: '🧩',
    description: 'Printed circuit boards',
    rate: 150,
  },
  {
    category: 'Cables & Wires',
    icon: '🔌',
    description: 'Copper and electronic cables',
    rate: 65,
  },
  {
    category: 'Battery',
    icon: '🔋',
    description: 'Used electronic batteries',
    rate: 80,
  },
  {
    category: 'Printers',
    icon: '🖨️',
    description: 'Printers and printer components',
    rate: 55,
  },
  {
    category: 'CRT',
    icon: '📺',
    description: 'Old CRT televisions and monitors',
    rate: 35,
  },
  {
    category: 'Motors & Components',
    icon: '⚙️',
    description: 'Electronic motors and assemblies',
    rate: 90,
  },
  {
    category: 'Mixed E-Waste',
    icon: '📦',
    description: 'Mixed electronic components',
    rate: 80,
  },
];

export default function SellScreen() {
  const { createLot, setSelectedLot } = useApp();

  const [selectedCategory, setSelectedCategory] =
    useState<ScrapCategory>('Mobile Phones');

  const [weight, setWeight] = useState('');

  const selectedMaterial = materials.find(
    (item) => item.category === selectedCategory
  );

  const rate = selectedMaterial?.rate ?? 0;

  const numericWeight = parseFloat(weight) || 0;

  const estimatedValue = Math.round(rate * numericWeight);

  const createEwasteLot = () => {
    if (numericWeight <= 0) {
      return;
    }

    const newLot = createLot(
      selectedCategory,
      selectedCategory,
      numericWeight,
      estimatedValue
    );

    setSelectedLot(newLot);

    router.push('/pickup');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Create E-Waste Lot</Text>

        <Text style={styles.subtitle}>
          Add the electronic waste you want to sell to the recycling network.
        </Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoIcon}>♻️</Text>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>
              Why create a lot?
            </Text>

            <Text style={styles.infoText}>
              Your e-waste receives a unique reference ID and can be matched
              with authorized recyclers.
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          1. Select E-Waste Type
        </Text>

        <View style={styles.materialGrid}>
          {materials.map((item) => {
            const selected =
              selectedCategory === item.category;

            return (
              <TouchableOpacity
                key={item.category}
                style={[
                  styles.materialCard,
                  selected && styles.selectedMaterial,
                ]}
                onPress={() =>
                  setSelectedCategory(item.category)
                }
              >
                <Text style={styles.materialIcon}>
                  {item.icon}
                </Text>

                <Text
                  style={[
                    styles.materialName,
                    selected && styles.selectedText,
                  ]}
                >
                  {item.category}
                </Text>

                <Text style={styles.materialDescription}>
                  {item.description}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text style={styles.sectionTitle}>
          2. Enter Approximate Weight
        </Text>

        <View style={styles.weightContainer}>
          <TextInput
            value={weight}
            onChangeText={setWeight}
            keyboardType="decimal-pad"
            placeholder="Example: 2.75"
            placeholderTextColor="#999"
            style={styles.weightInput}
          />

          <Text style={styles.unit}>kg</Text>
        </View>

        <Text style={styles.helper}>
          You can enter values like 0.5, 1.25, 2.75 or 12.5 kg.
        </Text>

        <Text style={styles.sectionTitle}>
          3. Estimated Value
        </Text>

        <View style={styles.valueCard}>
          <View>
            <Text style={styles.valueLabel}>
              INDICATIVE RATE
            </Text>

            <Text style={styles.rate}>
              ₹{rate}/kg
            </Text>
          </View>

          <Text style={styles.multiply}>×</Text>

          <View>
            <Text style={styles.valueLabel}>
              WEIGHT
            </Text>

            <Text style={styles.rate}>
              {numericWeight || 0} kg
            </Text>
          </View>

          <View style={styles.divider} />

          <View>
            <Text style={styles.valueLabel}>
              ESTIMATED VALUE
            </Text>

            <Text style={styles.total}>
              ₹{estimatedValue}
            </Text>
          </View>
        </View>

        <Text style={styles.disclaimer}>
          * This is an indicative estimate. Final value may vary based on
          quality, verified weight, material composition and recycler offer.
        </Text>

        <TouchableOpacity
          style={[
            styles.createButton,
            numericWeight <= 0 && styles.disabledButton,
          ]}
          disabled={numericWeight <= 0}
          onPress={createEwasteLot}
        >
          <Text style={styles.createButtonText}>
            Create E-Waste Lot →
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.aiButton}
          onPress={() => router.push('/ai')}
        >
          <Text style={styles.aiIcon}>🤖</Text>

          <View style={styles.aiContent}>
            <Text style={styles.aiTitle}>
              Not sure what it is?
            </Text>

            <Text style={styles.aiText}>
              Let Scrap2Cash AI identify the e-waste.
            </Text>
          </View>

          <Text style={styles.aiArrow}>›</Text>
        </TouchableOpacity>
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
    paddingBottom: 45,
  },

  backButton: {
    paddingVertical: 8,
    marginBottom: 8,
  },

  backText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1B7F3A',
  },

  title: {
    fontSize: 29,
    fontWeight: '800',
  },

  subtitle: {
    color: '#707070',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 6,
  },

  infoCard: {
    backgroundColor: '#EAF6ED',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    flexDirection: 'row',
  },

  infoIcon: {
    fontSize: 28,
    marginRight: 12,
  },

  infoContent: {
    flex: 1,
  },

  infoTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#185E2E',
  },

  infoText: {
    color: '#477052',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginTop: 26,
    marginBottom: 12,
  },

  materialGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 12,
  },

  materialCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 15,
    minHeight: 145,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  selectedMaterial: {
    borderWidth: 2,
    borderColor: '#1B7F3A',
    backgroundColor: '#F0F9F2',
  },

  materialIcon: {
    fontSize: 30,
  },

  materialName: {
    fontSize: 14,
    fontWeight: '800',
    marginTop: 9,
  },

  selectedText: {
    color: '#1B7F3A',
  },

  materialDescription: {
    color: '#888',
    fontSize: 11,
    lineHeight: 16,
    marginTop: 5,
  },

  weightContainer: {
    backgroundColor: 'white',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  weightInput: {
    flex: 1,
    fontSize: 22,
    fontWeight: '700',
    paddingVertical: 16,
    color: '#222',
  },

  unit: {
    fontSize: 17,
    fontWeight: '800',
    color: '#555',
  },

  helper: {
    fontSize: 12,
    color: '#888',
    marginTop: 7,
  },

  valueCard: {
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
  },

  valueLabel: {
    color: '#888',
    fontSize: 9,
    fontWeight: '800',
    marginBottom: 4,
  },

  rate: {
    fontSize: 17,
    fontWeight: '800',
  },

  multiply: {
    color: '#999',
    fontSize: 20,
  },

  divider: {
    width: 1,
    height: 45,
    backgroundColor: '#DDD',
  },

  total: {
    fontSize: 21,
    fontWeight: '900',
    color: '#1B7F3A',
  },

  disclaimer: {
    color: '#888',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 10,
  },

  createButton: {
    backgroundColor: '#1B7F3A',
    paddingVertical: 17,
    borderRadius: 14,
    marginTop: 22,
  },

  disabledButton: {
    backgroundColor: '#AAB8AE',
  },

  createButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '800',
  },

  aiButton: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  aiIcon: {
    fontSize: 27,
    marginRight: 12,
  },

  aiContent: {
    flex: 1,
  },

  aiTitle: {
    fontSize: 14,
    fontWeight: '800',
  },

  aiText: {
    color: '#777',
    fontSize: 12,
    marginTop: 3,
  },

  aiArrow: {
    fontSize: 28,
    color: '#1B7F3A',
  },
});