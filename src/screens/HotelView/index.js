import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native'

//imports styles
import {
    colors
} from '../../styles/styles'

//imports components
import Header from './components/Header'
import BookMark from './components/BookMark'
import About from './components/About'

export default  index = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />

            <Header />

            <View>
                <BookMark />
                <About />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBg
    },
    
})
