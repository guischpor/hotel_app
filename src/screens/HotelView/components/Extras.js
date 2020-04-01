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

export default Extrass = () => {

    const extras = [
        'Payment at Checkout',
        'WI-FI Network is off by 12:00pm',
        'No swimming after 10:00pm',
        'No more than 2 bags of luggage',
        'No signing while showering',
        'No Refunds'
    ]

    return (
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>Before you go</Text>
            <View style={styles.list}>
                {extras.map((extra, key) => {
                    return (
                        <Text style={styles.listItem} key={key}>
                            &mdash;
                            {extra}
                        </Text>
                    )
                })}
            </View>
            <View style={{marginTop: 32, marginBottom: -40}}>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={{fontWeight: '700', color: '#fff'}}>Filter</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        marginTop: 8,
        marginBottom: 64
    },
    list: {
        marginTop: 16,
        marginLeft: 8
    },
    listItem: {
        marginVertical: 8,
        color: colors.textSec
    },
    filterButton: {
        ...gs.button,
        paddingVertical: 16
    }
})


