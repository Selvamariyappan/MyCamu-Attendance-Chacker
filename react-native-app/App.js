import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  const [total, setTotal] = useState('');
  const [present, setPresent] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
    const t = parseFloat(total);
    const p = parseFloat(present);
    if (!isNaN(t) && t !== 0 && !isNaN(p)) {
      if (p > t) {
        setResult('Periods present cannot be greater than total periods.');
      } else {
        setResult(`Overall percentage: ${Math.round((p / t) * 100)}%`);
      }
    } else {
      setResult('Please enter valid numbers (total periods must not be zero).');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>MyCAMU Attendance Checker</Text>
        <TextInput
          style={styles.input}
          placeholder="Total Number of Periods"
          keyboardType="numeric"
          value={total}
          onChangeText={setTotal}
        />
        <TextInput
          style={styles.input}
          placeholder="Number of Periods Present"
          keyboardType="numeric"
          value={present}
          onChangeText={setPresent}
        />
        <Button title="Calculate My Percentage" onPress={calculate} />
        {result ? <Text style={styles.result}>{result}</Text> : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e3f0fa',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#e3f0fa',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1976d2',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#64b5f6',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 24,
    fontSize: 18,
    color: '#1976d2',
    textAlign: 'center',
  },
});
