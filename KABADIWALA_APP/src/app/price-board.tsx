import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const prices = [
  {
    material: 'Mobile Phones',
    category: 'Consumer Electronics',
    price: '₹180–₹450/kg',
    trend: '↑',
  },
  {
    material: 'Laptop Scrap',
    category: 'Computers',
    price: '₹250–₹500/kg',
    trend: '↑',
  },
  {
    material: 'PCB Scrap',
    category: 'High-Value E-Waste',
    price: '₹120–₹180/kg',
    trend: '↑',
  },
  {
    material: 'Copper Cable',
    category: 'Cables & Wires',
    price: '₹55–₹75/kg',
    trend: '→',
  },
  {
    material: 'Lead Battery',
    category: 'Battery',
    price: '₹70–₹95/kg',
    trend: '↓',
  },
  {
    material: 'LCD Display',
    category: 'Displays',
    price: '₹40–₹90/kg',
    trend: '→',
  },
  {
    material: 'CRT',
    category: 'Legacy Electronics',
    price: '₹25–₹45/kg',
    trend: '→',
  },
];

export default function PriceBoard() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>
          Today's E-Waste Prices
        </Text>

        <Text style={styles.subtitle}>
          Indicative buying rates from the recycling network
        </Text>

        <View style={styles.location}>
          <Text>📍 Bhusawal, Maharashtra</Text>

          <Text style={styles.updated}>
            Updated today
          </Text>
        </View>

        <View style={styles.banner}>
          <Text style={styles.bannerIcon}>💰</Text>

          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>
              Know the value before you sell
            </Text>

            <Text style={styles.bannerText}>
              Compare market ranges and recycler offers before confirming
              your transaction.
            </Text>
          </View>
        </View>

        {prices.map((item) => (
          <View style={styles.card} key={item.material}>
            <View style={styles.cardLeft}>
              <Text style={styles.material}>
                {item.material}
              </Text>

              <Text style={styles.category}>
                {item.category}
              </Text>
            </View>

            <View>
              <Text style={styles.price}>
                {item.price}
              </Text>

              <Text style={styles.trend}>
                {item.trend} Market
              </Text>
            </View>
          </View>
        ))}

        <Text style={styles.note}>
          * Prototype rates are indicative only. Actual prices may vary
          according to material quality, composition, verified weight,
          location and recycler quotation.
        </Text>
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

  title: {
    fontSize: 28,
    fontWeight: '800',
  },

  subtitle: {
    color: '#777',
    marginTop: 5,
    lineHeight: 20,
  },

  location: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  updated: {
    color: '#1B7F3A',
    fontSize: 12,
    fontWeight: '700',
  },

  banner: {
    backgroundColor: '#EAF6ED',
    borderRadius: 16,
    padding: 16,
    marginTop: 14,
    flexDirection: 'row',
  },

  bannerIcon: {
    fontSize: 28,
    marginRight: 12,
  },

  bannerContent: {
    flex: 1,
  },

  bannerTitle: {
    fontWeight: '800',
    color: '#185E2E',
  },

  bannerText: {
    color: '#477052',
    fontSize: 12,
    lineHeight: 17,
    marginTop: 3,
  },

  card: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 16,
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },

  cardLeft: {
    flex: 1,
    paddingRight: 10,
  },

  material: {
    fontSize: 16,
    fontWeight: '800',
  },

  category: {
    color: '#777',
    fontSize: 12,
    marginTop: 4,
  },

  price: {
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'right',
  },

  trend: {
    color: '#1B7F3A',
    fontSize: 11,
    textAlign: 'right',
    marginTop: 4,
    fontWeight: '700',
  },

  note: {
    color: '#888',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 20,
  },
});