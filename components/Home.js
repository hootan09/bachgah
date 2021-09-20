import React , {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet,SafeAreaView,ScrollView, Image, } from 'react-native';

import colors from '../assets/colors/colors'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import menuImg from '../assets/images/menu.png';

import Slider from './Slider';
import SectionList from './SectionList';

import sliderImages from '../assets/data/sliderImages';
import { dailyParcticeItems, bestBachgahItems } from '../assets/data/sectionListData';



Feather.loadFont();
Entypo.loadFont();

const Home = ({navigation}) => {
    return (
            <SafeAreaView style={styles.container}>
                    <View style={styles.headerWrapper}>

                        {/* Left Menu */}
                        <View style={styles.menuLeftWrapper}>
                            <View style={styles.shopIconWrapper}>
                                <Feather name="shopping-bag" size={24} color={colors.black} style={styles.shopIcon} />
                            </View>
                            <View style={styles.notifIconWrapper}>
                                <Feather name="bell" size={24} color={colors.black} style={styles.notifIcon} />
                            <View style={styles.badgeWrapper}>
                                <Text style={styles.badgeTxt}>99</Text>
                            </View>
                            </View>
                        </View>
                        {/* Right Menu */}
                        <View style={styles.menuRightWrapper}>
                            <TouchableOpacity
                                onPress={()=>console.log('hello')}
                            >
                                <Image source={menuImg} style={styles.menuIcon}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                <ScrollView>
                    {/* Header */}

                    {/* Slider */}
                    <Slider data={sliderImages}/>

                    {/* Daily Practice */}
                    <SectionList
                        title="تمرین های روزانه"
                        data={dailyParcticeItems}
                        navigation={navigation}
                    />

                    {/* Best Bachgah */}
                    <SectionList
                        title="برترین باشگاه ها"
                        data={bestBachgahItems}
                        navigation={navigation}
                    />

                </ScrollView>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    // divider: {
    //     height: StyleSheet.hairlineWidth,
    //     backgroundColor: colors.gray,
    //     marginHorizontal: 16,
    //     marginTop: 16 ,
    // },
    container: {
        flex: 1,
        backgroundColor: colors.lightGray,
    },
    headerWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 5,
        paddingTop: 30,
    },
    menuLeftWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        left: 10,
    },
    shopIconWrapper: {
        height: 32,
        width: 32,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 32,
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 3,
    },
    shopIcon: {},
    notifIcon: {
        transform: [{
            rotateZ: "-20deg"
        }]
    },
    notifIconWrapper: {
        position: "relative",
        marginLeft: 20,
        height: 32,
        width: 32,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 32,
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 3,
    },
    badgeWrapper: {
        position: "absolute",
        borderRadius: 64,
        width: 15,
        height: 15,
        backgroundColor: colors.red,
        justifyContent: "center",
        alignItems: "center",
        left: 20,
        top: -5,
    },
    badgeTxt: {
        color: colors.white,
        fontFamily: "IRANSansMobile_UltraLight",
        fontSize: 12,
    },
    menuRightWrapper: {
        right: 10,
        height: 42,
        width: 42,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 32,
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 3,
    },
    menuIcon: {
        transform: [{
            rotateY: "180deg"
        }]
    },
})

export default Home
