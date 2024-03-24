import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../Database/firebase';

const Notification1 = () => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const querySnapshot = await getDocs(collection(db, 'MuseumApp'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setFetchedData(data);
      console.log('Data fetched successfully');
    } catch (error) {
      console.log('Error getting documents:', error);
    }
  }
  
  return (
    <ScrollView>
      {fetchedData.map(item => (
        <View key={item.id} style={{ marginTop: 10, paddingHorizontal: 20 }}>
          <Text>{item.Name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Notification1;
