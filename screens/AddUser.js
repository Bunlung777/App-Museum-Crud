import { View, Text,TextInput,Button,StyleSheet,Pressable,Image,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState,useRef,useEffect} from 'react'
import { addDoc, collection, getDoc,doc,updateDoc,getDocs } from 'firebase/firestore';
import { db,firebase,storage,Array } from '../Database/firebase'
import { useNavigation } from "@react-navigation/native";
import Navbar from './Navbar';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { getStorage,ref, uploadBytes,listAll,getDownloadURL } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import CheckBox from 'react-native-check-box'
const AddUser = () => {
  const data = [
    { label: 'พิพิธภัณฑ์ศิลปะ', value: 'พิพิธภัณฑ์ศิลปะ' },
    { label: 'พิพิธภัณฑ์วิทยาศาสตร์', value: 'พิพิธภัณฑ์วิทยาศาสตร์' },
    { label: 'พิพิธภัณฑ์โบราณคดี', value: 'พิพิธภัณฑ์โบราณคดี' },
    { label: 'พิพิธภัณฑ์ประวัติศาสตร์', value: 'พิพิธภัณฑ์ประวัติศาสตร์' },
  ];


    const navigation = useNavigation();
    const [Name, setName] = useState('');
    const [Address, setAddress] = useState('');
    const [Detail, setDetail] = useState('');
    const [Date, setDate] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [Lat, setLat] = useState('');
    const [Long, setLong] = useState('');
    const [Type, setType] = useState('');
    const [userId, setUserId] = useState('');
    const [value, setValue] = useState(null);
    const [checkboxData, setCheckboxData] = useState([]); 
    async function create() {
      try {
        const imgUrl = await uploadImg(); 
        const Miniproject = collection(db, 'Miniproject');
        const checkedLabels = checkboxData
          .filter((checkbox) => checkbox.isChecked)
          .map((checkbox) => checkbox.label);
        await addDoc(Miniproject, {
          Name: Name,
          Address: Address,
          Detail: Detail,
          ImageUrl: imgUrl,
          Lat: Lat,
          Long: Long,
          Date: checkedLabels,
          Type:value,
        });
        // Reset state values
        setName('');
        setAddress('');
        setDetail('');
        setImageUrl('');
        setLat('');
        setLong('');
        setType('');
        setDate('');
        setCheckboxData([]); // รีเซ็ต checkboxData เป็นอาร์เรย์ว่าง
        alert('Document created successfully!');
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }
    
      const navigateAndCreate = () => {
        create(); // เรียกฟังก์ชัน create() ก่อน
        navigation.navigate('AllUser2'); // จากนั้นนำทางไปยังหน้า AllUser2
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
      useEffect(() => {
        setCheckboxData([
          {
            label:'วันจันทร์',
          },
          {
            label:'วันอังคาร',
          },
          {
            label:'วันพุทธ',
          },
          {
            label:'วันพฤหัส',
          },
          {
            label:'วันศุกร์',
          },
          {
            label:'วันเสาร์',
          },
          {
            label:'วันอาทิตย์',
          },
        ]);
      }, []);
      const handleCheckboxChange = (index, isChecked) => {
        const newData = [...checkboxData];
        newData[index].isChecked = isChecked;
        setCheckboxData(newData);
      };
  return (
    <View style={{backgroundColor:"#fff",height:"100%"}}>
       <ScrollView>
    <View style={{top:50,alignItems:"center"}}>
        <Text style={{fontSize:25,fontFamily:'Kanit Medium'}}>เพิ่มผู้ใช้งาน</Text>
    </View>
    <Pressable 
        style={{alignSelf:"flex-start",marginLeft:30,top:23}}
        onPress={()=>navigation.navigate('AllMuseum')}>
        <FontAwesomeIcon icon={faChevronLeft} size={21}/>
      </Pressable>
    <View style={{ height: 1, backgroundColor: 'black',top:60 }} />
    <View style={{top:100,marginLeft:100,height:1200}}>
    <Text style={{top:5}}>ชื่อพิพิธภัณฑ์ :</Text>
    <TextInput
    placeholder='Name'
    style={styles.InputColor}
    onChangeText={setName}
    value={Name}
    />
    <Text style={{top:5}}>รูปภาพ :</Text>
    <TouchableOpacity
      style={[styles.button,{backgroundColor:'#92a3fd'},{top:-25},{left:50}]}
      onPress={pickImage}
    >
      <Text style={styles.buttonText}>Upload</Text>
    </TouchableOpacity>
    {imageUrl && <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200,borderRadius:20,marginBottom:10 }} />}
    
    <Text style={{top:5}}>รายละเอียด :</Text>
    <TextInput
    placeholder='Detail'
    style={styles.InputColor}
    onChangeText={setDetail}
    value={Detail}
    />
    <Text style={{top:5}}>ประเภท :</Text>
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
            style={{ flex: 1,top:-16,left:100 }}
            onClick={() => handleCheckboxChange(index, !item.isChecked)}
            isChecked={item.isChecked}
          />
          <Text style={{left:130,top:-28}}>{item.label}</Text>
        </View>
      ))}
    <Text style={{top:5}}>ที่อยู่และติดต่อ :</Text>
    <TextInput
    placeholder='ที่อยู่และติดต่อ'
    style={[styles.InputColor]}
    onChangeText={setAddress}
    value={Address}
    />
    <Text style={{top:5}}>ละติจูด :</Text>
    <TextInput
    placeholder='Lat'
    style={[styles.InputColor]}
    onChangeText={setLat}
    value={Lat}
    />
    <Text style={{top:5}}>ลองจิจูด :</Text>
    <TextInput
    placeholder='Long'
    style={styles.InputColor}
    onChangeText={setLong}
    value={Long}
    />

    <TouchableOpacity style={styles.button} onPress={()=> {create(); 
    uploadImg();
    }}>
      <Text style={{color:'white',fontFamily:'Kanit Light'}}>บันทึก</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>
<Navbar/>
    </View>

  )
}
const styles = StyleSheet.create({
  buttonText: {
    fontFamily: 'inherit',
    fontWeight: '500',
    fontSize: 15,
    color: 'white',
    letterSpacing: 0.05,
  },
  dropdown: {
    left:90,
    margin: 16,
    top:-42,
    height: 40,
    width:150,
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
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
InputColor: {
marginLeft:100,
bottom:23,
borderRadius:10,
width:150,
borderColor:"#171717",
height:40,
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
export default AddUser