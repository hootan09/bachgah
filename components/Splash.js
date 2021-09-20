React
import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import colors from '../assets/colors/colors'

import Feather from 'react-native-vector-icons/Feather';

import splashImg from '../assets/images/splashImg.jpg';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

Feather.loadFont();
const Splash = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image source={splashImg} resizeMode="contain" style={styles.splashImg} />
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>باچگاه همینجاست!</Text>
                <TouchableOpacity
                    onPress={()=> navigation.replace("TabNavigator")}
                >
                    <View style={styles.iconWrapper}>
                        <Feather name="arrow-left" size={36} color={colors.lightPurple} style={styles.icon} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.purple,
    },
    imageWrapper: {
        height: Height * 0.7,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    splashImg: {
        width: Width * 0.85,
        height: Height * 0.9,
    },
    textWrapper: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    text: {
        color: colors.lightGray,
        fontFamily: "IRANSansMobile_Medium",
        fontSize: 35,
        textShadowColor:colors.black,
        textShadowOffset:{width: 3, height: 3},
        textShadowRadius:9,
    },
    iconWrapper: {
        marginTop: 30,
        width: 60,
        height: 60,
        backgroundColor: colors.white,
        borderColor: colors.lightPurple,
        borderWidth: 5,
        borderRadius: 64,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        // color: colors.orange
    },
})
