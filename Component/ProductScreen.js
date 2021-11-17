import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, ActivityIndicator, SafeAreaView, ScrollView, Button, TouchableOpacity } from 'react-native'
import { Image, Chip, Text, Divider } from 'react-native-elements'
import axios from 'axios'
import CustomView from './CustomComponent/CustomView'
import CustomText from './CustomComponent/CustomText'
import { CartStore } from '../Context/CartContext'

export default function ProductScreen({ route, navigation }) {
    const { itemid } = route.params
    const [singleItem, setSingleItem] = useState({})
    const [cartstore, setCartstore] = useContext(CartStore)

    const getsingleproduct = () => {
        axios.get(`https://fakestoreapi.com/products/${itemid}`)
        .then(response => {
         //console.log(response)
           setSingleItem(response.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    }

    const AddtoCart = () => {
        let cartholder = singleItem
        setCartstore([...cartstore, cartholder])
    }

    useEffect(() => {
      let mounted = true

      if (mounted) getsingleproduct()

      return () => mounted === false
    }, [itemid])


    return (
        <SafeAreaView>
             <CustomView classNam="absolute w-full h-full bg-blue-100">
                    <Image 
                      source={{ uri: singleItem.image }}
                      style={{ width: 200, height: 400 }}
                    />
                </CustomView>
            <ScrollView style={styles.scroller}>
              <CustomView className="w-full h-full bg-white rounded-lg pb-96">
                   <CustomView className="p-3">
                      <CustomText className="text-2xl font-bold">{singleItem.title}</CustomText>
                      <CustomText className="text-1xl font-medium text-gray-600 mb-3">{singleItem.category}</CustomText>
                      <CustomText className="text-sm font-regular text-gray-400">{singleItem.description}</CustomText>
                    </CustomView>

                    <CustomView className="p-3 flex flex-row items-center justify-between">
                        <CustomView>
                            <CustomText className="font-bold text-xl">${singleItem.price}</CustomText>
                        </CustomView>
                        <CustomView className="bg-blue-600 rounded-lg p-3 ml-2">
                     <TouchableOpacity
                     onPress={AddtoCart}
                     >
                     <CustomText className="text-sm text-white font-bold">
                        Add to Cart
                     </CustomText>
                     </TouchableOpacity>
                 </CustomView>
                    </CustomView>
                    

              </CustomView>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
     containerProduct: {
         width: "100%",
         height: '80%'
     },
     chipstyle: {
        width: "90%",
        padding: 10,
        marginLeft: 10
     },
     scroller: {
         width: "100%",
         height: "100%",
         overflow: 'visible',
     },
      buttonview: {
        backgroundColor: "#0062AB",
        width: '80%',
        padding: 10,
        borderRadius: 15,
        textAlign: 'center',
        marginLeft: 10,
        marginTop: 20
      }
})