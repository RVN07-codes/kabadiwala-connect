import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const transactions = [
  {
    id: 'TXN-001',
    material: 'Copper Cable',
    weight: '12 kg',
    amount: 720,
    status: 'Paid',
  },
  {
    id: 'TXN-002',
    material: 'Mixed E-Waste',
    weight: '8 kg',
    amount: 640,
    status: 'Paid',
  },
  {
    id: 'TXN-003',
    material: 'PCB Scrap',
    weight: '5 kg',
    amount: 750,
    status: 'Pending',
  },
];

export default function EarningsScreen() {
  const total = transactions.reduce(
    (sum, transaction) =>
      sum + transaction.amount,
    0
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>My Earnings</Text>

        <View style={styles.totalCard}>
          <Text style={styles.label}>TOTAL TRANSACTION VALUE</Text>

          <Text style={styles.total}>₹{total}</Text>

          <Text style={styles.sub}>
            3 recorded transactions
          </Text>
        </View>

        <Text style={styles.section}>Transaction History</Text>

        {transactions.map((transaction) => (
          <View style={styles.transaction} key={transaction.id}>
            <View>
              <Text style={styles.material}>
                {transaction.material}
              </Text>

              <Text style={styles.meta}>
                {transaction.id} • {transaction.weight}
              </Text>
            </View>

            <View>
              <Text style={styles.amount}>
                ₹{transaction.amount}
              </Text>

              <Text
                style={[
                  styles.status,
                  transaction.status === 'Paid'
                    ? styles.paid
                    : styles.pending,
                ]}
              >
                {transaction.status}
              </Text>
            </View>
          </View>
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
  totalCard: {
    backgroundColor: '#1B7F3A',
    padding: 24,
    borderRadius: 20,
    marginTop: 20,
  },
  label: {
    color: '#DFF2E3',
    fontSize: 11,
    fontWeight: '700',
  },
  total: {
    color: 'white',
    fontSize: 36,
    fontWeight: '800',
    marginTop: 5,
  },
  sub: {
    color: '#DFF2E3',
    marginTop: 5,
  },
  section: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 28,
    marginBottom: 12,
  },
  transaction: {
    backgroundColor: 'white',
    padding: 17,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  material: {
    fontWeight: '800',
    fontSize: 16,
  },
  meta: {
    color: '#888',
    fontSize: 12,
    marginTop: 5,
  },
  amount: {
    fontWeight: '800',
    textAlign: 'right',
  },
  status: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'right',
    marginTop: 4,
  },
  paid: {
    color: '#1B7F3A',
  },
  pending: {
    color: '#D88A00',
  },
});