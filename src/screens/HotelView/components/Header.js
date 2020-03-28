import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

//imports styles
import {
    colors,
    gs
} from '../../../styles/styles'

//imports fonts
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

const imageHotelMin = require('../../../../assets/imgs/hotel-min.jpg')
const imageHotelMin2 = require('../../../../assets/imgs/hotel-min-2.jpg')
const imageHotelMin5 = require('../../../../assets/imgs/hotel-min-5.jpg')

export default  Header = () => {
    return (
        <View>
            <Image source={imageHotelMin5} style={styles.imgHotelMin} />

            <View style={styles.topButtons}>
                <AntDesign name='close' size={24} color="#fff" />

                <View style={gs.rowCenter}>
                    <AntDesign name='save' size={24} style={styles.topButtonRight} />
                    <AntDesign name='sharealt' size={24} style={styles.topButtonRight} />
                    <Entypo name='dots-three-vertical' size={18} style={styles.topButtonRight} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imgHotelMin: {
        width: '100%',
        height: 400,
    },
    topButtons: {
        ...gs.rowBetween,
        position: 'absolute',
        top: 35,
        left: 32,
        right: 32
    },
    topButtonRight: {
        marginLeft: 12,
        color: '#fff'
    },
})
