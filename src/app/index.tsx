import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert, 
  KeyboardAvoidingView, 
  Platform, 
  StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { primaire, bg } from '@/src/constants/couleurs';

export default function HomeScreen() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const turquoise = '#8fd6ec';
  const validIdentifier = 'admin';
  const validPassword = '1234';

  const handleLogin = () => {
    if (!identifier.trim() || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }
    if (identifier.trim() === validIdentifier && password === validPassword) {
      router.replace('/dashboard'); 
    } else {
      Alert.alert('Erreur', 'Identifiant ou mot de passe incorrect.');
    }  
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innerContainer}> 
        {/* titre */}       
        <View style={styles.header}>
          <Text style={styles.appTitle}>BumBer</Text>
        </View>

        {/* formulaire */}
        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholder="identifiant"
              placeholderTextColor={turquoise}
              value={identifier}
              onChangeText={setIdentifier}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.inputGroup}>
            <TextInput
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor={turquoise}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>

          {/* Bouton de validation */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Se connecter</Text>
          </TouchableOpacity>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
}

/* ==============
   === STYLES ===
   ============== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a', 
    justifyContent: 'center',
    paddingHorizontal: 24, 
  },
  innerContainer: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8fd6ec',
    letterSpacing: 1,
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    color: '#cbd5e1',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  input: {
    width: '100%',
    backgroundColor: '#1e293b',
    color: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#334155',
    fontWeight:'600'
  },
  button: {
    width: '100%',
    backgroundColor: '#8fd6ec',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8, // Ombre pour Android
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});