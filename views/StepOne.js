export default function StepOne({navigation}) {
    return(
        <>
        <Text>This is the first Step</Text> 
        <Button title="Next Step" onPress={()=> {
          navigation.navigate ("StepTwo");
          } }
          />
      </>  
    );
}