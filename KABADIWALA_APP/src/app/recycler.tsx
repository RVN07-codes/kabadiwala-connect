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

export default function RecyclerScreen() {
  const { lots } = useApp();

  const listedLots = lots.filter(
    (lot) => lot.status === 'Listed'
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.small}>
              AUTHORIZED RECYCLER PORTAL
            </Text>

            <Text style={styles.title}>
              Recycler Dashboard
            </Text>

            <Text style={styles.location}>
              📍 Bhusawal, Maharashtra
            </Text>
          </View>

          <View style={styles.verified}>
            <Text style={styles.verifiedText}>
              ✓ VERIFIED
            </Text>
          </View>
        </View>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.number}>
              {listedLots.length}
            </Text>

            <Text style={styles.label}>
              Available E-Waste Lots
            </Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.number}>12</Text>

            <Text style={styles.label}>
              Active Pickups
            </Text>
          </View>

          <View style={styles.stat}>
            <Text style={styles.number}>₹24K</Text>

            <Text style={styles.label}>
              This Month
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>
          Available E-Waste Lots
        </Text>

        <Text style={styles.sectionSubtitle}>
          Lots created by collectors in your service area.
        </Text>

        {listedLots.map((lot) => (
          <TouchableOpacity
            key={lot.id}
            style={styles.lot}
            onPress={() => {
              router.push('/lots');
            }}
          >
            <View style={styles.lotTop}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>
                  {lot.category}
                </Text>
              </View>

              <Text style={styles.lotId}>
                {lot.id}
              </Text>
            </View>

            <Text style={styles.material}>
              {lot.material}
            </Text>

            <View style={styles.row}>
              <Text style={styles.detail}>
                ⚖️ {lot.weight} kg
              </Text>

              <Text style={styles.value}>
                Est. ₹{lot.estimatedValue}
              </Text>
            </View>

            <Text style={styles.locationText}>
              📍 {lot.location}
            </Text>

            <View style={styles.divider} />

            <Text style={styles.viewLot}>
              View Lot Details →
            </Text>
          </TouchableOpacity>
        ))}

        <View style={styles.authorizationCard}>
          <Text style={styles.authorizationIcon}>
            🛡️
          </Text>

          <View style={styles.authorizationContent}>
            <Text style={styles.authorizationTitle}>
              Authorized recycling matters
            </Text>

            <Text style={styles.authorizationText}>
              Scrap2Cash prioritizes verified recyclers so collectors can
              hand over e-waste through the formal recycling chain.
            </Text>
          </View>
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
    paddingBottom: 45,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  small: {
    fontSize: 10,
    color: '#777',
    fontWeight: '800',
  },

  title: {
    fontSize: 27,
    fontWeight: '800',
    marginTop: 5,
  },

  location: {
    color: '#666',
    marginTop: 5,
    fontSize: 13,
  },

  verified: {
    backgroundColor: '#E8F5E9',
    borderRadius: 10,
    paddingHorizontal: 9,
    paddingVertical: 7,
  },

  verifiedText: {
    color: '#1B7F3A',
    fontSize: 10,
    fontWeight: '800',
  },

  stats: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 25,
  },

  stat: {
    flex: 1,
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 14,
    elevation: 2,
  },

  number: {
    fontSize: 19,
    fontWeight: '800',
  },

  label: {
    color: '#777',
    fontSize: 10,
    lineHeight: 14,
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 28,
  },

  sectionSubtitle: {
    color: '#777',
    fontSize: 12,
    marginTop: 4,
    marginBottom: 14,
  },

  lot: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 17,
    marginBottom: 12,
    elevation: 2,
  },

  lotTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  badge: {
    backgroundColor: '#EAF6ED',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },

  badgeText: {
    color: '#1B7F3A',
    fontSize: 11,
    fontWeight: '800',
  },

  lotId: {
    fontSize: 10,
    color: '#888',
    fontWeight: '700',
  },

  material: {
    fontSize: 17,
    fontWeight: '800',
    marginTop: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 11,
  },

  detail: {
    color: '#555',
  },

  value: {
    fontWeight: '800',
    fontSize: 16,
  },

  locationText: {
    color: '#777',
    fontSize: 12,
    marginTop: 8,
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 13,
  },

  viewLot: {
    color: '#1B7F3A',
    fontSize: 13,
    fontWeight: '800',
  },

  authorizationCard: {
    backgroundColor: '#FFF8E8',
    padding: 17,
    borderRadius: 16,
    marginTop: 15,
    flexDirection: 'row',
  },

  authorizationIcon: {
    fontSize: 27,
    marginRight: 12,
  },

  authorizationContent: {
    flex: 1,
  },

  authorizationTitle: {
    fontWeight: '800',
  },

  authorizationText: {
    color: '#777',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },
});