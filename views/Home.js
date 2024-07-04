import {Text, Button, View} from "react-native";

export default function Home ({navigation}) {
    return ( 
    <View style={{flex: 1, justifyContent:"center"}}>
    <Text>Home Screen </Text>  
    <Button
      title="Go to StepOne"
     onPress={() => navigation.navigate("StepONe")}
    />
     </View>
     );
}