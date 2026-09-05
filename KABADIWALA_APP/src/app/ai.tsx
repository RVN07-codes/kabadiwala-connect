import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

export default function AIScreen() {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(false);

  const identify = () => {
    setScanning(true);

    setTimeout(() => {
      setScanning(false);
      setResult(true);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>‹ Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>AI Scrap Identifier</Text>

        <Text style={styles.subtitle}>
          Take a picture and we'll identify the recyclable material.
        </Text>

        {!result && !scanning && (
          <TouchableOpacity style={styles.camera} onPress={identify}>
            <Text style={styles.cameraIcon}>📷</Text>
            <Text style={styles.cameraTitle}>Scan Scrap</Text>
            <Text style={styles.cameraSub}>
              Tap to simulate camera scanning
            </Text>
          </TouchableOpacity>
        )}

        {scanning && (
          <View style={styles.scanning}>
            <Text style={styles.scanIcon}>✨</Text>
            <Text style={styles.scanTitle}>Analyzing...</Text>
            <Text style={styles.scanSub}>
              AI is identifying your scrap
            </Text>
          </View>
        )}

        {result && (
          <>
            <View style={styles.resultImage}>
              <Text style={styles.bottle}>🧴</Text>
            </View>

            <View style={styles.result}>
              <Text style={styles.detected}>AI DETECTED</Text>

              <Text style={styles.resultTitle}>Plastic Bottle</Text>

              <View style={styles.row}>
                <Text style={styles.label}>Confidence</Text>
                <Text style={styles.value}>94%</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Category</Text>
                <Text style={styles.value}>Plastic</Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}>Recyclable</Text>
                <Text style={styles.value}>~85%</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push('/sell')}
            >
              <Text style={styles.buttonText}>Sell This Scrap →</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setResult(false)}>
              <Text style={styles.retry}>Scan another item</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F9F7' },

  content: {
    padding: 20,
    flex: 1,
  },

  back: {
    color: '#176B3A',
    fontWeight: '700',
    marginBottom: 20,
  },

  title: {
    fontSize: 29,
    fontWeight: '900',
    color: '#17231C',
  },

  subtitle: {
    color: '#78827B',
    lineHeight: 20,
    marginTop: 7,
    marginBottom: 30,
  },

  camera: {
    height: 330,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#BFD9C6',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF7F0',
  },

  cameraIcon: { fontSize: 55 },

  cameraTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#176B3A',
    marginTop: 15,
  },

  cameraSub: {
    color: '#718078',
    fontSize: 12,
    marginTop: 6,
  },

  scanning: {
    height: 330,
    borderRadius: 25,
    backgroundColor: '#176B3A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  scanIcon: { fontSize: 55 },

  scanTitle: {
    color: '#fff',
    fontSize: 23,
    fontWeight: '900',
    marginTop: 15,
  },

  scanSub: {
    color: '#D2E9D8',
    marginTop: 6,
  },

  resultImage: {
    height: 210,
    backgroundColor: '#E6F1E9',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottle: { fontSize: 100 },

  result: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginTop: 15,
  },

  detected: {
    color: '#176B3A',
    fontSize: 10,
    fontWeight: '900',
  },

  resultTitle: {
    fontSize: 23,
    fontWeight: '900',
    marginTop: 5,
    marginBottom: 15,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  label: { color: '#7C867F' },
  value: { fontWeight: '800' },

  button: {
    backgroundColor: '#176B3A',
    borderRadius: 15,
    padding: 17,
    alignItems: 'center',
    marginTop: 18,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 15,
  },

  retry: {
    textAlign: 'center',
    color: '#176B3A',
    fontWeight: '700',
    marginTop: 18,
  },
});