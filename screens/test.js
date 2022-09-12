// import { 
//     StyleSheet, 
//     TextInput ,
//     View,
//     KeyboardAvoidingView,
    
// } from 'react-native'
// import React,{useState} from 'react'
// import { authentication } from '../firebase'
// import { signInWithEmailAndPassword, signOut,getAuth,createUserWithEmailAndPassword } from "firebase/auth";
// import { TouchableOpacity } from 'react-native';

// const auth = getAuth();


// const LoginScreen = () => {

//     const register = () => {

//         createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           // Signed in 
//           const user = userCredential.user;
//           // ...
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           // ..
//         });
//       }


//     const [isSignedIn, setIsSignedIn] = useState(false);
//     // text input state
//     const [email,setEmail] = useState('');
//     const [password,setPassword] = useState('');

//     const SignInUser = () =>{
//         signInWithEmailAndPassword(authentication,email,password)
//         .then((re)=>{
//             setIsSignedIn(true);
//         })
//         .catch((err)=>{
//             console.log(re);
//         })

//     }
//     const SignOutUser = ()=>{
//         signOut(authentication)
//         .then((re)=>{
//             setIsSignedIn(false);
//         })
//         .catch((err)=>{
//             console.log(re);
//         })
//     }
//   return (
//     <KeyboardAvoidingView 
//         style={styles.container}
//         behavior="padding">
//         <View style={styles.inputContainer}>
//             <TextInput 
//                 placeholder="email" 
//                 value={email} 
//                 onChangeText={text=>setEmail(text)}
//                 style={styles.input}
//                 />
//             <TextInput 
//                 placeholder="password" 
//                 value={password} 
//                 onChangeText={text=>setPassword(text)} 
//                 style={styles.input}
//                 secureTextEntry={true}/>
//         </View>
        
//         <View style={styles.buttonContainer}>
//             <TouchableOpacity 
//                 style={styles.buttonRegister}
//                 onPress={register}>Register</TouchableOpacity>
            
//             <TouchableOpacity 
//                 style={[styles.buttonLogin,styles.buttonOutline]} 
//                 onPress={SignInUser}>Login</TouchableOpacity>
//         </View>
//     </KeyboardAvoidingView>
//   )
// }
// export default LoginScreen

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:'center',
//         alignItems: 'center',
//     }
// })
