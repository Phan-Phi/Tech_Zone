import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import ScreenLogIn from "../screens/ScreenLogIn";
import ScreenSignIn from "../screens/ScreenSignIn";
import ScreenWelcome from "../screens/ScreenWelcome";
import TabsNavigation from "./TabsNavigation";

export default function StackNavigation() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="ScreenWelcome" component={ScreenWelcome} />
      <Stack.Screen name="ScreenSignIn" component={ScreenSignIn} />
      <Stack.Screen name="ScreenLogIn" component={ScreenLogIn} /> */}
      <Stack.Screen name="TabsNavigation" component={TabsNavigation} />
    </Stack.Navigator>
  );
}
