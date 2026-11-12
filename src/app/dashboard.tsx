import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { primaire, bg } from '@/src/constants/couleurs';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BumBer</Text>
      <Text style={styles.message}>Bienvenue sur votre dashboard !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8fd6ec',
  },
  message: {
    color: '#ffffff',
    fontSize: 18,
    marginTop: 20,
  },
});