import { 
    StyleSheet, 
    TextInput ,
    View,
    KeyboardAvoidingView,
    Text,
} from 'react-native'
import React,{useState,useEffect} from 'react'
import { authentication } from '../firebase'
import { 
    signInWithEmailAndPassword, 
    signOut,
    getAuth,
    createUserWithEmailAndPassword } from "firebase/auth";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const auth = getAuth();

const LoginScreen = () => {

    const register = () => {

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      }

    const [isSignedIn, setIsSignedIn] = useState(false);
    // text input state
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigation = useNavigation();
    useEffect(()=>{
        const unsubscribe = authentication.onAuthStateChanged(user =>{
            if(user){
                navigation.replace("Home")
            }
        })
        return unsubscribe
    },[])

    const SignInUser = () =>{
        signInWithEmailAndPassword(authentication,email,password)
        .then((re)=>{
            setIsSignedIn(true);
        })
        .catch((err)=>{
            console.log(re);
        })
    }
    const SignOutUser = ()=>{
        signOut(authentication)
        .then((re)=>{
            setIsSignedIn(false);
        })
        .catch((err)=>{
            console.log(re);
        })
    }
  return (
    
    <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding">
        <View style={styles.inputContainer}>
        <View style={styles.header}>
            <Text style={styles.textHeader}>Account Login</Text>
        </View>
            <TextInput
                placeholder="Email" 
                value={email} 
                onChangeText={text=>setEmail(text)}
                style={styles.input}/>
                
            <TextInput 
                placeholder="Password" 
                value={password} 
                onChangeText={text=>setPassword(text)} 
                style={styles.input}
                secureTextEntry={true}/>
        </View>
        
        <View style={styles.buttonContainer}>
            <TouchableOpacity 
                onPress={register}          
                style={styles.button}
                >
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={SignInUser}
                style={[styles.button,styles.buttonOutline]}>
                <Text style={styles.buttonOutlineText}>Login</Text>
                
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}
export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    header:{
        alignItems: 'center',
        marginBottom:10,
        fontSize:20,
        color:'red',
    },
    inputContainer:{
        width:'80%',
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        marginTop:5,
    },
    buttonContainer:{
        width:'60%',
        justifyContent:'center',
        alignItems: 'center',
        marginTop:40,

    },
    button:{
        backgroundColor:'#0782f9',
        width:'100%',
        padding:15,
        borderRadius:10,
        alignItems: 'center',

    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#0782f9',
        borderWidth:2,
    },
    buttonText:{
        color:'white',
        fontWidth:'700',
        fontSize:16,
    },
    buttonOutlineText:{
        color:'#0782f9',
        fontWidth:'700',
        fontSize:16,
    },
    icon:{
        fontSize:'17%',
        marginTop:10,
    },
    textHeader:{
        fontSize:20,
        fontWeight:'100',
        letterSpacing:1,

    },
})
