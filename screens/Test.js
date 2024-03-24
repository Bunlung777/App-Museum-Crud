import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Image,StyleSheet,Pressable } from 'react-native';
import { Border, FontSize, FontFamily, Color, Padding } from "../GlobalStyles";
const Test = () => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  return (
<View style={[styles.frameParent, styles.statusLayout]}>
  {!isInputVisible && (
    <View>
      <Text style={[styles.text5]}>พิพิธภัณฑ์ทั้งหมด</Text>
    </View>
  )}

  <View>
    {isInputVisible ? (
      <View style={{ alignItems: 'center' }}>
        <TextInput
          style={[styles.search, styles.text6Typo, { height: 50 }, { width: 250 },{paddingLeft:10}]}
          placeholder="Search"
          onChangeText={handleInputChange}
          value={inputValue}
        />
        <TouchableOpacity onPress={toggleInputVisibility}>
          <Image
            style={[{ top: -35 }, { marginLeft: 219 }]}
            contentFit="cover"
            source={require("../assets/iconlylightsearch4.png")}
          />
        </TouchableOpacity>
      </View>
    ) : (
      <TouchableOpacity onPress={toggleInputVisibility}>
        <Image
          style={[styles.iconlylightsearch]}
          contentFit="cover"
          source={require("../assets/iconlylightsearch4.png")}
        />
      </TouchableOpacity>
    )}
  </View>
</View>
  );
};
const styles = StyleSheet.create({
    groupPosition: {
      left: 20,
      position: "absolute",
    },
    search: {
      borderRadius:10,
      backgroundColor: "#DCDBDB",
      marginLeft: 10,
      lineHeight: 50,
    },
  text6Typo: {
    fontFamily: FontFamily.buttonMRegular,
    fontSize: FontSize.overlineSmallSemi_size,
    textAlign: "left",
  },
    doccardShadowBox: {
      shadowColor: "rgba(29, 22, 23, 0.07)",
      borderRadius: Border.br_xl,
      overflow: "hidden",
      shadowOpacity: 1,
      elevation: 40,
      shadowRadius: 40,
      shadowOffset: {
        width: 0,
        height: 1,
      },
    },
    doccardLayout1: {
      height: 114,
      width: 400,
    },
    dentistRoyalPosition: {
      width:200,
      textAlign: "left",
      left: 0,
      position: "absolute",
    },
    textTypo1: {
      lineHeight: 16,
      fontSize: FontSize.overlineSmallSemi_size,
      fontFamily: FontFamily.buttonMRegular,
    },
    frameChildLayout: {
      width: 18,
      borderRadius: Border.br_12xs,
      top: 2,
      height: 18,
    },
    timeLightPosition: {
      left: 21,
      position: "absolute",
    },
    textClr: {
      color: Color.neutrals9001,
      textAlign: "left",
      position: "absolute",
    },
    doccardLayout: {
      marginTop: 12,
      height: 114,
      width: 335,
    },
    statusLayout: {
      height: 44,
      position: "absolute",
    },
    iconLayout1: {
      height: 24,
      width: 24,
    },
    iconLayout: {
      height: "100%",
      width: "100%",
    },
    listFlexBox: {
      paddingVertical: Padding.p_6xs,
      height: 36,
      width: 98,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
    },
    textTypo: {
      textAlign: "center",
      lineHeight: 18,
      letterSpacing: 0.1,
      fontSize: FontSize.buttonMRegular_size,
    },
    homeFlexBox: {
      flex: 1,
      alignItems: "center",
    },
    doctorsTypo: {
      color: Color.neutrals400,
      marginTop: 8,
      height: 11,
      display: "flex",
      lineHeight: 14,
      fontSize: FontSize.overlineXSmallBold10_size,
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: FontFamily.buttonMRegular,
    },
    iconPosition: {
      top: 757,
      height: 24,
      width: 24,
      position: "absolute",
    },
    doccardChild: {
      marginTop: -57,
      marginLeft: -167.5,
      opacity: 0.2,
      left: "50%",
      top: "50%",
      borderRadius: Border.br_xl,
      position: "absolute",
      overflow: "hidden",
      backgroundColor: Color.basicWhite100Main,
      height: 114,
    },
    maskGroupIcon: {
      top: 20,
      width: 74,
      height: 74,
      borderRadius:100,
    },
    drWilliemSmith: {
      color: Color.blackColor,
      fontFamily: FontFamily.buttonLSemi,
      fontWeight: "600",
      lineHeight: 18,
      letterSpacing: 0.1,
      fontSize: FontSize.buttonMRegular_size,
      textAlign: "left",
      top: 0,
    },
    dentistRoyal: {
      top: 22,
      color: Color.gray1,
      fontFamily: FontFamily.buttonMRegular,
      textAlign: "left",
      left: 0,
      position: "absolute",
    },
    frameChild: {
      left: 3,
      position: "absolute",
    },
    frameItem: {
      left: 39,
      position: "absolute",
    },
    frameInner: {
      width: 18,
      borderRadius: Border.br_12xs,
      top: 2,
      height: 18,
    },
    frameChild1: {
      left: 57,
      position: "absolute",
    },
    frameChild2: {
      left: 75,
      position: "absolute",
    },
    text: {
      marginLeft: 25,
      top: 1,
      fontFamily: FontFamily.buttonMRegular,
      lineHeight: 16,
      fontSize: FontSize.overlineSmallSemi_size,
      left: "50%",
    },
    starParent: {
      top: 42,
      height: 18,
      width: 138,
      left: 0,
      position: "absolute",
    },
    workoutText: {
      height: 60,
      width: 138,
    },
    workoutTextWrapper: {
      top: 27,
      left: 106,
      position: "absolute",
    },
    component1Icon: {
      top: 26,
      left: 282,
      width: 33,
      height: 33,
      position: "absolute",
    },
    doccard: {
      left: 0,
      top: 0,
      height: 114,
      width: 335,
      position: "absolute",
    },
    doccard1: {
      shadowColor: "rgba(29, 22, 23, 0.07)",
      borderRadius: Border.br_xl,
      overflow: "hidden",
      shadowOpacity: 1,
      elevation: 40,
      shadowRadius: 40,
      shadowOffset: {
        width: 0,
        height: 1,
      },
    },
    doccard2: {
      left: 0,
      top: 0,
      height: 114,
      width: 335,
      position: "absolute",
    },
    doccard3: {
      shadowColor: "rgba(29, 22, 23, 0.07)",
      borderRadius: Border.br_xl,
      overflow: "hidden",
      shadowOpacity: 1,
      elevation: 40,
      shadowRadius: 40,
      shadowOffset: {
        width: 0,
        height: 1,
      },
    },
    workoutText4: {
      width: 149,
      height: 60,
    },
    doccard4: {
      shadowColor: "rgba(29, 22, 23, 0.07)",
      borderRadius: Border.br_xl,
      overflow: "hidden",
      shadowOpacity: 1,
      elevation: 40,
      shadowRadius: 40,
      shadowOffset: {
        width: 0,
        height: 1,
      },
    },
    groupParent: {
      top: 172,
      height: 573,
    },
    allMuseumChild: {
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
    frameChild27: {
      marginTop: -5.5,
      left: 50,
      top: "50%",
      position: "absolute",
    },
    text5: {
      marginTop: -5,
      fontSize: FontSize.h6Semi_size,
      lineHeight: 28,
      width: 164,
      fontFamily: FontFamily.buttonLSemi,
      fontWeight: "600",
      top: "50%",
      left: 0,
    },
    icon: {
      marginTop: -12,
      marginLeft: 143.5,
    },
    iconlylightfilter: {
      left: "50%",
      top: "50%",
      position: "absolute",
    },
    iconlylightsearch: {
      marginLeft: 99.5,
      height: 20,
      width: 20,
      left: "50%",
      top: -10,
      position: "absolute",
    },
    frameParent: {
      top: 48,
      width: 335,
      height: 44,
      left: 20,
    },
    text6: {
      color: Color.basicWhite100Main,
      textAlign: "center",
      fontFamily: FontFamily.buttonLSemi,
      fontWeight: "600",
    },
    text7: {
      fontWeight: "700",
      fontFamily: FontFamily.headerH7Header18,
      lineHeight: 14,
      fontSize: FontSize.overlineXSmallBold10_size,
      color: Color.basicWhite100Main,
      textAlign: "left",
    },
    badge: {
      backgroundColor: Color.statusNegative500Main,
      marginLeft: 4,
      justifyContent: "center",
      alignItems: "center",
      display: "none",
      width: 18,
      height: 18,
      borderRadius: Border.br_xl,
    },
    listTab: {
      borderRadius: Border.br_11xl,
      paddingHorizontal: Padding.p_13xl,
      backgroundColor: "transparent",
    },
    text8: {
      fontFamily: FontFamily.buttonMRegular,
    },
    listTab1: {
      paddingHorizontal: Padding.p_base,
      marginLeft: 10,
      borderRadius: Border.br_xl,
    },
    tabBar: {
      top: 116,
      paddingHorizontal: Padding.p_xl,
      paddingVertical: 0,
      flexDirection: "row",
      width: 375,
      left: 0,
      position: "absolute",
      backgroundColor: Color.basicWhite100Main,
    },
    timeLight: {
      top: 12,
      width: 54,
      height: 21,
      borderRadius: Border.br_xl,
      overflow: "hidden",
    },
    status: {
      height: 44,
      position: "absolute",
      left: "50%",
      top: 0,
      overflow: "hidden",
    },
    vuesaxlinearnotificationIcon: {
      top: 750,
      left: 298,
      position: "absolute",
    },
    iconHome1: {
      left: 175,
    },
    vuesaxlinearnotification: {
      left: 300,
      top: 758,
      position: "absolute",
    },
    buildingBankIcon: {
      left: 50,
      overflow: "hidden",
    },
    vectorIcon: {
      top: 759,
      left: 314,
      width: 8,
      height: 9,
      position: "absolute",
    },
    allMuseum: {
      shadowColor: "rgba(0, 0, 0, 0.03)",
      height: 812,
      overflow: "hidden",
      width: "100%",
      elevation: 40,
      shadowRadius: 40,
      flex: 1,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      backgroundColor: Color.basicWhite100Main,
    },
    menuBar: {
      bottom: -27,
      shadowColor: "rgba(0, 0, 0, 0.8)",
      elevation: 20,
      height: 90,
      shadowOpacity: 2,
      shadowOffset: {
        width: 100,
        height: 10,
      },
      backgroundColor: Color.basicWhite100Main,
      width: 400,
      marginLeft: -200,
      left: "50%",
      position: "absolute",
    },homeParent: {
        alignItems: "flex-end",
        alignSelf: "stretch",
        flexDirection: "row",
        height: 52,
        justifyContent: "center",
      },
      users: {
        alignItems: "center",
      },
      home1FlexBox: {
        flex: 1,
        marginRight:15,
        alignItems: "center",
      },
      doctors: {
        width: 63,
        color: Color.neutrals400,
      },
      doctorsFlexBox: {
        color: Color.neutrals400,
        marginTop: 8,
        height: 11,
        display: "flex",
        textAlign: "center",
        lineHeight: 14,
        fontSize: FontSize.overlineXSmallBold10_size,
        fontFamily: FontFamily.buttonMRegular,
        justifyContent: "center",
        alignItems: "center",
      },  iconLayout2: {
        height: 24,
        width: 24,
      }
  });
export default Test;
