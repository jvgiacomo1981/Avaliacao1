import Botao from '@/compenents/Botao';
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
      const router = useRouter()
  return (
    
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
<Ionicons name="earth-outline" size={200} color="rgba(255, 0, 0, 1)"/>
      <Text style = {{fontSize: 20}}>Bem-vindo ao FluenteJá!</Text>
      <Text style = {{fontSize: 40,fontWeight:700}}>Seu futuro bílingue!</Text>
                  <Botao onPress={() => {
                      router.push('/')
                  }}>
                      <Link href="/" style={{ color: '#fff' }}>
                        Clique para começar
                      </Link>
                  </Botao>
    </View>
  );
}
