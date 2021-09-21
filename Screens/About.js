import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import colors from '../assets/colors/colors'

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import womanGym from '../assets/images/womanGym.png';

import Stars from 'react-native-stars';
import SectionList from '../components/SectionList';

import {bachgahStuff} from '../assets/data/sectionListData';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;


Entypo.loadFont();
Feather.loadFont();
const About = ({navigation}) => {

    const [star, setStar] = useState('4.5');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* top Section */}
                <View style={styles.topWrapper}>
                    <View style={styles.headerWrapper}>
                        <TouchableOpacity onPress={()=> console.log('clicked')}>
                            <View style={styles.headerIconWrapper}>
                                <Entypo name="share" size={22} color={colors.white} style={styles.headerIcon} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> console.log('clicked')}>
                            <View style={styles.headerIconWrapper}>
                                <Feather name="arrow-right" size={22} color={colors.white} style={styles.headerIcon} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.orangeCircle}></View>
                    <Image source={womanGym} resizeMode="contain" style={styles.topImage} />
                </View>
                {/* bottom section */}
                <View style={styles.bottomWrapper}>
                    <View style={styles.teacherWrapper}>
                        <View style={styles.teacherInformation}>
                            <View style={styles.teacherTopWrapper}>
                                <View style={styles.rateWrapper}>
                                    <Stars
                                        display={+star}
                                        count={5}
                                        starSize={18}
                                        half={true}
                                        spacing={3}
                                        fullStar={require('../assets/images/starFilled.png')}
                                        emptyStar={require('../assets/images/starEmpty.png')}
                                        halfStar={require('../assets/images/starHalf.png')}
                                        />
                                        <Text style={styles.starTxt}>{star}</Text>
                                </View>
                                <View style={styles.teacherNameWrapper}>
                                    <Text style={styles.teacherTxt}>مینا موحدی</Text>
                                    <Entypo name="man" size={24} color={colors.gray} style={styles.teacherIcon} />
                                </View>
                            </View>
                            <Text style={styles.teacherSubTxt}>● مربی رسمی پلاتس</Text>
                        </View>
                        <View style={styles.teacherBottomWrapper}>
                            <TouchableOpacity
                                onPress={()=> {console.log('button clicked!')}}
                                style={styles.gymClockButtonWrapper}
                            >
                                <Text style={styles.gymClockTxt}>ساعات حضور در باچگاه</Text>
                                <Entypo name="clock" size={20} color={colors.white} style={styles.gymClockIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity
                                onPress={()=> {console.log('button clicked!')}}
                                style={styles.buttonWrapper}
                            >
                                <View style={styles.buttonIconWrapper}>
                                    <Feather name="arrow-left" size={20} color={colors.white} style={styles.buttonIcon} />
                                </View>
                                <Text style={[styles.gymClockTxt, {right: 15}]}>دریافت برنامه آنلاین</Text>
                    </TouchableOpacity>
                    
                    {/* bachgah Stuff */}
                    <View style={styles.bachgahStuffWrapper}>
                        <SectionList
                            title="امکانات باشگاه"
                            data={bachgahStuff}
                            showAll={false}
                        />
                    </View>

                    <View style={styles.bachgahAddressWrapper}>
                        <Text style={styles.bachgahAdressTxt}>● اطلاعات باشگاه</Text>
                        <View style={styles.addressDataWrapper}>
                            <View style={styles.phoneWrapper}>
                                <Text style={[styles.adressTxt, {color: colors.white}]}>شماره تماس</Text>
                                <View style={styles.addressIconWrapper}>
                                    <Entypo name="phone" size={20} color={colors.gray} style={styles.addressIcon} />
                                </View>
                            </View>
                            <View style={styles.mapWrapper}>
                                <Text style={styles.adressTxt}>آدرس باشگاه</Text>
                                <View style={styles.addressIconWrapper}>
                                        <Entypo name="map" size={20} color={colors.gray} style={styles.addressIcon} />
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightGray,
    },
    topWrapper: {
        height: Height * 0.4,
        backgroundColor: colors.purple
    },
    headerWrapper: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 15,
        justifyContent: "space-between",
    },
    headerIconWrapper: {
        height: 34,
        width: 34,
        backgroundColor: colors.lightPurple,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 32,
        borderColor: colors.lightGray,
        borderWidth: 0.2,
    },
    orangeCircle: {
        position: "absolute",
        alignSelf: "center",
        top: 50,
        height: 200,
        width: 200,
        backgroundColor: colors.yellow,
        borderRadius: 180,
        borderWidth: 15,
        borderColor: colors.lightPurple,
    },
    topImage: {
        position: "absolute",
        width: Width,
        height: Height * 0.2,
        top: 50,
    },
    bottomWrapper: {
        top: -85,
        marginHorizontal: 20,
    },
    teacherWrapper: {
        marginHorizontal: 15,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 16,
        backgroundColor: colors.white,

    },
    teacherTopWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 12,
        marginTop: 10,
    },
    teacherNameWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    teacherTxt: {
        fontFamily: "IRANSansMobile_Medium",
        fontSize: 20,
        color: colors.black,
    },
    teacherSubTxt: {
        marginHorizontal: 18,
        marginVertical: 0,
        fontFamily: "IRANSansMobile_UltraLight",
        fontSize: 15,
        // color: colors.gray
    },
    teacherBottomWrapper: {
        marginVertical: 20,
        marginHorizontal: 35,
    },
    gymClockButtonWrapper:{
        // height: 0,
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.orange,
        borderRadius: 12,
    },
    gymClockTxt: {
        fontFamily: "IRANSansMobile_Medium",
        fontSize: 20,
        color: colors.lightGray,
        textShadowColor:colors.black,
        textShadowOffset:{width: 3, height: 3},
        textShadowRadius:9,
    },
    gymClockIcon: {
        left: 10,
    },
    rateWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    starTxt: {
        fontFamily: "IRANSansMobile(FaNum)_Medium",
        fontSize: 14,
        color: colors.black
    },
    buttonWrapper: {
        paddingVertical: 10,
        marginHorizontal: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.purple,
        borderRadius: 12,
    },
    buttonIconWrapper: {
        height: 40,
        width: 40,
        backgroundColor: colors.lightPurple,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        right: 70,
        borderColor: colors.lightGray,
        borderWidth: 2,
    },
    buttonIcon: {
        // marginRight: 10,
    },
    bachgahStuffWrapper: {},
    bachgahAddressWrapper: {
        marginHorizontal: 15,
    },
    bachgahAdressTxt: {
        fontFamily: "IRANSansMobile_Bold",
        fontSize: 20,
    },
    addressDataWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 25,
    },
    phoneWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.purple,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.lightGray,
    },
    addressIconWrapper: {
        height: 30,
        width: 30,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 32,
    },
    addressIcon: {},
    adressTxt: {
        fontFamily: "IRANSansMobile_Medium",
        color: colors.black,
        marginHorizontal: 5,
        textShadowColor:colors.black,
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:7,
    },
    mapWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.yellow,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.lightGray,
    },

})
