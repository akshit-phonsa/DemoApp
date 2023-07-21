import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
// Firestore Imports Start
// import firestore from '@react-native-firebase/firestore';
// Firestore Imports Stop

// RealTime Imports Start
import database from '@react-native-firebase/database';

// RealTime Imports Stop
export default function App() {
  useEffect(() => {
    getDatabase();
  }, []);

  const [myData, setMyData] = useState(null);

  const getDatabase = async()=>{
    try {
      // FireStore Start
      // const data = await firestore().collection("testing").doc("g2kcQX8PXQj9x3xxVJu3").get();

      // setMyData(data._data);
      // // console.log(data._data);
      // FireStore End

      // Realtime Start
        const data = await database().ref("users/1").once("value");
        console.log(data);
        setMyData(data.val());
      // Realtime End
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <View>
      <Text>Name: {myData ? myData.name : `Loading...`}</Text>
      <Text>Age: {myData ? myData.age : `Loading...`}</Text>
    </View>
  )
}