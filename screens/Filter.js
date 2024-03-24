import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import FilterFormContainer from "../components/FilterFormContainer";
import { useNavigation } from "@react-navigation/native";
import { Border, Padding, Color, FontFamily, FontSize } from "../GlobalStyles";

const Filter = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.filter, styles.filterFlexBox]}>
      <View style={styles.filterChild} />
      <FilterFormContainer />
      <View style={[styles.filterInner, styles.frameGroupPosition]}>
        <View style={styles.frameParent}>
          <View style={styles.specialtyWrapper}>
            <Text style={styles.specialty}>Specialty</Text>
          </View>
          <View style={[styles.tabBar, styles.tabSpaceBlock]}>
            <View style={styles.listTab}>
              <Text style={[styles.text, styles.textTypo]}>All</Text>
              <View style={[styles.badge, styles.badgeLayout]}>
                <Text style={styles.text1}>2</Text>
              </View>
            </View>
            <LinearGradient
              style={[styles.listTab1, styles.listSpaceBlock1]}
              locations={[0, 1]}
              colors={["#92a3fd", "#9dceff"]}
            >
              <Text style={styles.text2}>เมืองเลย</Text>
              <View style={[styles.badge, styles.badgeLayout]}>
                <Text style={styles.text1}>2</Text>
              </View>
            </LinearGradient>
            <View style={styles.listSpaceBlock1}>
              <Text style={[styles.text4, styles.textTypo]}>เชียงคาน</Text>
              <View style={[styles.badge, styles.badgeLayout]}>
                <Text style={styles.text1}>2</Text>
              </View>
            </View>
            <LinearGradient
              style={[styles.listTab1, styles.listSpaceBlock1]}
              locations={[0, 1]}
              colors={["#92a3fd", "#9dceff"]}
            >
              <Text style={styles.text2}>วังสะพุง</Text>
              <View style={[styles.badge, styles.badgeLayout]}>
                <Text style={styles.text1}>2</Text>
              </View>
            </LinearGradient>
            <View style={styles.listSpaceBlock1}>
              <Text style={[styles.text4, styles.textTypo]}>นาด้วง</Text>
              <View style={[styles.badge, styles.badgeLayout]}>
                <Text style={styles.text1}>2</Text>
              </View>
            </View>
            <View style={styles.listSpaceBlock1}>
              <Text style={[styles.text4, styles.textTypo]}>เอราวัณ</Text>
              <View style={[styles.badge, styles.badgeLayout]}>
                <Text style={styles.text1}>2</Text>
              </View>
            </View>
            <LinearGradient
              style={[styles.listTab1, styles.listSpaceBlock1]}
              locations={[0, 1]}
              colors={["#92a3fd", "#9dceff"]}
            >
              <Text style={styles.text2}>ท่าลี่</Text>
              <View style={[styles.badge, styles.badgeLayout]}>
                <Text style={styles.text1}>2</Text>
              </View>
            </LinearGradient>
            <View style={styles.listSpaceBlock1}>
              <Text style={[styles.text4, styles.textTypo]}>หนองหิน</Text>
              <View style={[styles.badge, styles.badgeLayout]}>
                <Text style={styles.text1}>2</Text>
              </View>
            </View>
            <View style={styles.listSpaceBlock1}>
              <Text style={[styles.text4, styles.textTypo]}>ภูเรือ</Text>
              <View style={[styles.badge, styles.badgeLayout]}>
                <Text style={styles.text1}>2</Text>
              </View>
            </View>
            <View style={styles.listSpaceBlock1}>
              <Text style={[styles.text4, styles.textTypo]}>ภูหลวง</Text>
              <View style={[styles.badge, styles.badgeLayout]}>
                <Text style={styles.text1}>2</Text>
              </View>
            </View>
            <View style={styles.listSpaceBlock1}>
              <Text style={[styles.text4, styles.textTypo]}>ภูกระดึง</Text>
              <View style={[styles.badge, styles.badgeLayout]}>
                <Text style={styles.text1}>2</Text>
              </View>
            </View>
            <View style={styles.listSpaceBlock1}>
              <Text style={[styles.text4, styles.textTypo]}>ด่านซ้าย</Text>
              <View style={[styles.badge, styles.badgeLayout]}>
                <Text style={styles.text1}>2</Text>
              </View>
            </View>
            <View style={styles.listSpaceBlock1}>
              <Text style={[styles.text4, styles.textTypo]}>ปากชม</Text>
              <View style={[styles.badge, styles.badgeLayout]}>
                <Text style={styles.text1}>2</Text>
              </View>
            </View>
            <View style={styles.listSpaceBlock1}>
              <Text style={[styles.text4, styles.textTypo]}>ผาขาว</Text>
              <View style={[styles.badge, styles.badgeLayout]}>
                <Text style={styles.text1}>2</Text>
              </View>
            </View>
            <LinearGradient
              style={[styles.listTab1, styles.listSpaceBlock1]}
              locations={[0, 1]}
              colors={["#92a3fd", "#9dceff"]}
            >
              <Text style={styles.text2}>นาแห้ว</Text>
              <View style={[styles.badge, styles.badgeLayout]}>
                <Text style={styles.text1}>2</Text>
              </View>
            </LinearGradient>
          </View>
        </View>
      </View>
      <View style={[styles.frameGroup, styles.frameGroupPosition]}>
        <View style={styles.specialtyWrapper}>
          <Text style={styles.specialty}>{`Rating `}</Text>
        </View>
        <View style={styles.tabSpaceBlock}>
          <View style={styles.listTab15}>
            <View style={styles.starParent}>
              <Image
                style={[styles.frameChild, styles.badgeLayout]}
                contentFit="cover"
                source={require("../assets/star-1.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>All</Text>
            </View>
            <View style={[styles.badge, styles.badgeLayout]}>
              <Text style={styles.text1}>2</Text>
            </View>
          </View>
          <LinearGradient
            style={[styles.listTab16, styles.listSpaceBlock]}
            locations={[0, 1]}
            colors={["#92a3fd", "#9dceff"]}
          >
            <View style={styles.starParent}>
              <Image
                style={[styles.frameChild, styles.badgeLayout]}
                contentFit="cover"
                source={require("../assets/star-11.png")}
              />
              <Text style={[styles.text32, styles.textTypo]}>5</Text>
            </View>
            <View style={[styles.badge, styles.badgeLayout]}>
              <Text style={styles.text1}>2</Text>
            </View>
          </LinearGradient>
          <View style={styles.listSpaceBlock}>
            <View style={styles.starParent}>
              <Image
                style={[styles.frameChild, styles.badgeLayout]}
                contentFit="cover"
                source={require("../assets/star-1.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>4</Text>
            </View>
            <View style={[styles.badge, styles.badgeLayout]}>
              <Text style={styles.text1}>2</Text>
            </View>
          </View>
          <View style={styles.listSpaceBlock}>
            <View style={styles.starParent}>
              <Image
                style={[styles.frameChild, styles.badgeLayout]}
                contentFit="cover"
                source={require("../assets/star-1.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>3</Text>
            </View>
            <View style={[styles.badge, styles.badgeLayout]}>
              <Text style={styles.text1}>2</Text>
            </View>
          </View>
          <View style={styles.listSpaceBlock}>
            <View style={styles.starParent}>
              <Image
                style={[styles.frameChild, styles.badgeLayout]}
                contentFit="cover"
                source={require("../assets/star-1.png")}
              />
              <Text style={[styles.text4, styles.textTypo]}>2</Text>
            </View>
            <View style={[styles.badge, styles.badgeLayout]}>
              <Text style={styles.text1}>2</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.menuBar}>
        <View style={[styles.buttonParent, styles.badgeFlexBox]}>
          <Pressable
            style={[styles.button, styles.filterFlexBox]}
            onPress={() => navigation.navigate("AllMuseum")}
          >
            <Image
              style={[styles.iconAdd, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon-add.png")}
            />
            <Text style={[styles.text40, styles.textPosition]}>รีเซ็ต</Text>
            <Image
              style={[styles.iconAdd1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon-add.png")}
            />
          </Pressable>
          <LinearGradient
            style={styles.button1}
            locations={[0, 1]}
            colors={["#92a3fd", "#9dceff"]}
          >
            <Pressable
              style={[styles.pressable, styles.filterFlexBox]}
              onPress={() => navigation.navigate("AllMuseum")}
            >
              <Image
                style={[styles.iconAdd, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon-add1.png")}
              />
              <Text style={[styles.text41, styles.textPosition]}>ตกลง</Text>
              <Image
                style={[styles.iconAdd1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/icon-add1.png")}
              />
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterFlexBox: {
    flex: 1,
    borderRadius: Border.br_21xl,
  },
  frameGroupPosition: {
    left: 0,
    position: "absolute",
    alignItems: "center",
  },
  tabSpaceBlock: {
    marginTop: 16,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xl,
    width: 375,
    flexDirection: "row",
    backgroundColor: Color.basicWhite100Main,
  },
  textTypo: {
    fontFamily: FontFamily.buttonMRegular,
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.1,
    fontSize: FontSize.buttonMRegular_size,
  },
  badgeLayout: {
    height: 18,
    width: 18,
  },
  listSpaceBlock1: {
    marginLeft: 11,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    height: 36,
    borderRadius: Border.br_xl,
    flexDirection: "row",
    alignItems: "center",
  },
  listSpaceBlock: {
    marginLeft: 10,
    width: 76,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    height: 36,
    borderRadius: Border.br_xl,
    flexDirection: "row",
    alignItems: "center",
  },
  badgeFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 14,
    display: "none",
    position: "absolute",
  },
  textPosition: {
    lineHeight: 20,
    top: "50%",
    marginTop: -10,
    left: "50%",
    fontFamily: FontFamily.buttonLSemi,
    fontWeight: "600",
    fontSize: FontSize.buttonLSemi_size,
    position: "absolute",
  },
  filterChild: {
    top: 96,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 0.5,
    width: 376,
    height: 1,
    display: "none",
    left: 0,
    position: "absolute",
  },
  specialty: {
    top: 1,
    lineHeight: 13,
    color: Color.neutrals9001,
    textAlign: "left",
    fontFamily: FontFamily.buttonLSemi,
    fontWeight: "600",
    fontSize: FontSize.buttonLSemi_size,
    left: 0,
    position: "absolute",
  },
  specialtyWrapper: {
    width: 335,
    height: 16,
  },
  text: {
    width: 38,
    textAlign: "center",
  },
  text1: {
    fontSize: FontSize.overlineXSmallBold10_size,
    lineHeight: 14,
    fontWeight: "700",
    fontFamily: FontFamily.headerH7Header18,
    color: Color.basicWhite100Main,
    textAlign: "left",
  },
  badge: {
    backgroundColor: Color.statusNegative500Main,
    marginLeft: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_xl,
    height: 18,
    width: 18,
    display: "none",
  },
  listTab: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    height: 36,
    justifyContent: "center",
    borderRadius: Border.br_xl,
    flexDirection: "row",
    alignItems: "center",
  },
  text2: {
    color: Color.basicWhite100Main,
    textAlign: "center",
    lineHeight: 18,
    letterSpacing: 0.1,
    fontSize: FontSize.buttonMRegular_size,
    fontFamily: FontFamily.buttonLSemi,
    fontWeight: "600",
  },
  listTab1: {
    backgroundColor: "transparent",
  },
  text4: {
    textAlign: "center",
  },
  tabBar: {
    flexWrap: "wrap",
  },
  frameParent: {
    alignItems: "center",
  },
  filterInner: {
    top: 120,
    alignItems: "center",
  },
  frameChild: {
    borderRadius: Border.br_12xs,
  },
  starParent: {
    flexDirection: "row",
  },
  listTab15: {
    width: 76,
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: Padding.p_base,
    justifyContent: "center",
    height: 36,
    borderRadius: Border.br_xl,
    flexDirection: "row",
    alignItems: "center",
  },
  text32: {
    color: Color.basicWhite100Main,
    textAlign: "center",
  },
  listTab16: {
    backgroundColor: "transparent",
  },
  frameGroup: {
    top: 452,
    alignItems: "center",
  },
  iconAdd: {
    left: 129,
  },
  text40: {
    marginLeft: -17.25,
    textAlign: "center",
  },
  iconAdd1: {
    left: 206,
  },
  button: {
    height: 52,
    flex: 1,
    borderRadius: Border.br_21xl,
  },
  text41: {
    marginLeft: -20.25,
    color: Color.basicWhite100Main,
    textAlign: "left",
  },
  pressable: {
    height: "100%",
    backgroundColor: "transparent",
    flex: 1,
    borderRadius: Border.br_21xl,
  },
  button1: {
    marginLeft: 12,
    height: 52,
  },
  buttonParent: {
    width: 343,
    flexDirection: "row",
  },
  menuBar: {
    marginLeft: -187.5,
    bottom: 0,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowRadius: 15,
    elevation: 15,
    paddingTop: 12,
    paddingBottom: Padding.p_15xl,
    left: "50%",
    justifyContent: "center",
    width: 375,
    alignItems: "center",
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: Color.basicWhite100Main,
  },
  filter: {
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 40,
    elevation: 40,
    width: "100%",
    height: 812,
    overflow: "hidden",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: Color.basicWhite100Main,
    flex: 1,
    borderRadius: Border.br_21xl,
  },
});

export default Filter;
