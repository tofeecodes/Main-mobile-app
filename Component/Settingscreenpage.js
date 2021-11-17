import axios from 'axios'
import React,{ useState, useContext, useEffect } from 'react'
import { StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { ListItem, Icon, Image, Avatar } from 'react-native-elements'
import { CustomView, CustomText } from './CustomComponent/Custom'

const Settingscreenpage = () => {
  const [user, setuser] = useState([])

  const fetchUser = () => {
    axios.get('https://fakestoreapi.com/users/1').then(response => {
      const { data } = response

       setuser(data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
      let mounted = true

      if(mounted) fetchUser()
      
      return () => mounted = false
  }, [])

  // const { picture } = user

  const CustomList = ({request, response}) => {
    return (
      <CustomView className="flex flex-col justify-start items-start w-full p-3 border-b border-gray-300"> 
      <CustomText className="text-sm font-bold">{request}</CustomText>
      <CustomText className="text-2xl text-gray-500 font-medium">{response}</CustomText>
    </CustomView>
    )
  }

    return (
      //   <View style={styles.container} >
      //    <ListItem>
      //   <ListItem.Content>
      //     <ListItem.Title>Logout</ListItem.Title>
      //     <ListItem.Subtitle>log out of account</ListItem.Subtitle>
      //   </ListItem.Content>
      // </ListItem>
      //   </View>
      <SafeAreaView>
           <CustomView className="flex flex-col w-full h-auto items-center justify-center">
             <CustomView className="mt-8">
               <Image 
                source={{ uri: `https://ui-avatars.com/api/?name=${user.username}`}}
                style={{ width: 150, height: 150, borderRadius: 100,}}
               />
            </CustomView>
            {/* <CustomText>{JSON.stringify(user)}</CustomText> */}
            <CustomList request="username" response={user.username} />
            <CustomList request="Email" response={user.email} />



          <CustomView className="mt-3 w-full">
            <CustomText className="text-sm text-gray-400 pl-2 pt-4">User settings</CustomText>
             <TouchableOpacity>
               <CustomList request="logout user" response="logout" />
             </TouchableOpacity>
           </CustomView>


       </CustomView>
      </SafeAreaView>
    )
}

export default Settingscreenpage

const styles = StyleSheet.create({

    container: {
        marginTop: 20
    }
})