import React from 'react'
import {
    View,
    Text,
    Button
  } from 'react-native';
  


const DetailsScreen = ({navigation}) => {
    return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Details Screen</Text>
  
      <Button 
      title="Go to détails sreen ... again"
      onPress={() => navigation.push("Details") }
      />
  
      <Button 
      title="Go to Home"
      onPress={() => navigation.navigate("Home") }
      />
  
      <Button 
      title="Go back"
      onPress={() => navigation.goBack() }
      />
  
      {/* <Button 
      title="Go to first screen"
      onPress={() => navigation.popToTop("Home") }
      /> */}
    </View>
          
    );
  };
 
  export default DetailsScreen;