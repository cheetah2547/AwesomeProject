import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {    
    const [count , setcount] = useState(0);
   
    const heartcount = () => {
        setcount(count + 1);
    };
        
    return (
        <View style={{flexDirection : "row" , padding : 20 ,justifyContent : 'space-around'}}>
            <TouchableOpacity onPress={heartcount}>
            <FontAwesome name="heart" size={30} color="orange" />
            </TouchableOpacity>
            <Text style={{ fontSize : 20 }}>{count}</Text>
        </View>
    );
}
