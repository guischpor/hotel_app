//import react components
import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native'

//import styles and icons
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import {
    gs,
    colors
} from '../../../styles/styles'

//import components

const imageMap = require('../../../../assets/imgs/map-black.jpg')
const pin = require('../../../../assets/imgs/pin-2.png')

export default Address = () => {
    return (
        <View>
            <View style={{backgroundColor: '#000'}}>
                <Image source={imageMap} style={styles.mapStyle}/>
            </View>

            <View style={styles.addressContainer}>
                <Image source={pin} style={styles.pinStyle}/>
                <View style={{marginLeft: 8, marginTop: 24}}>
                    <Text style={gs.sectionTitle}>Address</Text>
                    <Text style={styles.address}>{`Motu Piti Aau, 98730,\nPolinésia Francesa`}</Text>
                    <View style={{marginTop: 16}}>
                        <TouchableOpacity style={styles.checkButton}>
                            <Text style={gs.smallText}>Check it</Text>
                            <Entypo name='chevron-right' size={12} color='#fff' style={{marginLeft: 4}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mapStyle: {
        height: 200,
        opacity: 0.2
    },
    pinStyle: {
        width: 48,
        height: 48
    },
    addressContainer: {
        ...gs.absoluteFull,
        flexDirection: 'row',
        paddingHorizontal: 32,
        paddingVertical: 16
    },
    address: {
        ...gs.smallText,
        color: colors.darkHl,
        marginTop: 6,
        letterSpacing: 1,
        lineHeight: 20
    },
    checkButton: {
        ...gs.button,
        paddingVertical: 8,
        paddingHorizontal: 16,
        alignSelf: 'flex-start',
        flexDirection: 'row'
    },
})


