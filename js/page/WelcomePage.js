/**
 * @author HaganWu
 * @description 欢迎页面
 * @fileName WelcomePage.js
 * @data 2021/7/16 13:44
 */
import React from "react";
import { StyleSheet, Text, View } from "react-native";

class WelcomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>WelcomePage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 26,
    color: "blue",
  },
});
export default WelcomePage;
