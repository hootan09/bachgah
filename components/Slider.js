import React, {useState} from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, Image } from 'react-native'
import colors from '../assets/colors/colors';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const Slider = ({data}) => {

    const [imgActive, setImgActive] = useState(0);

    const onchange = ({nativeEvent}) =>{
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if(slide != imgActive){
                setImgActive(slide)
            }
            
        }
    }

    return (
        <View style={styles.sliderWrapper}>

            <ScrollView style={styles.scrollWrapper}
                onScroll={(nativeEvent) => onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
            >
                {
                    data.map((item, index)=>(
                        <Image 
                            key={index}
                            source={item.image} 
                            resizeMode="stretch" 
                            style={styles.sliderImage} 
                            />
                ))
                }
            </ScrollView>
            <View style={styles.dotWrapper}>
                {
                    data.map((item,index) => (
                        <Text 
                            key={index} 
                            style={imgActive == index ? styles.dotIconActive : styles.dotIcon}>
                                ●
                            </Text>
                    ))
                }
            </View>
        </View>
    )
}

export default Slider

const styles = StyleSheet.create({
    sliderWrapper: {
        marginHorizontal: 20,
        paddingVertical: 10,
    },
    scrollWrapper:{
    },
    sliderImage: {
        borderRadius: 32,
        marginHorizontal: 10,
        width: Width * 0.85,
        height: Height * 0.25,
    },
    dotWrapper: {
        bottom: 0,
        flexDirection: "row",
        // alignItems: "center",
        // justifyContent: "center"
        alignSelf: "center",
    },
    dotIconActive: {
        // top: 8,
        margin: 3,
        color: colors.black,
    },
    dotIcon: {
        // top: 8,
        margin: 3,
        color: colors.gray,
    }
})