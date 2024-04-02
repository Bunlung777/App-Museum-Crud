import React, { useState, useEffect } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable,ScrollView,TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SectionForm from "../components/SectionForm";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";
import { addDoc, collection, getDocs,doc,getDoc } from 'firebase/firestore';
import { db,firebase } from '../Database/firebase';
import 'firebase/compat/storage';
import Navbar from "./Navbar";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Home = () => {
  const navigation = useNavigation();
  const [fetchedData, setFetchedData] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageSelect, setImageSelect] = useState(null);
  const [selectData, setSelectData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const querySnapshot = await getDocs(collection(db, "Miniproject"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setFetchedData(data);
    } catch (error) {
      console.log("Error getting documents: ", error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ระบุ collection และ ID ของเอกสารที่ต้องการดึง
        const docRef = doc(db, 'Miniproject', '7pRL60mH0sCzRSAtHrMn');
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          // ตั้งค่า state fetchedData ด้วยข้อมูลที่ดึงมาจาก Firebase
          setSelectData(docSnap.data());
          // console.log("ข้อมูลเอกสาร:", docSnap.data());
        } else {
          console.log("ไม่พบข้อมูลสำหรับ ID ที่ระบุ");
        }
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูลเอกสาร:", error);
      }
    };
  
    fetchData();
  }, []);
  
  return (
    <View>
    <ScrollView>
    <View style={[styles.home]}>
      <View style={{marginLeft:10}}>
      <View style={[styles.parent, styles.parentLayout]}>
        <Text style={[styles.text, styles.textTypo]}>พิพิธภัณฑ์แนะนำ</Text>
        <Pressable
        onPress={() => navigation.navigate("AllMuseum")}
      >
        <Text style={[styles.text1, styles.textLayout,{top:10}]}>ดูทั้งหมด</Text>
        </Pressable>
      </View>
      <Pressable
        style={[styles.group, styles.groupPosition1]}
        onPress={() => navigation.navigate("AllMuseum")}
      >
        <Text style={[styles.text, styles.textTypo]}>{`อำเภอทั้งหมด`}</Text>
        <Text style={[styles.text1, styles.textLayout]}>ดูทั้งหมด</Text>
      </Pressable>
      <Pressable
        style={[styles.container, styles.groupPosition]}
        onPress={() => navigation.navigate("AllMuseum")}
      >
        <Text style={[styles.text, styles.textTypo]}>พิพิธภัณฑ์ยอดนิยม</Text>
        <Text style={[styles.text1, styles.textLayout]}>ดูทั้งหมด</Text>
      </Pressable>
      <View style={styles.homeChild} />
      <Pressable
        style={[styles.banner, styles.groupPosition1]}
        onPress={() => navigation.navigate("DetailMuseum")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={{uri:'https://firebasestorage.googleapis.com/v0/b/museumapp-42cda.appspot.com/o/images%2F1176d380-4119-11eb-9b6d-3fdf37c2e48e_original.jpg?alt=media&token=c65a4484-3ddd-4307-89c4-d7a9e2e55a8f'}}
        />
      </Pressable>
      <View style={styles.textField}>
        <View style={[styles.iconlylightsearchParent, styles.home1FlexBox]}>
          <Image
            style={[styles.iconlylightsearchLayout]}
            contentFit="cover"
            source={require("../assets/iconlylightsearch.png")}
          />
        <TextInput
          style={[styles.search, styles.text6Typo, { height: 55, width: 100,left:10,top:-17}]} 
          placeholder="Search" 
          onChangeText={(text) => {
            console.log("Typed text:", text);
          }}
        />
        </View>
        <View style={styles.textFieldChild} />
        <Image
          style={[styles.iconlylightfilter, styles.iconlylightsearchLayout]}
          contentFit="cover"
          source={require("../assets/iconlylightfilter.png")}
        />
      </View>
      <Pressable
        style={[styles.tabBarWrapper, styles.barPosition]}
        onPress={() => navigation.navigate("AllMuseum")}
      >
        <View style={styles.tabBar}>
          <View style={styles.tabBarInner}>
            <View style={[styles.frameParent, styles.framePosition]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/frame-117127514.png")}
              />
              <Text style={[ styles.textAll]}>พิพิธภัณฑ์ศิลปะ</Text>
            </View>
          </View>
          <View style={styles.tabBarChild}>
            <View style={[styles.frameGroup, styles.framePosition]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/frame-117127514.png")}
              />
              <Text style={[styles.textAll]}>พิพิธภัณฑ์โบราณคดี</Text>
            </View>
          </View>
          <View style={styles.tabBarChild}>
            <View style={[{marginLeft:-50}, styles.framePosition]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/frame-117127514.png")}
              />
              <Text style={styles.textAll}>พิพิธภัณฑ์ท้องถิ่น</Text>
            </View>
          </View>
        </View>
      </Pressable>
      <View style={[styles.groupParent, styles.groupPosition]}>
      {fetchedData.map((item,index) => (
        <View style={styles.doccardLayout1}>
          <View style={[styles.doccard, styles.doccardShadowBox]}>
            <View style={[styles.doccardChild, styles.doccardLayout1]} />
            <Pressable onPress={() =>  navigation.navigate('DetailMuseum', 
            { id: item.id , 
            name: item.Name, 
            detail:item.Detail,
            img:item.ImageUrl,
            Page:Home,
            Lat:item.Lat,
            Long:item.Long,
            Date:item.Date,
            Address:item.Address
            })}>
            <Image
              style={[styles.maskGroupIcon, styles.groupPosition]}
              contentFit="cover"
              source={{uri: item.ImageUrl}}
            />
            </Pressable>
            <View
              style={[
                styles.workoutTextWrapper,
                styles.component1Icon2Position,
              ]}
            >
              <View style={styles.workoutText}>
                <Text style={[styles.drWilliemSmith, styles.textTypo]}>
                {item.Name}
                </Text>
                <Text style={[styles.dentistRoyal, styles.text6Typo]}>
                  จังหวัดเลย | อำเภอเมืองเลย
                </Text>
                <View style={styles.starParent}>
                  <Image
                    style={[styles.frameChild, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/star-12.png")}
                  />
                  <Image
                    style={[styles.frameItem, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/star-12.png")}
                  />
                  <Image
                    style={[styles.frameInner, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/star-2.png")}
                  />
                  <Image
                    style={[styles.frameInner, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/star-12.png")}
                  />
                  <Image
                    style={[styles.frameChild1, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/star-12.png")}
                  />
                  <Image
                    style={[styles.frameChild2, styles.frameChildLayout]}
                    contentFit="cover"
                    source={require("../assets/star-2.png")}
                  />
                  <Text style={[styles.text6, styles.text6Typo]}>4.8</Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.component1Icon}
              contentFit="cover"
              source={require("../assets/component-1.png")}
            />
          </View>
        </View>))}
      </View>
      </View>
    </View>
    </ScrollView>
    <Navbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    height: 24,
    width: 24,
  },
  parentLayout: {
    width: wp(80),
    height: hp(16),
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.buttonLSemi,
    fontWeight: "100",
    left: 0,    
    position: "absolute",
  }
  ,
  textAll: {
    marginTop: 10,
    textAlign: "left",
    fontFamily: FontFamily.buttonLSemi,
    fontWeight: "100",
    fontSize: 12,
  },
  textLayout: {
    lineHeight: 16,
    position: "absolute",
  },
  groupPosition1: {
    left: 23,
    width: 335,
    position: "absolute",
  },
  groupPosition: {
    left: 20,
    position: "absolute",
  },
  home1FlexBox: {
    flex: 1,
    marginRight:15,
    alignItems: "center",
  },
  text6Typo: {
    fontFamily: FontFamily.buttonMRegular,
    fontSize: FontSize.overlineSmallSemi_size,
    textAlign: "left",
  },
  iconlylightsearchLayout: {
    height: 20,
    width: 20,
  },
  statusPosition: {
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    width: 400,
    marginLeft: -200,
    left: "50%",
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  timeLightLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
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
    width: 335,
  },
  component1Icon2Position: {
    top: 27,
    position: "absolute",
  },
  frameChildLayout: {
    width: 18,
    borderRadius: Border.br_12xs,
    height: 18,
    position: "absolute",
  },
  doccardLayout: {
    marginTop: 12,
    height: 114,
    width: 335,
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  addNewLayout: {
    height: 52,
    justifyContent: "center",
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
  },
  iconHome1Position: {
    top: 761,
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
    borderRadius:20,
  },
  vuesaxlinearnotificationIcon: {
    top: 754,
    left: 298,
    position: "absolute",
  },
  text: {
    fontSize: FontSize.buttonLSemi_size,
    lineHeight: 20,
    color: Color.neutrals9001,
    top: 1,
  },
  text1: {
    marginTop: -8,
    textAlign: "right",
    fontSize: FontSize.overlineSmallSemi_size,
    lineHeight: 16,
    right: 0,
    top: "50%",
    fontFamily: FontFamily.buttonLSemi,
    fontWeight: "600",
  },
  parent: {
    top: 133,
    left: 22,
    height: 16,
    position: "absolute",
  },
  group: {
    top: 334,
    height: 20,
  },
  container: {
    top: 490,
    height: 25,
    width: 335,
  },
  homeChild: {
    top: 96,
    borderColor: Color.colorGainsboro_100,
    borderTopWidth: 0.5,
    width: 376,
    height: 1,
    display: "none",
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  banner: {
    top: 164,
    height: 140,
  },
  iconEdit: {
    display: "none",
  },
  search: {
    color: Color.neutrals300,
    marginLeft: 10,
    lineHeight: 50,
  },
  iconlylightsearchParent: {
    marginLeft: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  textFieldChild: {
    borderColor: Color.colorGainsboro_200,
    borderRightWidth: 0.5,
    width: 1,
    height: 21,
    marginLeft: 16,
    borderStyle: "solid",
  },
  iconlylightfilter: {
    marginLeft: 16,
  },
  textField: {
    top: 65,
    borderRadius: Border.br_mini,
    backgroundColor: Color.neutrals50,
    height: hp(5),
    padding: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 20,
    width: 335,
    position: "absolute",
  },
  notchIcon: {
    maxWidth: "100%",
    height: 30,
    top: 0,
    right: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  networkSignalLight: {
    height: 14,
    width: 20,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    width: 54,
    left: 21,
    height: 21,
  },
  status: {
    height: 44,
    top: 0,
    overflow: "hidden",
  },
  doccardChild: {
    marginTop: -57,
    marginLeft: -167.5,
    opacity: 0.2,
    borderRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
    left: "50%",
    top: "50%",
    height: 114,
    backgroundColor: Color.basicWhite100Main,
  },
  maskGroupIcon: {
    borderRadius:100,
    top: 20,
    width: 74,
    height: 74,
  },
  drWilliemSmith: {
    fontSize: FontSize.buttonMRegular_size,
    letterSpacing: 0.1,
    color: Color.blackColor,
    top: 0,
    lineHeight: 18,
    width:200,
  },
  dentistRoyal: {
    top: 22,
    color: Color.gray1,
    lineHeight: 16,
    position: "absolute",
    left: 0,
  },
  frameChild: {
    width: 60,
    height: 60,
  },
  frameItem: {
    left: 39,
    top: 2,
    borderRadius: Border.br_12xs,
  },
  frameInner: {
    top: 2,
    borderRadius: Border.br_12xs,
    left: 21,
  },
  frameChild1: {
    left: 57,
    top: 2,
    borderRadius: Border.br_12xs,
  },
  frameChild2: {
    left: 75,
    top: 2,
    borderRadius: Border.br_12xs,
  },
  text6: {
    marginLeft: 25,
    left: "50%",
    lineHeight: 16,
    position: "absolute",
    color: Color.neutrals9001,
    top: 1,
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
    left: 106,
  },
  component1Icon: {
    height: 33,
    width: 33,
    left: 282,
    top: 26,
    position: "absolute",
  },
  doccard: {
    height: 114,
    width: 335,
    top: 0,
    left: 0,
    position: "absolute",
  },
  frameChild3: {
    top: 0,
    left: 0,
  },
  frameChild4: {
    left: 36,
    top: 0,
  },
  frameChild5: {
    left: 18,
    top: 0,
  },
  frameChild7: {
    left: 54,
    top: 0,
  },
  frameChild8: {
    left: 72,
    top: 0,
  },
  component1Icon1: {
    height: 32,
    width: 33,
    left: 282,
    top: 26,
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
  component1Icon2: {
    left: 283,
    top: 27,
    position: "absolute",
  },
  doccard2: {
    height: 114,
    width: 335,
    top: 0,
    left: 0,
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
    top: 530,
    height: 573,
  },
  home2: {
    marginTop: 8,
    height: 11,
    display: "flex",
    textAlign: "center",
    lineHeight: 14,
    fontSize: FontSize.overlineXSmallBold10_size,
    width: 63,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: FontFamily.buttonLSemi,
    fontWeight: "600",
  },
  home1: {
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: 0,
    alignItems: "center",
    display: "none",
  },
  appointment: {
    alignSelf: "stretch",
  },
  users: {
    alignItems: "center",
  },
  frameIcon: {
    overflow: "hidden",
  },
  doctors: {
    width: 63,
    color: Color.neutrals400,
  },
  search2: {
    alignItems: "center",
    display: "none",
  },
  iconScreenshotScanWrapper: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.secondary500Main,
    padding: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  addNew: {
    alignItems: "center",
    display: "none",
    flex: 1,
  },
  homeParent: {
    alignItems: "flex-end",
    alignSelf: "stretch",
    flexDirection: "row",
    height: 52,
    justifyContent: "center",
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
  },
  iconHome1: {
    left: 175,
  },
  vuesaxlinearnotification: {
    left: 300,
    top: 762,
    position: "absolute",
  },
  icon2: {
    overflow: "hidden",
  },
  buildingBank: {
    left: 50,
  },
  home: {
    shadowColor: "rgba(0, 0, 0, 0.03)",
    height: 1300,
    overflow: "hidden",
    width: wp(100),
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
  tabBar: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.basicWhite100Main,
  },
  tabBarInner: {
    flex: 1,
    alignSelf: "stretch",
  },
  frameParent: {
    marginLeft: -44,
  },
  framePosition: {
    height: 72,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  frameChildLayout: {
    width: 18,
    borderRadius: Border.br_12xs,
    height: 18,
    top: 0,
    position: "absolute",
  },
  tabBarChild: {
    marginLeft: 10,
    flex: 1,
    alignSelf: "stretch",
  },
  frameGroup: {
    marginLeft: -56.5,
  },
  framePosition: {
    height: 72,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  tabBarWrapper: {
    top: 373,
    height: 10,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_3xs,
    marginLeft: -187.5,
    left: "50%",
    width: 375,
    alignItems: "center",
  },
  barPosition: {
    left: "50%",
    position: "absolute",
  },
});

export default Home;