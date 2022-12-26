import { AirbnbRating, Button, Icon, Image, Text } from "@rneui/themed";
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
    title: "MacBook Air with M1 Chip",
    text: "Space Gray",
    subTitle: "$1,249.00",
    img: "../assets/img/macpro.png",
  },
  {
    title: "MacBook Pro with M1 Pro Chip",
    text: "Silver",
    subTitle: "$2,499.00",
    img: "../assets/img/macpro.png",
  },
  {
    title: "MacBook Pro M1 Chip",
    text: "Gold",
    subTitle: "$1,499.00",
    img: "../assets/img/macpro.png",
  },
  {
    title: "MacBook Air with M1 Chip",
    text: "Space Gray",
    subTitle: "$1,249.00",
    img: "../assets/img/macpro.png",
  },
];

export default function Product() {
  return (
    <View style={styles.container}>
      <Carousel
        data={carouselItems}
        renderItem={(el: ITEM, idx: number) => {
          return (
            <View
              key={idx}
              style={{ backgroundColor: "white", borderRadius: 15 }}
            >
              <View style={styles.flex}>
                <View style={{ width: "100%" }}>
                  <Image
                    source={require("../assets/img/macpro.png")}
                    style={{
                      width: "100%",
                      height: 140,
                    }}
                  />
                </View>

                <View style={{ width: "100%" }}>
                  <View style={styles.buttonFlex}>
                    <Button
                      radius="lg"
                      containerStyle={styles.button}
                      buttonStyle={{
                        backgroundColor: "black",

                        paddingHorizontal: 20,
                        paddingVertical: 5,
                      }}
                      titleStyle={{ color: "white" }}
                    >
                      NEW
                    </Button>
                  </View>

                  <Text style={styles.text1}>{el.item.title}</Text>

                  <View style={styles.rating}>
                    <Icon
                      name="star"
                      type="ionicon"
                      size={20}
                      color="#FFCB45"
                      style={{
                        paddingHorizontal: 1,
                      }}
                    />
                    <Icon
                      name="star"
                      type="ionicon"
                      size={20}
                      color="#FFCB45"
                      style={{
                        paddingHorizontal: 1,
                      }}
                    />
                    <Icon
                      name="star"
                      type="ionicon"
                      size={20}
                      color="#FFCB45"
                      style={{
                        paddingHorizontal: 1,
                      }}
                    />
                    <Icon
                      name="star-half"
                      type="ionicon"
                      size={20}
                      color="#FFCB45"
                      style={{
                        paddingHorizontal: 1,
                      }}
                    />
                  </View>

                  <Text style={styles.text1}>{el.item.text}</Text>
                  <Text style={styles.text1}>{el.item.subTitle}</Text>
                </View>
              </View>
            </View>
          );
        }}
        sliderWidth={screenWidth}
        itemWidth={220}
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
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },

  text1: {
    fontSize: 18,
    fontWeight: "800",
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
  buttonFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 10,
  },

  rating: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
});
