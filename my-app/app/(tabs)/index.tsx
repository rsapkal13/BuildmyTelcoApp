import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Pressable } from 'react-native';
import { Link } from 'expo-router';

type BalanceItem = {
  label: string;
  value: string;
  suffix: string;
  color: string;
};

const balances: BalanceItem[] = [
  { label: 'NZ Data', value: '500', suffix: 'MB', color: '#ff2f9b' },
  { label: 'Bonus Data', value: '3', suffix: 'GB', color: '#8b2cf0' },
  { label: 'NZ and AU Mins', value: '200', suffix: 'MINS', color: '#291aab' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}> 
        <View style={styles.header}>
          <Text style={styles.title}>Dashboard</Text>
        </View>

        <View style={styles.topInfo}> 
          <Text style={styles.topText}>$8 Plan renews in 14 Days</Text>
          <Link href="/credit" asChild>
            <Pressable style={({ pressed }) => [styles.topCreditButton, pressed && styles.topCreditButtonActive]}>
              <Text style={styles.topCredit}>Credit $7.90 ▼</Text>
            </Pressable>
          </Link>
        </View>

        <View style={styles.card}> 
          <Text style={styles.cardTitle}>My Balances</Text>
          <View style={styles.balanceRow}>
            {balances.map(item => (
              <View style={styles.balanceBlock} key={item.label}>
                <View style={[styles.circle, { borderColor: item.color }]}>
                  <Text style={styles.circleValue}>{item.value}</Text>
                  <Text style={styles.circleSuffix}>{item.suffix}</Text>
                </View>
                <Text style={styles.balanceLabel}>{item.label}</Text>
                <Text style={styles.balanceSub}>REMAINING</Text>
              </View>
            ))}
          </View>
          <Text style={styles.freeText}>Unlimited Texts to NZ & AU</Text>
        </View>

        <View style={styles.promoCard}>
          <Text style={styles.promoTag}>EXTENDED − Sign up before 16 March!</Text>
          <Text style={styles.promoTitle}>Free Double Data all summer long</Text>
          <Text style={styles.promoSub}>On a $17 or above 4-weekly mobile plan.</Text>
          <Text style={styles.promoFooter}>
            Offer end date extended from 28 February till 16 March 2026. Double data bonus data does not
            roll over. T&Cs apply.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  content: {
    paddingBottom: 24,
  },
  header: {
    backgroundColor: '#ff5b00',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  topInfo: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 0.5,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topText: {
    fontSize: 14,
    color: '#434343',
    fontWeight: '600',
  },
  topCreditButton: {
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  topCreditButtonActive: {
    opacity: 0.7,
  },
  topCredit: {
    fontSize: 14,
    color: '#202020',
    fontWeight: '700',
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 8,
    borderRadius: 14,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#202020',
    textAlign: 'center',
  },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 16,
  },
  balanceBlock: {
    alignItems: 'center',
    flex: 1,
  },
  circle: {
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  circleValue: {
    fontSize: 34,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
  },
  circleSuffix: {
    fontSize: 14,
    color: '#363636',
    fontWeight: '700',
  },
  balanceLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2e2e2e',
    textAlign: 'center',
  },
  balanceSub: {
    fontSize: 12,
    color: '#888',
    letterSpacing: 1,
    marginTop: 2,
    textAlign: 'center',
  },
  freeText: {
    marginTop: 12,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    fontWeight: '600',
  },
  promoCard: {
    backgroundColor: '#ff7900',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 14,
    padding: 16,
  },
  promoTag: {
    color: '#fff',
    fontWeight: '700',
    marginBottom: 6,
    fontSize: 13,
    textAlign: 'center',
  },
  promoTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 6,
    textAlign: 'center',
  },
  promoSub: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
  promoFooter: {
    color: '#ffe9ce',
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
  },
});
