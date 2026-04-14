import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color="red" />,
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color="red" />,
        }}
      />
      <Tabs.Screen
        name="cursos"
        options={{
          title: 'Cursos',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="play" color="red" />,
        }}
      />
      <Tabs.Screen
        name="opcoes"
        options={{
          title: 'Opções',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color="red" />,
        }}
      />
    </Tabs>

  );
}