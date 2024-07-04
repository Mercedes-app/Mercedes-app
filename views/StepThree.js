export default function StepOne({navigation}) {
    return(
        <>
        <Text>This is the thirt Step</Text> 
        <Button title="Next Step" onPress={()=> {
          navigation.navigate ("StepThree");
          } }
          />
      </>  
    );
}