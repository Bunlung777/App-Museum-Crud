import * as React from "react";
import { StyleSheet, View, Text , Pressable,Modal,ScrollView} from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import LocationDetailsSection from "../components/LocationDetailsSection";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const DetailMuseum2 = ({ isVisible, onClose,detail }) => {
  const navigation = useNavigation();
  return (
    <Modal
    visible={isVisible}
    animationType="slide"
    transparent={true}
    onRequestClose={onClose}
  >
    <ScrollView style={styles.frameParent}>
      <View >
      <View style={styles.frameWrapper}>
        <View style={styles.frameWrapper}>
          <Text style={[styles.text, styles.textTypo]}>รายละเอียดสถานที่</Text>
          <Text
            style={styles.text1}
          >
            {detail}
          </Text>
        </View>
      </View>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["#92a3fd", "#9dceff"]}
      >
        <Pressable
          style={styles.pressable}
          onPress={onClose}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon-add1.png")}
          />
          <Text style={[styles.text2, styles.textTypo]}>ปิด</Text>
          <Image
            style={[styles.iconAdd1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon-add1.png")}
          />
        </Pressable>
      </LinearGradient>
    </View>
    </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  detailLayout: {
    height: 812,
    overflow: "hidden",
  },
  text: {
    marginTop: -11,
    width: "52%",
    left: "24%",
    fontSize: FontSize.headerH7Header18_size,
    lineHeight: 22,
    fontFamily: FontFamily.headerH7Header18,
    color: Color.blackColor,
    textAlign: "center",
    fontWeight: "700",
    top: "50%",
    position: "absolute",
  },
  mobileHeader: {
    backgroundColor: Color.basicWhite90,
    top: 0,
  },
  frameWrapper: {
    marginTop: 28,
  },
  iconHome: {
    display: "none",
  },
  home1: {
    fontWeight: "600",
    fontFamily: FontFamily.buttonLSemi,
    marginTop: 8,
    height: 11,
    display: "flex",
    lineHeight: 14,
    fontSize: FontSize.overlineXSmallBold10_size,
    width: 63,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  home: {
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
    alignItems: "center",
    display: "none",
    flex: 1,
  },
  detailMuseum2: {
    borderRadius: Border.br_21xl,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    width: "100%",
    overflow: "hidden",
    flex: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: Color.basicWhite100Main,
    elevation: 40,
    shadowRadius: 40,
  },  textTypo: {
    fontFamily: FontFamily.buttonLSemi,
    fontWeight: "600",
  },
  iconLayout: {
    display: "none",
    height: 24,
    width: 24,
  },
  text: {
    fontSize: FontSize.h6Semi_size,
    lineHeight: 28,
    textAlign: "center",
    width: 248,
  },
  text1: {
    fontSize: FontSize.buttonMRegular_size,
    letterSpacing: 0.1,
    lineHeight: 24,
    fontFamily: FontFamily.buttonMRegular,
    color: Color.neutrals9001,
    width: 276,
    marginTop: 12,
    textAlign: "left",
  },
  frameWrapper: {
    alignItems: "center",
  },
  text2: {
    fontSize: FontSize.buttonLSemi_size,
    lineHeight: 20,
    color: Color.basicWhite100Main,
    marginLeft: 8,
    textAlign: "left",
  },
  iconAdd1: {
    marginLeft: 8,
  },
  pressable: {
    alignSelf: "stretch",
    height: "100%",
    flexDirection: "row",
    justifyContent: "center",
    padding: Padding.p_base,
    backgroundColor: "transparent",
    alignItems: "center",
    borderRadius: Border.br_21xl,
  },
  button: {
    height: 52,
    marginTop: 10,
  },
  frameParent: {
    position: "absolute",
    marginTop: -226,
    marginLeft: -169.5,
    top: "50%",
    left: "50%",
    backgroundColor: Color.basicWhite100Main,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    overflow: "hidden",
    padding: Padding.p_13xl,
    borderRadius: Border.br_21xl,
  },
});

export default DetailMuseum2;
