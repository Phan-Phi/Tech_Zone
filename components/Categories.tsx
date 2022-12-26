import { Button, Image, Text } from "@rneui/themed";
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
    title: "Laptops",
    img: "../assets/img/iconTwiter.png",
  },
  {
    title: "Watches",
    img: "../assets/img/iconTwiter.png",
  },
  {
    title: "Phones",
    img: "../assets/img/iconTwiter.png",
  },
  {
    title: "Tablet",
    img: "../assets/img/iconTwiter.png",
  },
];

export default function Categories() {
  return (
    <View style={styles.container}>
      <Carousel
        data={carouselItems}
        renderItem={(el: ITEM, idx: number) => {
          return (
            <View key={idx} style={styles.view}>
              <View style={styles.flex}>
                <View style={styles.view2}>
                  <Image
                    source={require("../assets/img/appleWatch.png")}
                    style={styles.img}
                  />
                </View>
                <View>
                  <Text style={styles.text1}>{el.item.title}</Text>
                </View>
              </View>
            </View>
          );
        }}
        sliderWidth={screenWidth}
        itemWidth={200}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },

  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  view: { backgroundColor: "white", borderRadius: 100 },
  view2: { width: "40%", borderRadius: 100 },

  text1: {
    fontSize: 17,
    fontWeight: "bold",
  },

  button: { marginBottom: 0, marginTop: 5 },

  img: { width: "100%", height: 65 },
});
