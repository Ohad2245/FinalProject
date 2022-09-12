import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { authentication } from "../firebase";
import { useNavigation } from "@react-navigation/core";
import SelectList from 'react-native-dropdown-select-list';
import ListAlarms from "../components/ListAlarms";
import TimePicker from "../components/TimePicker";

const HomeScreen = () => {

  const [selected, setSelected] = React.useState("");
  
  const data = [
    {key:'1',value:'Estradiol and Norethisterone '},
    {key:'2',value:'Atomoxetine'},
    {key:'3',value:'Indapamide'},
    {key:'4',value:'Nitazoxanide'},
    {key:'5',value:'Erdosteine'},
    {key:'6',value:'Tenofovir Disoproxil Fumarate '},
    {key:'7',value:'Ivermectin'},
    {key:'8',value:'Albendazole'},
    {key:'9',value:'Ocrelizumab'},
    {key:'10',value:'Omega 3 acid ethyl esters'},
    {key:'11',value:'Clomifene Citrate'},
    {key:'12',value:'Candesartan Cilexetil'},
    {key:'13',value:'Ipratropium Bromide'},
    {key:'14',value:'Ipratropium Bromide'},
  ];

  const navigation = useNavigation();
  const handleSignOut = () => {
    authentication
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
      
  
    <View style={styles.container}>
      <Text style={styles.textEmail}>
        Email: {authentication.currentUser?.email}
      </Text>
      <View>
      <ListAlarms/>
      </View>
    <SelectList setSelected={setSelected} data={data} onSelect={() => alert(selected)} />
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
      <View>
      <TimePicker/>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782f9",
    width: "25%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWidth: "700",
    fontSize: 16,
  },
  text: {
    alignItems: "center",
    fontSize: 30,
    color: "red",
    padding: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "red",
    marginBottom: 20,
  },
  textEmail: {
    alignItems: "center",
    fontSize: 15,
    color: "red",
    padding: 1,
  },
});
