import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Link, NativeRouter, Route, Routes } from 'react-router-native'
import Navigation from './layout/Navigation'
import Home from './Page/Home'
import ListBelanja from './Page/ListBelanja'
import Pengeluaran from './Page/Pengeluaran'

const App = () => {
  return (
    <NativeRouter>
        <View style={styles.container}>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/list" element={<ListBelanja/>} />
            <Route path="/pengeluaran" element={<Pengeluaran/>} />
          </Routes>
          <Navigation/>
        </View>
    </NativeRouter>
  )
}

export default App

const styles = StyleSheet.create({
  container:  {
    flex: 1,
    padding: 20,
    
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  navItem: {

  }
})
