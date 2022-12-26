import React from "react";
import { ThemeProvider, createTheme } from "@rneui/themed";

const theme = createTheme({
  lightColors: {
    primary: "#899656",
  },
  darkColors: {
    primary: "#344512",
  },

  components: {
    Button: {
      radius: "md",
      buttonStyle: {
        backgroundColor: "black",
        paddingVertical: 10,
      },

      containerStyle: {
        marginBottom: 26,
      },

      size: "sm",
      titleStyle: {
        color: "white",
      },
    },

    Text: {
      h2Style: {
        fontSize: 30,
        fontWeight: "600",
        lineHeight: 45,
      },
      h3Style: { fontSize: 20, fontWeight: "600" },
      h4Style: { fontSize: 15, fontWeight: "normal" },
    },

    Input: {
      labelStyle: {
        color: "#767676",
      },
      containerStyle: {
        paddingHorizontal: 0,
      },

      inputContainerStyle: {
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 24,
        paddingVertical: 5,
        borderColor: "#C4C4C4",
      },
    },
  },
});

export default function CustomThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
