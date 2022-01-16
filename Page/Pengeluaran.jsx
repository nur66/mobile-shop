import axios from 'axios'
import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { useNavigate } from 'react-router-native'

const Pengeluaran = () => {
    const [user, setUser] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    let navigate = useNavigate()

    // Clear
    const clear = ()=> {
        setUser('')
        setTitle('')
        setContent('')
    }

    // Save
    const save = ()=> {
        const fdata = {
            // yang kiri ke database, kanan dari form
            userid: user,
            title: title,
            content: content
        }
        try {
            axios.post('https://sanctumtyo.herokuapp.com/api/article', fdata)
            .then(()=>{
                navigate('/list')
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{padding:20}}>
                <TextInput value={user} onChangeText={(e)=>{
                    setUser(e)
                }} style={styles.input} />

                <TextInput value={title} onChangeText={(e)=>{
                    setTitle(e)
                }} 
                style={styles.input}
                />

                <TextInput 
                value={content}
                multiline={true}
                numberOfLines={4}
                onChangeText={(e)=>{
                    setContent(e)
                }}
                style={styles.input}
                />

                <View style={styles.tombol}>
                    <Button title='Save' onPress={save} />
                </View>
                
                    <Button title='Reset' style={{backgroundColor: 'yellow'}} onPress={clear} />
                
            </ScrollView>
        </View>
    )
}

export default Pengeluaran

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        height: 40,
        width: 300,
        paddingHorizontal: 10,
        marginBottom: 14,
        color: 'red'
    },
    tombol: {
        margin: 10
    }
})
