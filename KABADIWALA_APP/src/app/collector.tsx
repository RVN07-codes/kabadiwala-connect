import { router } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function CollectorScreen() {
  const categories = [
    ['📱', 'Phones'],
    ['💻', 'Laptops'],
    ['🧩', 'PCBs'],
    ['🔌', 'Cables'],
    ['🔋', 'Batteries'],
    ['🖥️', 'Displays'],
    ['🖨️', 'Printers'],
    ['📺', 'CRTs'],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.small}>GOOD MORNING 👋</Text>

        <Text style={styles.title}>Collector Dashboard</Text>

        <Text style={styles.location}>
          📍 Bhusawal, Maharashtra
        </Text>

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>
            Turn E-Waste Into Cash ♻️
          </Text>

          <Text style={styles.heroText}>
            Sell collected electronics at transparent prices and connect
            directly with authorized recyclers.
          </Text>

          <TouchableOpacity
            style={styles.heroButton}
            onPress={() => router.push('/sell')}
          >
            <Text style={styles.heroButtonText}>
              Create E-Waste Lot →
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>
          What are you selling?
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryScroll}
        >
          {categories.map(([icon, name]) => (
            <TouchableOpacity
              key={name}
              style={styles.categoryCard}
              onPress={() => router.push('/sell')}
            >
              <Text style={styles.categoryIcon}>{icon}</Text>

              <Text style={styles.categoryName}>
                {name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>
          Quick Actions
        </Text>

        <View style={styles.grid}>
          <TouchableOpacity
            style={styles.action}
            onPress={() => router.push('/sell')}
          >
            <Text style={styles.actionIcon}>📦</Text>

            <Text style={styles.actionText}>
              Create E-Waste Lot
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.action}
            onPress={() => router.push('/ai')}
          >
            <Text style={styles.actionIcon}>🤖</Text>

            <Text style={styles.actionText}>
              Identify E-Waste
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.action}
            onPress={() => router.push('/price-board')}
          >
            <Text style={styles.actionIcon}>📊</Text>

            <Text style={styles.actionText}>
              E-Waste Rates
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.action}
            onPress={() => router.push('/lots')}
          >
            <Text style={styles.actionIcon}>🧾</Text>

            <Text style={styles.actionText}>
              My E-Waste Lots
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.earnings}>
          <View>
            <Text style={styles.earningLabel}>
              THIS MONTH
            </Text>

            <Text style={styles.amount}>₹8,450</Text>

            <Text style={styles.earningSub}>
              From e-waste transactions
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => router.push('/earnings')}
          >
            <Text style={styles.view}>View →</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>
          How Scrap2Cash Works
        </Text>

        <View style={styles.processCard}>
          <ProcessStep number="01" text="Collect E-Waste" />
          <ProcessStep number="02" text="Create a Digital Lot" />
          <ProcessStep number="03" text="Discover Fair Prices" />
          <ProcessStep
            number="04"
            text="Connect With Authorized Recycler"
          />
          <ProcessStep
            number="05"
            text="Verified Pickup & Handover"
          />
          <ProcessStep number="06" text="Get Paid" last />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ProcessStep({
  number,
  text,
  last,
}: {
  number: string;
  text: string;
  last?: boolean;
}) {
  return (
    <View style={styles.processRow}>
      <View style={styles.processNumber}>
        <Text style={styles.processNumberText}>
          {number}
        </Text>
      </View>

      <Text style={styles.processText}>{text}</Text>

      {!last && <Text style={styles.processArrow}>↓</Text>}
    </View>
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

  small: {
    fontSize: 11,
    color: '#777',
    fontWeight: '800',
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    marginTop: 4,
  },

  location: {
    color: '#666',
    marginTop: 6,
  },

  hero: {
    backgroundColor: '#1B7F3A',
    padding: 22,
    borderRadius: 20,
    marginTop: 24,
  },

  heroTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '800',
  },

  heroText: {
    color: '#E8F5E9',
    marginTop: 8,
    lineHeight: 21,
  },

  heroButton: {
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 11,
    marginTop: 18,
  },

  heroButtonText: {
    textAlign: 'center',
    color: '#1B7F3A',
    fontWeight: '800',
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '800',
    marginTop: 28,
    marginBottom: 14,
  },

  categoryScroll: {
    gap: 12,
    paddingRight: 10,
  },

  categoryCard: {
    width: 100,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 15,
    alignItems: 'center',
    elevation: 2,
  },

  categoryIcon: {
    fontSize: 30,
  },

  categoryName: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  action: {
    backgroundColor: 'white',
    width: '47%',
    padding: 19,
    borderRadius: 16,
    elevation: 2,
  },

  actionIcon: {
    fontSize: 28,
  },

  actionText: {
    fontWeight: '700',
    marginTop: 10,
    lineHeight: 18,
  },

  earnings: {
    backgroundColor: 'white',
    borderRadius: 17,
    padding: 20,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  earningLabel: {
    fontSize: 10,
    color: '#777',
    fontWeight: '800',
  },

  amount: {
    fontSize: 28,
    fontWeight: '800',
    marginTop: 4,
  },

  earningSub: {
    color: '#888',
    fontSize: 11,
    marginTop: 3,
  },

  view: {
    color: '#1B7F3A',
    fontWeight: '800',
  },

  processCard: {
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 18,
  },

  processRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 48,
  },

  processNumber: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  processNumberText: {
    color: '#1B7F3A',
    fontSize: 10,
    fontWeight: '800',
  },

  processText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 13,
    fontWeight: '700',
  },

  processArrow: {
    color: '#AAA',
    marginRight: 10,
  },
});