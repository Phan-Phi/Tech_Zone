import React from "react";
import { Button, Text } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";

export default function ScreenWelcome({
  navigation,
}: {
  navigation: { navigate: () => void };
}) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.textSkip}>skip {">"}</Text>
      </View>

      <View style={styles.view}>
        <Text h3>Welcome Tech world</Text>
        <Text h4>Please log in or sign in to countinue</Text>
      </View>

      <View>
        <Button
          title="Sign up"
          onPress={() => {
            navigation.navigate("ScreenSignIn");
          }}
        />
        <Button
          title="Log in"
          type="outline"
          buttonStyle={{
            backgroundColor: "white",
            borderColor: "black",
            borderWidth: 1,
          }}
          titleStyle={{ color: "black" }}
          onPress={() => {
            navigation.navigate("ScreenLogIn");
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  view: { alignItems: "center" },
  text: { fontSize: 15 },

  textSkip: {
    textAlign: "right",
    marginTop: 20,
  },

  buttonOutline: {
    backgroundColor: "white !important",
  },
});
