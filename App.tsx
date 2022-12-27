import { StatusBar } from "expo-status-bar";
import CustomThemeProvider from "./ThemeProvider/CustomThemeProvider";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./navigations/StackNavigation";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <CustomThemeProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.SafeAreaView}>
          <StatusBar
            // backgroundColor="black"
            barStyle="light-content"
            translucent
          />

          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </CustomThemeProvider>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
