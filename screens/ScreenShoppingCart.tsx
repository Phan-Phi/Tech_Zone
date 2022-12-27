import { Button, Icon, Text } from "@rneui/themed";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";

export default function ScreenShoppingCart({ navigation }) {
  const { navigate, goBack } = navigation;

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, styles.paddingHorizontal]}>
        <Button
          buttonStyle={[styles.buttonStyle]}
          containerStyle={{ marginBottom: 0 }}
          raised
        >
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

        <Text h3 h3Style={{ fontWeight: "bold" }}>
          Shopping Cart
        </Text>

        <Button
          buttonStyle={[styles.buttonStyle]}
          containerStyle={{ marginBottom: 0 }}
          raised
        >
          <Icon
            name="cart"
            type="ionicon"
            size={30}
            style={{
              paddingHorizontal: 4,
            }}
            onPress={() => {
              navigate("TabsNavigation");
            }}
          />
        </Button>
      </View>

      <Grid>
        <Row>
          <Col size={35}>
            <Text>1</Text>
          </Col>

          <Col size={65}>
            <Text>1</Text>
          </Col>
        </Row>
        <Row></Row>
        <Row></Row>
      </Grid>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
  paddingHorizontal: {
    paddingHorizontal: 15,
  },
  buttonStyle: { backgroundColor: "white" },
});
