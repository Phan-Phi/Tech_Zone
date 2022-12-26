import React, { useMemo } from "react";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

import { Button, Divider, Image, Input, Text } from "@rneui/themed";

export default function ScreenLogIn({ navigation }) {
  const { navigate, goBack } = navigation;
  const { height } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
      <View style={{ height: height, display: "flex" }}>
        <View style={styles.view1}>
          <Text style={[styles.textWhite]} h2>
            Log in
          </Text>
          <Text style={styles.textWhite}>Hey there! Welcome back</Text>
        </View>

        <View style={styles.view2}>
          <View style={styles.imageViewLaptop}>
            <Text h4 h4Style={{ color: "white", fontSize: 18 }}>
              Here are your dream things
            </Text>
            <Image
              source={require("../assets/img/appleWatch.png")}
              style={styles.imageLaptop}
            />
          </View>

          <View>
            <Input placeholder="chamudithadeshan234@gmail.com" label="Email" />
          </View>
          <View>
            <Input
              placeholder="Password"
              label="Password"
              secureTextEntry={true}
              errorStyle={{ display: "none" }}
            />
          </View>

          <Text style={styles.forgotPassword}>Forgot Password?</Text>

          <Button
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

  forgotPassword: {
    textAlign: "right",
    marginBottom: 32,
  },

  view1: {
    height: "15%",
    marginBottom: 180,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  view2: {
    height: "85%",
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
    top: -170,
    right: -50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  imageLaptop: {
    width: 200,
    height: 200,
  },
});
