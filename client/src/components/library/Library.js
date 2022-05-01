import { Entypo } from '@expo/vector-icons';
import { memo } from 'react';
import {
  Image,
  Linking,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import fishData from './fish.json';
import styles from './style';

const FishInformation = ({ fish }) => {
  const otherPictures = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 16 }}>
        <Text style={styles.name}>{fish.name}</Text>
        <Text style={styles.scientificName}>{fish.scientificName}</Text>

        <View style={styles.imageContainer}>
          <View style={styles.otherImageContainer}>
            {otherPictures.map((otherPicture) => {
              return (
                <Image
                  key={otherPicture.id}
                  fadeDuration={1000}
                  style={styles.otherImage}
                  resizeMode="contain"
                  source={require('../../../assets/fish.png')}
                />
              );
            })}
          </View>
          <Image
            fadeDuration={1000}
            style={styles.image}
            resizeMode="contain"
            source={require('../../../assets/fish.png')}
          />
        </View>

        <Text style={styles.subTitle}>Overview</Text>
        <Text style={styles.description}>{fish.description}</Text>

        <Text style={styles.subTitle}>Habitat</Text>
        <Text style={styles.description}>{fish.habitat}</Text>

        <Text style={styles.subTitle}>Diet</Text>
        <Text style={styles.description}>{fish.diet}</Text>

        <Text style={styles.subTitle}>Life Cycle</Text>
        <Text style={styles.description}>{fish.lifecycle}</Text>

        <Text style={styles.subTitle}>Reference</Text>
        {fish.references.map((reference) => (
          <Text
            key={reference}
            style={styles.description}
            onPress={() => Linking.openURL(reference)}
          >
            {reference}
          </Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const Drawer = createDrawerNavigator();

const Library = () => {
  return (
    <Drawer.Navigator
      initialRouteName={fishData[0].name}
      screenOptions={({ navigation }) => ({
        drawerPosition: 'right',
        headerLeft: false,
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Entypo style={{ paddingRight: 12 }} name="list" size={24} color="#686868" />
          </TouchableOpacity>
        ),
      })}
    >
      {fishData.map((fish) => (
        <Drawer.Screen
          key={fish.name}
          name={fish.name}
          component={memo(() => (
            <FishInformation fish={fish} />
          ))}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default Library;