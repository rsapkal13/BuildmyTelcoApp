import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';

export default function CreditScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.card}>
        <Text style={styles.title}>Credit Details</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Current credit</Text>
          <Text style={styles.value}>$7.90</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Last top-up</Text>
          <Text style={styles.value}>Wed, 11 March 2026 at 10:50</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Next renewal</Text>
          <Text style={styles.value}>26 March 2026 at 13:43</Text>
        </View>

        <Text style={styles.subtitle}>Actions</Text>
        <Link href="/" style={styles.actionButton}>
          <Text style={styles.actionText}>Back to Dashboard</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
  },
  card: {
    margin: 16,
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ff5b00',
    marginBottom: 16,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  label: {
    color: '#333',
    fontSize: 15,
    fontWeight: '600',
  },
  value: {
    color: '#111',
    fontSize: 15,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 20,
    color: '#666',
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
  actionButton: {
    backgroundColor: '#ff5b00',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});