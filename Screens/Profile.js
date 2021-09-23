import React from 'react';
import { StyleSheet, Image, Text, View, SafeAreaView, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import colors from '../assets/colors/colors';

import banner from '../assets/images/banner2.png';
import { buttonTxt } from '../assets/data/sectionListData';

import Feather from "react-native-vector-icons/Feather";

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

Feather.loadFont();
const Profile = ({navigation}) => {

    const renderButton = ({item}) => {
        return(
            <TouchableOpacity
                onPress={()=> {console.log('button clicked!')}}
                style={styles.buttonWrapper}
            >
                <View style={styles.iconPosition}>
                    <View style={styles.buttonIconWrapper}>
                        <Feather name="arrow-left" size={20} color={colors.white} style={styles.buttonIcon} />
                    </View>
                </View>
                <View style={styles.textButtonWrapper}>
                    <Text style={styles.buttonTxt}>{item.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Header Banner */}
            <View style={styles.topHeader}>
                <Image source={banner} resizeMode="cover" style={styles.topImage} />
            </View>
            {/* bottom section */}
            <View style={styles.bottomWrapper}>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.topText}>هدفت برای ورزش چیه؟</Text>
                    <FlatList 
                        data={buttonTxt}
                        renderItem={renderButton}
                        keyExtractor={(item)=> item.id}
                        // showsHorizontalScrollIndicator={false}
                        style={styles.flatListWrapper}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topHeader: {
        backgroundColor: colors.yellow,
        height: Height * 0.45,
    },
    topImage: {
        position: "absolute",
        width: Width,
        height: Height * 0.35,
        top: 30,
    },
    bottomWrapper: {
        flex: 1,
        backgroundColor: colors.lightGray,
        marginTop: -20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    descriptionWrapper: {
        flex: 1,
        flexDirection: "column",
        marginTop: 10,
        marginHorizontal: 15,
        alignItems: "center",
    },
    topText: {
        fontFamily: "IRANSansMobile_UltraLight",
        fontSize: 32,
        textShadowColor:colors.black,
        textShadowOffset:{width: 3, height: 3},
        textShadowRadius:9,
    },
    flatListWrapper: {
        width: Width * 0.8,
        marginTop: 20,
    },
    buttonWrapper: {
        paddingVertical: 10,
        marginHorizontal: 15,
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: colors.white,
        borderRadius: 12,
    },
    buttonIconWrapper: {
        height: 40,
        width: 40,
        backgroundColor: colors.purple,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        // right: 50,
        borderColor: colors.gray,
        borderWidth: 2,
    },
    buttonTxt: {
        fontFamily: "IRANSansMobile_Light",
        fontSize: 16,
        textShadowColor:colors.black,
        textShadowOffset:{width: 3, height: 3},
        textShadowRadius:5,
    },
    iconPosition: {
        marginHorizontal: 10,
    },
    textButtonWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingRight: 40,
    }
})
