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

export default Address = () => {
    return (
        <View style={styles.container}>
            <Text>Address</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...gs.rowCenter,
        ...gs.sectionContainer
    },
})


