import React, { useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { Button, Divider, Image, Input, Text } from "@rneui/themed";
import { Icon } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";

export default function ScreenSignIn({ navigation }) {
  const { navigate, goBack } = navigation;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.view1}>
        <Text style={[styles.textWhite]} h2>
          Sign up
        </Text>
        <Text style={styles.textWhite}>Create an account to get started</Text>
      </View>

      <View style={styles.view2}>
        <View style={styles.imageViewLaptop}>
          <Image
            source={require("../assets/img/laptop.png")}
            style={styles.imageLaptop}
          />
        </View>

        <Input placeholder="Chamuditha Deshan" label="Name" />
        <Input placeholder="chamudithadeshan234@gmail.com" label="Email" />
        <Input placeholder="Password" label="Password" secureTextEntry={true} />
        <Input
          placeholder="Repeat Password"
          label="Repeat Password"
          secureTextEntry={true}
          rightIcon={<Icon name="eye-off-outline" type="ionicon" size={25} />}
        />

        <Button
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ["#5A5A5A", "#000000"],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
          onPress={() => {
            navigate("TabsNavigation");
          }}
        >
          Countinue
        </Button>

        <View style={styles.viewFooter}>
          <View style={styles.viewIconSocial}>
            <Divider style={{ flexGrow: 8 }} />
            <Text style={{ flexGrow: 2, textAlign: "center" }}>
              or continue with
            </Text>
            <Divider style={{ flexGrow: 8 }} />
          </View>

          <View style={styles.viewIconSocial}>
            <Image
              source={require("../assets/img/iconFace.png")}
              style={styles.imageSocial}
            />

            <Image
              source={require("../assets/img/iconGoogle.png")}
              style={styles.imageSocial}
            />

            <Image
              source={require("../assets/img/iconTwiter.png")}
              style={styles.imageSocial}
            />
          </View>

          <View style={styles.viewAccount}>
            <Text h4 h4Style={{ color: "#767676" }}>
              Already have an account?
            </Text>
            <Text
              onPress={() => {
                navigate("ScreenLogIn");
              }}
            >
              Log in
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  textWhite: {
    color: "white",
  },

  view1: {
    marginBottom: 50,
    paddingHorizontal: 20,
  },
  view2: {
    position: "relative",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderTopStartRadius: 20,
    borderTopRightRadius: 20,
  },

  viewFooter: {
    alignItems: "center",
  },

  viewIconSocial: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
  },

  viewAccount: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  imageSocial: {
    marginHorizontal: 10,
    width: 50,
    height: 50,
  },

  imageViewLaptop: {
    position: "absolute",
    top: -70,
    right: 20,
  },

  imageLaptop: {
    width: 160,
    height: 100,
  },
});
