import { Stack } from 'expo-router';
import { AppProvider } from '@/context/AppContext';

export default function RootLayout() {
  return (
    <AppProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="role" options={{ headerShown: false }} />
        <Stack.Screen name="collector" options={{ headerShown: false }} />
        <Stack.Screen name="recycler" options={{ headerShown: false }} />
        <Stack.Screen name="sell" options={{ headerShown: false }} />
        <Stack.Screen name="price-board" options={{ headerShown: false }} />
        <Stack.Screen name="lots" options={{ headerShown: false }} />
        <Stack.Screen name="pickup" options={{ headerShown: false }} />
        <Stack.Screen name="tracking" options={{ headerShown: false }} />
        <Stack.Screen name="earnings" options={{ headerShown: false }} />
        <Stack.Screen name="ai" options={{ headerShown: false }} />
        <Stack.Screen name="explore" options={{ headerShown: false }} />
      </Stack>
    </AppProvider>
  );
}