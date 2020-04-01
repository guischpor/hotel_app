//import react components
import React from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'

//import styles and icons
import Feather from 'react-native-vector-icons/Feather'
import {
    gs,
    colors
} from '../../../styles/styles'

//import components

const hotel = {
    name: 'Mt. Bora-Bora',
    price: '$780',
    location: 'South Pacific',
    about: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "Lorem ipsum dolor sit amet, consectetur.'
}

export default About = () => {
    return (
        <View style={styles.container}>
            <Text style={gs.title}>{hotel.name}</Text>
            <Text style={styles.info}>
                {hotel.price} &#8226; {hotel.location}
            </Text>
            <View style={gs.divider} />
            <Text style={gs.sectionTitle}>About {hotel.name}</Text>
            <Text style={styles.about}>{hotel.about}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg,
    },
    info: {
        color: colors.textSec,
        fontWeight: '600',
        marginTop: 4
    },
    about: {
        fontSize: 13,
        fontWeight: '600',
        color: colors.textSec,
        marginTop: 6,
        lineHeight: 20
    }
})


