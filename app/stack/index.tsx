import Botao from '@/compenents/Botao';
import styles from '@/constants/styles';
import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from 'expo-router';
import { Text, View } from 'react-native';

// função principal da tela
export default function Index() {
const router = useRouter()
    return (
      // buscar o estilo centralizado do arquivo styles.ts
        <View style={[styles.centralizado, { gap: 10 }]}>
            <Ionicons name="laptop" size={200} color="rgba(255, 0, 0, 1)"/>
            <Text style = {{fontSize: 30,fontWeight:700}}>Material Didático do FluenteJá!</Text>
            
            <Botao onPress={() => {
                router.push('/stack/download')
            }}>
                <Link href="/stack/download" style={{ fontSize: 20, color: '#fff' }}>
                    Ir para Downloads
                </Link>
            </Botao>
            <Botao onPress={() => {
                            router.push('/')
                        }}>
                            <Link href="/" style={{ color: '#fff' }}>
                                Voltar
                            </Link>
            </Botao>
            </View>
    )
}
