import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'react-router-native'

const Navigation = () => {
    return (
        <View style={styles.nav}>
            <Link to="/"><Text style={styles.navItem}>Home</Text></Link>
            <Link to="/list"><Text style={styles.navItem}>List</Text></Link>
            <Link to="/pengeluaran"><Text style={styles.navItem}>Pengeluaran</Text></Link>
        </View>
    )
}

export default Navigation

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        fontSize: 26
    }
})
