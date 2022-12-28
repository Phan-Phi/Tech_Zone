import { TabView } from "react-native-elements";
import { Button, Icon, Tab, Text } from "@rneui/themed";
import React, { useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Product from "../components/Product";
import { Carousel } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH } from "../components/CarouselCardItem";

const data = [
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    imgUrl:
      "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/m/a/macbook-air-gold-select-201810_4.jpg",
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl:
      "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/0/_0000_macbook-air-gallery1-20201110_geo_us.jpg",
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl:
      "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/_/0/_0003_macbook-air-gallery4-20201110.jpg",
  },
];

const colors = [
  { color: "#AEB2B5" },
  { color: "#F1DFD3" },
  { color: "#DFE1E0" },
];

export default function ScreentProduct({ navigation }) {
  const { navigate, goBack } = navigation;

  const [index, setIndex] = useState(0);
  const [color, setColor] = useState(0);

  const isCarousel = useRef(null);

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginHorizontal: 15 }}>
        <View style={styles.flex1}>
          <Button buttonStyle={[styles.buttonStyle]} raised>
            <Icon
              name="chevron-back-outline"
              type="ionicon"
              size={30}
              style={{
                paddingHorizontal: 4,
              }}
              onPress={() => {
                goBack();
              }}
            />
          </Button>
          <Button buttonStyle={[styles.buttonStyle]} raised>
            <Icon
              name="heart"
              type="ionicon"
              size={30}
              color="#FF5050"
              style={{
                paddingHorizontal: 4,
              }}
            />
          </Button>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Carousel
            layout="default"
            ref={isCarousel}
            data={data}
            renderItem={CarouselCardItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={400}
            autoplay={true}
          />
        </View>

        <View>
          <Text style={styles.title}>
            Apple M1 Chip with 8-Core CPU and 8-Core GPU 512GB Storage
          </Text>

          <Text>Space Gray</Text>

          <View style={styles.flexIconColor}>
            {colors.map((el, idx) => {
              return (
                <TouchableHighlight
                  underlayColor="white"
                  onPress={() => {
                    setColor(idx);
                  }}
                >
                  <View
                    key={idx}
                    style={{
                      width: 50,
                      height: 50,
                      borderWidth: 1.5,
                      padding: 3,
                      borderRadius: 50,
                      borderColor: idx == color ? "#2879E2" : "#C4C4C4",
                      marginLeft: idx % colors.length ? 6 : 0,
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: el.color,
                        borderRadius: 40,
                        width: "100%",
                        height: "100%",
                      }}
                    ></View>
                  </View>
                </TouchableHighlight>
              );
            })}
          </View>

          <View>
            <Tab
              value={index}
              onChange={setIndex}
              indicatorStyle={{ width: "25%", backgroundColor: "black" }}
            >
              <Tab.Item
                title="Description"
                titleStyle={(active: boolean) => {
                  if (active) {
                    return { color: "black" };
                  } else {
                    return { color: "#767676" };
                  }
                }}
              />
              <Tab.Item
                title="Reviews"
                titleStyle={(active: boolean) => {
                  if (active) {
                    return { color: "black" };
                  } else {
                    return { color: "#767676" };
                  }
                }}
              />
            </Tab>

            <TabView value={index} onChange={setIndex}>
              <TabView.Item>
                <View>
                  <Text>
                    Apple M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core
                    Neural Engine
                  </Text>
                  <Text>8GB unified memory</Text>
                  <Text>512GB SSD storage¹</Text>
                  <Text>Retina display with True Tone</Text>
                </View>
              </TabView.Item>

              <TabView.Item>
                <View>
                  <Text>
                    Apple M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core
                    Neural Engine
                  </Text>
                  <Text>8GB unified memory</Text>
                  <Text>512GB SSD storage¹</Text>
                  <Text>Retina display with True Tone</Text>
                </View>
              </TabView.Item>
            </TabView>
          </View>

          <View style={{ marginTop: 30 }}>
            <Button
              buttonStyle={{ borderRadius: 20 }}
              ViewComponent={LinearGradient}
              linearGradientProps={{
                colors: ["#5A5A5A", "#000000"],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
            >
              <View style={styles.flex}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigate("ScreenShoppingCart");
                  }}
                >
                  <View style={styles.flexButton}>
                    <LinearGradient
                      colors={["#5A5A5A", "#000000"]}
                      start={{ x: 0, y: 0.5 }}
                      end={{ x: 1, y: 0.2 }}
                      style={{
                        borderRadius: 15,
                        paddingHorizontal: 0,
                      }}
                    >
                      <Icon
                        name="cart"
                        type="ionicon"
                        size={30}
                        color="white"
                        style={{
                          paddingHorizontal: 7,
                          paddingVertical: 7,
                        }}
                      />
                    </LinearGradient>

                    <Text style={[styles.text, { marginLeft: 10 }]}>
                      Add to cart
                    </Text>
                  </View>
                </TouchableWithoutFeedback>

                <Text style={styles.text}>$1249.00</Text>
              </View>
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },

  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  flex1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    paddingTop: 20,
  },
  flexButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  flexIconColor: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 10,
  },

  buttonStyle: { backgroundColor: "white" },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 27,
  },

  text: {
    color: "white",
    fontWeight: "bold",
  },
});
