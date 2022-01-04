import React from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image } from 'react-native'


const ListBelanja = () => {
    const peterpan = require('../assets/gambar/peterpan.jpg')
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* <Image source={peterpan} style={{width:400, resizeMode:'contain'}} /> */}
                
            </ScrollView>
        </SafeAreaView>
    )
}

export default ListBelanja

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'justify'
    },
    gambar: {
        
    }
})
