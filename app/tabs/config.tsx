import styles from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.centralizado}>
      <Ionicons name="settings" size={200} color="rgba(255, 0, 0, 1)"/>
      <Text style = {{fontSize: 40,fontWeight:700}}>Configurações</Text>
      <Text style = {{fontSize: 20,fontWeight:700}}>Configurações do App!</Text>
    </View>
  );
}
