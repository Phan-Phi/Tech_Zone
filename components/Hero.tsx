import { Button, Image, Text } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Carousel } from "react-native-snap-carousel";

type ITEM = {
  dataIndex: number;
  index: number;
  item: { img: string; subTitle: string; title: string; text: string };
}[];

const { width: screenWidth } = Dimensions.get("window");

const carouselItems = [
  {
    title: "Apple Watch Series 7",
    text: "Smart Watch",
    subTitle: "GET A 30% DISCOUNT ON YOUR FIRST ORDER!",
    img: "../assets/img/iconTwiter.png",
  },
  {
    title: "Apple Watch Series 7",
    text: "Smart Watch",
    subTitle: "GET A 30% DISCOUNT ON YOUR FIRST ORDER!",
    img: "../assets/img/iconTwiter.png",
  },
  {
    title: "Apple Watch Series 7",
    text: "Smart Watch",
    subTitle: "GET A 30% DISCOUNT ON YOUR FIRST ORDER!",
    img: "../assets/img/iconTwiter.png",
  },
  {
    title: "Apple Watch Series 7",
    text: "Smart Watch",
    subTitle: "GET A 30% DISCOUNT ON YOUR FIRST ORDER!",
    img: "../assets/img/iconTwiter.png",
  },
];

export default function Hero() {
  return (
    <View style={styles.container}>
      <Carousel
        layout="default"
        data={carouselItems}
        renderItem={(el: ITEM, idx: number) => {
          return (
            <LinearGradient
              colors={["#5A5A5A", "#000000"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1.8, y: 0.2 }}
              key={idx}
              style={{
                // backgroundColor: "black",
                borderRadius: 15,
                paddingHorizontal: 0,
              }}
            >
              <View style={styles.flex}>
                <View style={{ width: "60%" }}>
                  <Text style={styles.text1}>{el.item.title}</Text>
                  <Text style={styles.text1}>{el.item.text}</Text>
                  <Text style={styles.subTitle}>
                    GET A <Text style={styles.subTitle2}>30%</Text> DISCOUNT ON
                    YOUR FIRST ORDER!
                  </Text>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Button
                      radius="lg"
                      containerStyle={styles.button}
                      buttonStyle={{
                        backgroundColor: "white",

                        paddingHorizontal: 20,
                        paddingVertical: 5,
                      }}
                      titleStyle={{ color: "black" }}
                    >
                      Get Now
                    </Button>
                  </View>
                </View>

                <View style={{ width: "40%" }}>
                  <Image
                    source={require("../assets/img/appleWatch.png")}
                    style={{
                      width: "100%",
                      height: 130,
                    }}
                  />
                </View>
              </View>
            </LinearGradient>
          );
        }}
        sliderWidth={500}
        itemWidth={350}
        containerCustomStyle={{
          // backgroundColor: "grey",
          paddingHorizontal: 0,
          marginHorizontal: 0,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingHorizontal: 20,
    alignItems: "center",
    // backgroundColor: "red",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  text1: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  subTitle: {
    fontSize: 13.5,
    color: "white",
  },
  subTitle2: {
    fontSize: 13.5,
    color: "red",
  },

  button: { marginBottom: 0, marginTop: 5 },
});
