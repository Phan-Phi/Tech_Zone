import { Button, Chip, Text } from "@rneui/themed";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Icon } from "@rneui/themed";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Product from "../components/Product";
import { Carousel } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH } from "../components/CarouselCardItem";
import { LinearGradient } from "expo-linear-gradient";

export default function ScreenHome({ navigation }) {
  return (
    <ScrollView>
      <View style={[styles.viewHeader, styles.container]}>
        <Button buttonStyle={[styles.buttonStyle]} raised>
          <Icon
            name="menu"
            type="material"
            size={30}
            style={{
              paddingHorizontal: 4,
            }}
          />
        </Button>
        <Button buttonStyle={[styles.buttonStyle]} raised>
          <Icon
            name="search-outline"
            type="ionicon"
            size={30}
            style={{
              paddingHorizontal: 4,
            }}
          />
        </Button>
      </View>

      <View style={[styles.container]}>
        <Text h4 h4Style={{ fontSize: 18, fontWeight: "bold" }}>
          Hello Chamuditha,
        </Text>
        <Text h4 h4Style={{ fontSize: 11 }}>
          Let’s get somethings?
        </Text>
      </View>

      <Hero />

      <View style={[styles.container]}>
        <Text
          h4
          h4Style={{ fontSize: 18, fontWeight: "bold", color: "#3D3D3D" }}
        >
          Categories
        </Text>

        <Categories />
      </View>

      <View style={[styles.container]}>
        <View style={styles.trending}>
          <Text
            h4
            h4Style={{ fontSize: 18, fontWeight: "bold", color: "#3D3D3D" }}
          >
            Trending Now
          </Text>

          <View style={styles.viewAll}>
            <Text h4>View All</Text>

            <Icon
              name="chevron-forward-outline"
              type="ionicon"
              size={20}
              color="white"
              style={{
                backgroundColor: "black",
                borderRadius: 5,
              }}
            />
          </View>
        </View>

        <Product navigation={navigation} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  viewHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  buttonStyle: { backgroundColor: "white" },

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

  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },

  categories: {
    color: "#3D3D3D",
  },

  trending: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewAll: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 200,
    width: 350,
  },
});
