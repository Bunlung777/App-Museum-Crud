import { View, Text,TextInput,StyleSheet,Button, Pressable,TouchableOpacity,Image,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { updateDoc,doc } from 'firebase/firestore';
import { useNavigation } from "@react-navigation/native";
import { db,firebase,storage } from '../Database/firebase'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Navbar from './Navbar';
import { useFonts } from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import { getStorage,ref, uploadBytes,listAll,getDownloadURL } from 'firebase/storage';
import { Dropdown } from 'react-native-element-dropdown';
import CheckBox from 'react-native-check-box'
import { key } from 'fontawesome';
const EditMuseum = ({route}) => {
  const data = [
    { label: 'พิพิธภัณฑ์ศิลปะ', value: 'พิพิธภัณฑ์ศิลปะ' },
    { label: 'พิพิธภัณฑ์วิทยาศาสตร์', value: 'พิพิธภัณฑ์วิทยาศาสตร์' },
    { label: 'พิพิธภัณฑ์โบราณคดี', value: 'พิพิธภัณฑ์โบราณคดี' },
    { label: 'พิพิธภัณฑ์ประวัติศาสตร์', value: 'พิพิธภัณฑ์ประวัติศาสตร์' },
  ];
    const navigation = useNavigation();
    const [updateName, setUpdateName] = useState(route.params.name);
    const [updateDetail, setDetail] = useState(route.params.detail);
    const [updateLat, setUpdateLat] = useState(route.params.Lats);
    const [updateLong, setUpdateLong] = useState(route.params.Longs);
    const [imageUrl, setImageUrl] = useState(route.params.img);
    const [value, setValue] = useState(route.params.Type);
    const [checkboxData, setCheckboxData] = useState(route.params.Date.map((date, index) => ({
      label: date,
      isChecked: false 
    })));
    async function updateData(documentId, newData) {
        const UpdeteValue = doc(db, 'Miniproject', documentId);
        await updateDoc(UpdeteValue, newData);
        console.log('Document successfully updated!');
      }

    const update = async (e) => {
      const imgUrl = await uploadImg(); 
      const checkedLabels = checkboxData
      .filter((checkbox) => checkbox.isChecked)
      .map((checkbox) => checkbox.label);
            const newData = {
                Name: updateName,
                Detail: updateDetail,
                Lat:updateLat,
                Long:updateLat,
                ImageUrl:imgUrl,
                Date:checkedLabels,
                Type:value
            };
            await updateData(route.params.id, newData);
        } 
        const pickImage = async () => {
          try {
            const result = await ImagePicker.launchImageLibraryAsync({
              allowsEditing: true,
              quality: 1,
            });
            if (!result.canceled) {
              setImageUrl(result.assets[0].uri);
            } else {
              alert('You did not select any image.');
            }
          } catch (error) {
            console.error("Error picking image:", error);
            // Handle error appropriately, e.g., show a message to the user
          }
        };
        const uploadImg = async () => {
          try {
            const response = await fetch(imageUrl); // Fetch the image data
            const blob = await response.blob(); // Convert the response to a blob
            const imageName = imageUrl.split('/').pop(); // Extract image name
            const ImgRef = ref(storage, `images/${imageName}`);
            await uploadBytes(ImgRef, blob); // Upload the blob data
            const downloadURL = await getDownloadURL(ImgRef);
            return downloadURL;
          } catch (error) {
            console.error("Error uploading image:", error);
            throw error;
          }
        };
        const initialCheckboxData = [
          { label: 'วันจันทร์', isChecked: false },
          { label: 'วันอังคาร', isChecked: false },
          { label: 'วันพุทธ', isChecked: false },
          { label: 'วันพฤหัส', isChecked: false },
          { label: 'วันศุกร์', isChecked: false },
          { label: 'วันเสาร์', isChecked: false },
          { label: 'วันอาทิตย์', isChecked: false },
        ];
        
        useEffect(() => {
          const newData = initialCheckboxData.map((item) => {
            const isChecked = route.params.Date.includes(item.label);
            return { ...item, isChecked };
          });
          setCheckboxData(newData);
        }, []);
        
        const handleCheckboxChange = (index, isChecked) => {
          const newData = [...checkboxData];
          newData[index].isChecked = isChecked;
          setCheckboxData(newData);
        };
        
  return (
    <View>
<View style={{backgroundColor:"#fff",height:"100%"}}>
<ScrollView>
    <View style={{top:50,alignItems:"center"}}>
        <Pressable 
        style={{alignSelf:"flex-start",marginLeft:30,top:28}}
        onPress={()=>navigation.navigate('AllMuseum')}>
        <FontAwesomeIcon icon={faChevronLeft} size={21}/>
        </Pressable>
        <Text style={{fontSize:25}}>แก้ไขข้อมูลผู้ใช้งาน</Text>
    </View>
    <View style={{ height: 1, backgroundColor: 'black',top:60 }} />
    <View style={{top:100,marginLeft:100,height:1200}}>
    <Text style={{top:5}}>Name:</Text>
    <TextInput
    placeholder='Name'
    style={styles.InputColor}
    onChangeText={setUpdateName}
    defaultValue={updateName}
    />
    <Text style={{top:5}}>รูปภาพ :</Text>
    <TouchableOpacity
      style={[styles.button,{backgroundColor:'#92a3fd'},{top:-25},{left:50}]}
      onPress={pickImage}
    >
      <Text style={styles.buttonText}>Upload</Text>
    </TouchableOpacity>
    <Image
          style={{width:200,height:150,borderRadius:10,top:-10,marginBottom:30}}
          contentFit="cover"
          source={{uri:imageUrl}}
        />
    <Text style={{top:5}}>Detail:</Text>
    <TextInput
    placeholder='Detail'
    style={styles.InputColor}
    onChangeText={setDetail}
    defaultValue={updateDetail}
    />
  <Text style={{top:5}}>วันทำการ:</Text>
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}

      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="เลือกประเภท"
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
      // renderLeftIcon={() => (
      //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
      // )}
    />
    <Text style={{top:5}}>วันทำการ :</Text>
{checkboxData.map((item, index) => (
  <View key={index}>
    <CheckBox
      style={{ flex: 1, top: -16, left: 100 }}
      onClick={() => handleCheckboxChange(index, !item.isChecked)}
      isChecked={item.isChecked}
    />
    <Text style={{ left: 130, top: -28 }}>{item.label}</Text>
  </View>
))}
    <Text style={{top:5}}>Lat :</Text>
    <TextInput
    placeholder='Lat'
    style={styles.InputColor}
    onChangeText={setUpdateLat}
    defaultValue={updateLat}
    />
    <Text style={{top:5}}>Long :</Text>
    <TextInput
    placeholder='Long'
    style={styles.InputColor}
    onChangeText={setUpdateLong}
    defaultValue={updateLong}
    />
    <TouchableOpacity style={styles.button} onPress={update}>
      <Text style={{color:'white'}}>บันทึก</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
    </View>
    <Navbar/>
    
    </View>
  )
}
const styles = StyleSheet.create({
  dropdown: {
    left:60,
    margin: 16,
    top:-42,
    height: 40,
    width:200,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginBottom:-10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
    InputColor: {
    marginLeft:70,
    bottom:23,
    borderRadius:10,
    width:150,
    borderColor:"#171717",
    height:40,
    shadowColor: '#000000', // Shadow color (for iOS)
    shadowOffset: { width: 0, height: 2 }, // Shadow offset (for iOS)
    shadowOpacity: 0.25, // Shadow opacity (for iOS)
    shadowRadius: 3.84,
    backgroundColor:"#f2f3f5",
    padding:10
    },
    button: {
      marginLeft:50,
      alignItems:"center",
      justifyContent: 'center',
      width:100,
      height:40,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
      borderRadius: 10,
      shadowColor: '#000000', // Shadow color (for iOS)
      shadowOffset: { width: 0, height: 2 }, // Shadow offset (for iOS)
      shadowOpacity: 0.25, // Shadow opacity (for iOS)
      shadowRadius: 3.84, // Shadow radius (for iOS)
      elevation: 5, // Elevation (for Android)
    }
    
    })
export default EditMuseum