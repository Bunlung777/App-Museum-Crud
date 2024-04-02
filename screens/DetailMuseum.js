import React,{useState} from "react";
import { StyleSheet, View, Text, Pressable,ScrollView,Linking,Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import LocationDetailsContainer from "../components/LocationDetailsContainer";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";
import { db } from "../Database/firebase";
import DetailMuseum2 from './DetailMuseum2';
import Navbar from "./Navbar";
import MapView,{Marker} from "react-native-maps";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const DetailMuseum = ({route}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImg, setModalImg] = useState(false);
  const detailInfo = route.params.detail;
  const openModal = (Modal) => {
    if(Modal == 'ModalDetail'){
    setModalVisible(true);
    }
    else if(Modal == 'ModalImg'){
      setModalImg(true);
    }
  };


  const closeModal = () => {
    setModalVisible(false);
  };
  const handleMapPress = (latitude,longitude) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    Linking.openURL(url);
  };
  
  return (
    <View>
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.detailMuseum}>
      <View style={[styles.detailMuseumChild, styles.childBorder]} />
      <View style={[styles.mobileHeader, styles.menuBarPosition]}>
        <Pressable
          style={styles.appBar}
          onPress={() => navigation.navigate(route.params.Page)}
        >
          <Image
            style={[styles.backArrowIosIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/back-arrow-ios.png")}
          />
          </Pressable>
          <Text style={[styles.text,{paddingTop:10}]}>{route.params.name}</Text>
          <Image
            style={[styles.iconMenu, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/iconmenu.png")}
          />
        </View>

        <View style={[styles.mobileHeaderChild, styles.childBorder]} />
      <Pressable
        style={styles.bannerParent}
      >
        <Pressable onPress={()=>{
            openModal('ModalImg')
          }}>
        <Image
          style={styles.bannerIcon}
          contentFit="cover"
          source={{uri:route.params.img}}
        />
        </Pressable>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalImg}
        onRequestClose={() => {
          setModalImg(!modalImg);
        }}
      >
        <View style={styles.modalContainer}>
          <Image
            style={[styles.modalImage]}
            contentFit="contain"
            source={{ uri: route.params.img }}
          />
          <Pressable
            style={styles.closeButton}
            onPress={() => setModalImg(!modalImg)}
          >
    <FontAwesomeIcon icon={faXmark} size={30} style={[{color:"#92a3fd"},{top:15}]}/>
          </Pressable>
        </View>
      </Modal>
        <View style={styles.frameParent}>
      <View style={styles.wrapper}>
        <Text style={[styles.text,{paddingTop:5},{textAlign:"left"}]}>รายละเอียดสถานที่</Text>
      </View>
      <View style={[styles.frameWrapper]}>
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/icon-calendar1.png")}
          />
    <Text style={[styles.text1, styles.textTypo2]}>
      วันทำการ : {route.params.Date.map((day) => (
        <Text>{day}{day !== route.params.Date.length - 1 ? ',' : ''}</Text>
      ))}
    </Text>

        </View>
      </View>
      <View style={styles.frameContainer}>
        <View style={styles.parent}>
          <Text style={[styles.text3, styles.textTypo2]}>รายละเอียด</Text>
          <Text style={[styles.text4, styles.textTypo1]}>:</Text>

          <Pressable style={{width:250,height:200}} onPress={()=>{
            openModal('ModalDetail')
          }}>
          <Text style={styles.textTypo}>
            <Text
              style={styles.text6}
            >{detailInfo}</Text>
          </Text>
          </Pressable>

        </View>
      </View>
      <View style={styles.frameContainer}>
        <View style={styles.parent}>
          <Text style={[styles.text7, styles.textTypo2]}>ที่อยู่และติดต่อ</Text>
          <Text style={styles.textTypo1}>:</Text>
          <Text style={[styles.text9, styles.textTypo]}>
            {route.params.Address}
          </Text>
        </View>
      </View>
    </View>
        <Pressable style={[styles.image58Wrapper, styles.timeLightLayout]} onPress={() => handleMapPress(route.params.Lat, route.params.Long)}>
          {/* <Image
            style={styles.image58Icon}
            contentFit="cover"
            source={{uri:'https://images-storage.thaiware.site/tips/2020_11/images/1433_20111714250002_67.png'}}
          /> */}
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: route.params.Lat,
          longitude:  route.params.Long,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
         <Marker
          coordinate={{
            latitude: route.params.Lat,
            longitude: route.params.Long,
          }}
          title="ตำแหน่งที่ตั้ง"
          description=""
        />
        </MapView>
        </Pressable>
        <View style={styles.frameWrapper}>
          <View />
        </View>
      </Pressable>
      <DetailMuseum2 isVisible={modalVisible} onClose={closeModal} detail={detailInfo} />
    </View>
    </ScrollView>
    <Navbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',  
  },
  modalImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
    borderRadius:15
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  childBorder: {
    height: 1,
    borderTopWidth: 0.5,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    display: "none",
  },
  menuBarPosition: {
    width: 375,
    left: "50%",
    marginLeft: -187.5,
    position: "absolute",
    marginTop:20,
  },
  notchIconLayout: {
    height: 30,
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  timeLightLayout: {
    borderRadius: Border.br_xl,
    overflow: "hidden",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  addNewFlexBox: {
    justifyContent: "center",
    height: 52,
  },
  homeFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  doctorsFlexBox: {
    color: Color.neutrals400,
    marginTop: 8,
    height: 11,
    display: "flex",
    lineHeight: 14,
    fontSize: FontSize.overlineXSmallBold10_size,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  iconHome1Position: {
    top: 748,
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  detailMuseumChild: {
    top: 96,
    width: 376,
    display: "none",
    left: 0,
    position: "absolute",
  },
  notchIcon: {
    right: 0,
    maxWidth: "100%",
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
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
    left: 21,
    width: 54,
    height: 21,
    position: "absolute",
  },
  backArrowIosIcon: {
    left: 16,
    top: "50%",
    marginTop: -12,
    width: 24,
    position: "absolute",
  },
  shareAndroidIcon: {
    right: 56,
    top: "50%",
    marginTop: -12,
    width: 24,
    position: "absolute",
    display: "none",
  },
  iconMenu: {
    left: 331,
    top: "50%",
    marginTop: -12,
    width: 24,
    position: "absolute",
  },
  appBar: {
    height: 52,
    alignSelf: "stretch",
    width:25,
  },
  mobileHeaderChild: {
    alignSelf: "stretch",
    display: "none",
  },
  mobileHeader: {
    top: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
  },
  bannerIcon: {
    height: 140,
    width: 355,
    borderRadius:10,
  },
  image58Icon: {
    width: 809,
    height: 376,
    top: 0,
    left: 0,
    position: "absolute",
  },
  image58Wrapper: {
    shadowColor: "rgba(29, 22, 23, 0.07)",
    height: 150,
    marginTop: 28,
    width: 335,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: Color.basicWhite100Main,
    elevation: 40,
    shadowRadius: 40,
    borderRadius: Border.br_xl,
  },
  frameWrapper: {
    marginTop: 28,
  },
  bannerParent: {
    top: 112,
    left: 20,
    height: 624,
    width: 335,
    position: "absolute",
    marginLeft:15
  },
  vuesaxlinearnotificationIcon: {
    top: 741,
    left: 298,
    position: "absolute",
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
  },
  appointment: {
    fontFamily: FontFamily.poppinsBold,
    color: Color.neutrals400,
    fontWeight: "700",
    alignSelf: "stretch",
  },
  users: {
    alignItems: "center",
  },
  frameIcon: {
    overflow: "hidden",
  },
  doctors: {
    fontFamily: FontFamily.poppinsBold,
    color: Color.neutrals400,
    fontWeight: "700",
    width: 63,
  },
  article: {
    fontFamily: FontFamily.buttonMRegular,
    width: 63,
  },
  search1: {
    alignItems: "center",
    display: "none",
  },
  iconScreenshotScan: {
    width: 32,
    height: 32,
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
    flexDirection: "row",
    alignSelf: "stretch",
  },
  menuBar: {
    bottom: -14,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowRadius: 15,
    elevation: 15,
    height: 90,
    paddingBottom: Padding.p_15xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: Color.basicWhite100Main,
    left: "50%",
    marginLeft: -187.5,
  },
  iconHome1: {
    left: 175,
  },
  icon1: {
    overflow: "hidden",
  },
  buildingBank: {
    left: 50,
  },
  notification11: {
    left: 302,
    top: 745,
    width: 29,
  },
  detailMuseum: {
    shadowColor: "rgba(0, 0, 0, 0.03)",
    height: 1000,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    shadowOpacity: 1,
    elevation: 40,
    shadowRadius: 40,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    backgroundColor: Color.basicWhite100Main,
  },textTypo2: {
    lineHeight: 22,
    fontSize: FontSize.overlineSmallSemi_size,
    color: Color.neutrals700,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  parentFlexBox: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  iconLayout: {
    height: 18,
    width: 18,
  },
  textTypo1: {
    marginLeft: 10,
    color: Color.neutrals700,
    lineHeight: 22,
    fontSize: FontSize.overlineSmallSemi_size,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  textTypo: {
    flex: 1,
    marginLeft: 10,
    lineHeight: 22,
    fontSize: FontSize.overlineSmallSemi_size,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  text: {
    flex: 1, // Take up available space horizontally
    fontSize: FontSize.buttonLSemi_size,
    lineHeight: 13,
    color: Color.neutrals9001,
    textAlign: "center",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  
  wrapper: {
    width: 335,
    height: 16,
  },
  text1: {
    marginLeft: 8,
    color: Color.neutrals700,
  },
  frameWrapper: {
    marginTop: 16,
  },
  clockIcon: {
    overflow: "hidden",
  },
  clockParent: {
    marginTop: 16,
  },
  text3: {
    width: 70,
    color: Color.neutrals700,
  },
  text4: {
    width: 2,
  },
  text6: {
    color: Color.neutrals700,
  },
  parent: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  frameContainer: {
    alignSelf: "stretch",
    marginTop: 16,
  },
  text7: {
    width: 71,
    color: Color.neutrals700,
  },
  text9: {
    color: Color.neutrals700,
  },
  frameParent: {
    marginTop: 28,
  },
});

export default DetailMuseum;