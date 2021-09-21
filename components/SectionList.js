import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'

import colors from '../assets/colors/colors';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

Feather.loadFont();
Entypo.loadFont();

const SectionList = ({showAll,navigation,title,data}) => {

    console.log(data);
    const renderDailyPracticeItems = ({item}) => {
        return(
            <TouchableOpacity
                onPress={()=>navigation?.navigate("Details", {item: item})}
            >
                <View style={[styles.dailyPracticeItemWrapper, {backgroundColor: item.color}]}>
                    <View style={styles.iconItemsWrapper}>
                        <Entypo name={item.icon} size={50} color={colors.gray}/>
                    </View>
                    <Text style={styles.dailyPracticeItemTxt}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.dailyPracticeWrapper}>
        <View style={[styles.titleWrapper, {justifyContent: showAll? "space-between" : "flex-end"}]}>
                    {
                        showAll && (
                            <TouchableOpacity
                                onPress={()=> console.log("ShowAll")}
                            >
                                <View style={styles.showAllWrapper}>
                                    <View style={styles.showAllIconWrapper}>
                                        <Feather name="arrow-left" size={16} color={colors.black} style={styles.showAllIcon} />
                                    </View>
                                    <Text style={styles.showAllTxt}>نمایش همه</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
            <Text style={styles.dailyTitle}>● {title}</Text>
        </View>

        {/* Daily Practice items */}
        <View style={styles.dailyPracticeItemsWrapper}>
            <FlatList 
                data={data}
                renderItem={renderDailyPracticeItems}
                keyExtractor={(item)=> item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                inverted={true}
                style={styles.flatListWrapper}
            />
        </View>

    </View>
    )
}

export default SectionList

SectionList.defaultProps = {
    showAll: true,
  }

const styles = StyleSheet.create({
    dailyPracticeWrapper: {
        marginHorizontal: 15,
        marginVertical: 24,
    },
    titleWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dailyTitle: {
        fontFamily: "IRANSansMobile_Bold",
        fontSize: 20,

    },
    showAllWrapper: {
        flexDirection: "row",
        marginHorizontal: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    showAllTxt: {
        fontFamily: "IRANSansMobile_Light",
        fontSize: 16,
        color: colors.darkGray,
    },
    showAllIconWrapper: {
        height: 20,
        width: 20,
        right: 10,
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
    showAllIcon: {
        color: colors.darkGray,
        alignItems: "center",
        justifyContent: "center",
    },
    flatListWrapper: {
        transform: [{ scaleX: -1 }],
    },
    dailyPracticeItemsWrapper: {
        marginHorizontal: 5,
        paddingVertical: 15,
    },
    dailyPracticeItemWrapper: {
        flexDirection: "column",
        width: 120,
        height: 160,
        justifyContent: "center",
        alignItems: "center",
        // paddingHorizontal: 10,
        // paddingVertical: 15,
        marginRight: 12,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.gray,
    },
    iconItemsWrapper: {
        width: 90,
        height: 90,
        backgroundColor: colors.white,
        borderRadius: 64,
        borderWidth: 1,
        borderColor: colors.gray,
        justifyContent: "center",
        alignItems: "center",
        transform: [{ scaleX: -1 }]
    },
    dailyPracticeItemTxt: {
        top: 10,
        fontFamily: "IRANSansMobile_Medium",
        fontSize: 20,
        color: colors.lightGray,
        textShadowColor:colors.lightGray,
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:8,
    },
})
