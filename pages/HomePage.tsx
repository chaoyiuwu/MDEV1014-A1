import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import {StyleSheet, Text, View, SafeAreaView, Pressable, Image} from 'react-native'

const HomePage = ({ navigation }) => {
    return(
<SafeAreaView style={styles.wrapper}>
        <View style={styles.logoArea}>
            <Image
            style={styles.logo}
            source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/000/964/070/large_2x/cocktail-beverage-set-vector.jpg'
            }}
            />
            <Text style={styles.logoText}>MixMate: Your Personal Mixing Assistant</Text>
        </View>
    </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    wrapper:{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    logoArea: {
        flex: 0.5,
        flexDirection: 'column'
    },
    logo: {
        flex: 1,
        aspectRatio: 1,
        resizeMode:'contain'
    },
    logoText: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginHorizontal: 20,
        color: '#613a2b'
    },
})

export default HomePage