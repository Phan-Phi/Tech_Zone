import React, { useRef, useState } from "react";
import { Button, Text } from "@rneui/themed";
import { ScrollView, StyleSheet, View } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
import { Carousel, Pagination } from "react-native-snap-carousel";
import CarouselCardItem, {
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from "../components/CarouselCardItem";

const data = [
  {
    title: "Aenean leo",
    body: "Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    imgUrl: "https://picsum.photos/id/11/200/300",
  },
  {
    title: "In turpis",
    body: "Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ",
    imgUrl: "https://picsum.photos/id/10/200/300",
  },
  {
    title: "Lorem Ipsum",
    body: "Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.",
    imgUrl: "https://picsum.photos/id/12/200/300",
  },
];

export default function ScreenWelcome({
  navigation,
}: {
  navigation: { navigate: () => void };
}) {
  const isCarousel = useRef(null);

  const [index, setIndex] = useState(0);

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.textSkip}>skip {">"}</Text>
      </View>

      <View style={styles.view}>
        <Text h3>Welcome Tech world</Text>
        <Text h4>Please log in or sign in to countinue</Text>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 120,
        }}
      >
        <Carousel
          layout="default"
          // layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={400}
          // inactiveSlideShift={0}
          // useScrollView={true}
          onSnapToItem={(index) => setIndex(index)}
          autoplay={true}
        />

        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
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
  view: { alignItems: "center", marginBottom: 53 },
  text: { fontSize: 15 },

  textSkip: {
    textAlign: "right",
    marginTop: 20,
    marginBottom: 40,
  },

  buttonOutline: {
    backgroundColor: "white !important",
  },
});
