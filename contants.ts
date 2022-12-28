import type { ScaledSize } from "react-native";
import { Dimensions } from "react-native";
import { isWeb } from "./utils";

export const ElementsText = {
  AUTOPLAY: "AutoPlay",
};

export const window: ScaledSize = isWeb
  ? {
      ...Dimensions.get("window"),
      width: 375,
    }
  : Dimensions.get("window");
export const ICON_SOCIAL = [
  { img: "../assets/img/iconFace.png" },
  { img: "../assets/img/iconGoogle.png" },
  { img: "../assets/img/iconTwiter.png" },
];
