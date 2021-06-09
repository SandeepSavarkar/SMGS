import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Header from "../../components/ui/header";
class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Career Page",
      bodyText: "Career."
    };
  }

  onPressTitle = () => {
    this.setState({ titleText: "Bird's Nest [pressed]" });
  };

  render() {
    return (
      <View> 
        <Header title="Profile" />
      <Text style={styles.baseText}>
        <Text
          style={styles.titleText}
          onPress={this.onPressTitle}
        >
          {this.state.titleText}
          {"\n"}
          {"\n"}
        </Text>
        <Text numberOfLines={5}>{this.state.bodyText}</Text>
      </Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default Career;