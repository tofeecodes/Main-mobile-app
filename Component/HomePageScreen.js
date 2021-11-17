import React, { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Card, Button, Icon, SearchBar, Image } from 'react-native-elements'
import { CustomView, CustomText } from './CustomComponent/Custom'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import { color } from 'react-native-elements/dist/helpers'
import { CartStore } from '../Context/CartContext'

const HomePageScreen = ({ navigation }) => {
    const [product, setproduct] = useState([])
    const [cartstore, setCartstore] = useContext(CartStore)

    const getproducts = () => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
         //console.log(response)
           setproduct(response.data)

        })
        .catch(err => {
            console.log(err)
        })
    }

    const GotoProductPage= (product) => {
        navigation.navigate('Product', {
            itemid: product.id
        })
    }


    useEffect(() => {
        let mounted = true

        if (mounted) getproducts()

        return () => mounted = false
    }, [])

    return (
        // <View style={styles.container}>
        // <FlatList data={product}
        //  renderItem={({item}) =>
        //  <Card>
        //      <Card.Title>{item.title}</Card.Title>
        //      <Card.Image source={{ uri: item.image}}/>
        //      <Text style={styles.clothing}>{item.category}</Text>
        //      <Text style={styles.price}>${item.price}</Text>
        //      <Button
        //      onPress={() => { GotoProductPage(item)}}
        //      style={{ marginTop:20}} title="view"/>

        //  </Card>
        // }
        // />
        // </View>
        <SafeAreaView>
        <CustomView className=" p-4">


           <CustomView className="flex flex-row w-full items-center justify-between">
               <CustomView>
                   <CustomText className="text-black font-bold text-xl">Ria's Convenient Store</CustomText>
               </CustomView>

               <CustomView className="flex flex-row items-center">
                <CustomView>
                <Icon raised={false} size={30} style={{ color: 'blue'}} onPress={() => { navigation.navigate('settings')}} name="settings"  color="black" type="material-icons"/>
                </CustomView>

                <CustomView>
                <Icon  raised={false} size={30} onPress={() => { navigation.navigate('cart')}} name="shopping-cart" color={cartstore.length > 0 ? "blue": "black"} type="feathers" />
               </CustomView>

                  </CustomView>
           </CustomView>

           <CustomView>
               <SearchBar
               placeholder="search here.."
               platform="ios"

                />
            </CustomView>

            <FlatList data={product}
             renderItem={({item}) =>
        //  <Card>
        //      <Card.Title>{item.title}</Card.Title>
        //      <Card.Image source={{ uri: item.image}}/>
        //      <Text style={styles.clothing}>{item.category}</Text>
        //      <Text style={styles.price}>${item.price}</Text>
        //      <Button
        //      onPress={() => { GotoProductPage(item)}}
        //      style={{ marginTop:20}} title="view"/>
        //       </Card>
        <CustomView className="flex flex-col mb-5 mt-5 rounded-lg bg-white p-5">
             <CustomView className="w-full rounded-lg">
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 200, height: 200, borderRadius: 15 }}
                />
            </CustomView>
            <CustomView className="mt-3">
                <CustomText className="text-sm font-bold text-left">{item.title}</CustomText>
            </CustomView>

            <CustomView className="mt-3">
                <CustomText className="text-sm font-bold text-left text-gray-400">Et voluptate sit dolor excepteur aute est elit amet consectetur elit non dolore aliquip.</CustomText>
            </CustomView>

            <CustomView className="mt-3 flex flex-row items-center justify-between">
                 <CustomView>
                     <CustomText className="text-3xl font-bold">
                         ${item.price}
                     </CustomText>
                 </CustomView>

                 <CustomView className="bg-blue-600 rounded-lg p-2 ml-2">
                     <TouchableOpacity onPress={() => {GotoProductPage(item)}}>
                     <CustomText className="text-sm  text-white font-bold">
                        View
                     </CustomText>
                     </TouchableOpacity>
                 </CustomView>
            </CustomView>
        </CustomView>
         }
     />


        </CustomView>
        </SafeAreaView>
    )
}

export default HomePageScreen


const styles = StyleSheet.create({
    container: {

    },

    clothing: {
        fontWeight: 'bold',
        fontFamily: 'sans',
        fontSize: 20
    },
    price: {
        fontWeight: 'bold',
        fontSize: 30
    }
})
