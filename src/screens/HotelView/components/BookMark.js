//import react components
import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

//import styles and icons
import Feather from 'react-native-vector-icons/Feather'
import {
    gs,
    colors
} from '../../../styles/styles'

//import components

export default BookMark = () => {
    return (
        <View style={styles.bookmark}>
            <Feather name='bookmark' size={24} color={colors.pink} />
        </View>
    )
}

const styles = StyleSheet.create({
    bookmark: {
        position: 'absolute',
        width: 56,
        height: 56,
        right: 32,
        top: -56 / 2,
        backgroundColor: colors.text,
        ...gs.center,
        borderRadius: 56 / 2,
        zIndex: 10
    },
})


