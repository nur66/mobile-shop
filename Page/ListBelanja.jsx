import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView, Image, FlatList } from 'react-native'


const ListBelanja = () => {
    // const peterpan = require('../assets/gambar/peterpan.jpg')
    const [artikel, setArtikel] = useState([])
    const getArtikel = async() => {
        try {
            let res = await axios.get('https://sanctumtyo.herokuapp.com/api/articles')
            setArtikel(res.data)
        } catch (error) {
            console.log(error.message);
        }
    }
    
    useEffect(()=>{
        getArtikel()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* <Image source={peterpan} style={{width:400, resizeMode:'contain'}} /> */}
                {artikel.map((item, i)=>(
                    <View key={i} style={styles.listView}>
                        <Text style={styles.list}>{item.id}</Text>
                        <Text style={styles.list}>{item.userid}</Text>
                        <Text style={styles.list}>{item.title}</Text>
                        <Text style={styles.list}>{item.content}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default ListBelanja

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        textAlign: 'justify'
    },
    listView: {
        margin: 10,
        padding: 10,
        backgroundColor: 'orange'
    },  
    list: {
        fontSize: 25
    }
})
