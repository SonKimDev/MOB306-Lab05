import { SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <WebView
          source={{ uri: 'https://www.google.com.vn/' }} // Đặt URL bạn muốn hiển thị
          style={{ flex: 1 }}
        />
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})