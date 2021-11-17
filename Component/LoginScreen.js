import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Button, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomView, CustomText, CustomTextInput } from './CustomComponent/Custom'


export default function LoginScreen({ navigation }) {


    const GotohomePage = () =>  navigation.navigate('Home')


    return (
      <View style ={{justifyContent:"center",flex :1}}>
      <ImageBackground style={styles.backImg} source={require("../images/back.jpg")} resizeMode = "cover">
        <SafeAreaView>
        {/* <View style={styles.login}>
            <View>
                <Text style={styles.header}>Bridal shop</Text>
            </View>
           <View style={styles.input}>
            <TextInput placeholder="username"/>
           </View>

           <View style={styles.input}>
            <TextInput placeholder="password"/>
           </View>

           <View style={styles.buttonContainer}>
           <TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD">
               <View style={styles.buttonhighlight}>
              <Button title="login" color="white" onPress={GotohomePage} />
               </View>
           </TouchableHighlight>
           </View>

        </View> */}

        <CustomView className="flex w-full h-full items-center justify-center " >
            <CustomView className="p-3">
                <CustomText className="font-bold text-white text-2xl tracking-tight">Ria's Convenient Store</CustomText>
            </CustomView>

         <CustomView classname=" items-center justify-center ">
              <CustomView className="mb-5">
                  <CustomTextInput
                  className="rounded-xl border w-80  p-4  border-blue-300"
                  placeholder="enter username"

                   />
              </CustomView>

              <CustomView className="mb-5">
                  <CustomTextInput
                  className="rounded-xl border w-80 p-4 border-blue-300"
                  placeholder="enter password"
                   />
              </CustomView>
            </CustomView>

            <TouchableHighlight activeOpacity={1} underlayColor={'#0000FF'} onPress={GotohomePage}>
              <CustomView className="p-4 bg-blue-500 w-80 rounded-xl">
                  <CustomText className="text-white text-center font-bold">Login</CustomText>
              </CustomView>
            </TouchableHighlight>

        </CustomView>

        </SafeAreaView>
          </ImageBackground>
          </View>
    )
}

const styles = StyleSheet.create({
  backImg : {
    width : "100%",
    height : "100%"
  }
})
// const styles = StyleSheet.create({
//     login: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100%',
//         height: '100%'
//     },

//     header: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         padding: 20
//     },

//     input: {
//        padding: 20,
//        borderColor: '#0062AB',
//        borderRadius: 15,
//        borderWidth: 1,
//        width: '90%',
//        marginBottom: 20
//     },

//     buttonContainer: {
//         width: '90%',

//     },

//     buttonhighlight: {
//         backgroundColor: "#0062AB",
//         width: '100%',
//         padding: 20,
//         borderRadius: 15,
//         textAlign: 'center'
//     },

//     text: {
//     textAlign: 'center',
//     color: 'white',
//     fontWeight: 'bold'
//     }
// })
