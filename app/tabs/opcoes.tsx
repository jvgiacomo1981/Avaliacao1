import { Ionicons } from "@expo/vector-icons";
import styles from "@/constants/styles";
import { View, Text, StyleSheet } from 'react-native';

export default function Tab() {
  return (
    <View style={styles.centralizado}>
      <Ionicons name="list" size={200} color="rgba(255, 0, 0, 1)"/>
      <Text style = {{fontSize: 40,fontWeight:700}}>Opções</Text>
      <Text style = {{fontSize: 20,fontWeight:700}}>Veja opções de cursos, novidades e mais!</Text>
    </View>
  );
}