import React,{ useContext, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import { CustomView, CustomText } from './CustomComponent/Custom'
import { Image, Icon } from 'react-native-elements'
import { CartStore } from '../Context/CartContext'

const CartPageScreen = () => {
     const [cartstore, setCartstore] = useContext(CartStore)
     
     const deleteFromCart = (id) => {
        let newcartstore = cartstore.filter(cart => cart.id !== id)
        setCartstore(newcartstore)
     }


    return (
        <SafeAreaView>
            <CustomText className="text-4xl font-bold p-5">Checkout</CustomText>
            <CustomView className="flex flex-col justify-center items-center">
            {cartstore && cartstore.length > 0 && cartstore.map(cartProduct => { return (

                    <CustomView className="flex flex-row p-4 justify-between rounded-2xl items-center mt-3 mb-3 border border-gray-300 w-100 bg-white">
                    <CustomView className="mr-2">
                    <Image 
                    source={{ uri: cartProduct.image}}
                    style={{ width: 50, height: 50, borderRadius: 30}}
                    />
                    </CustomView>
                    <CustomView className="flex flex-col">
                    <CustomText className="text-sm font-bold text-wrap max-w-2xl">{cartProduct.title}</CustomText>
                    <CustomText className="text-sm font-regular text-gray-400 text-wrap ">{cartProduct.category}</CustomText>
                    </CustomView>

                    <TouchableOpacity>
                <CustomView className="p-2">
                    <Icon
                    raised={true}
                    name="delete" color="black" type="feathers" 
                    onPress={() => { deleteFromCart(cartProduct.id)}}
                    />
                </CustomView>
            </TouchableOpacity>
            </CustomView>
            )})}
    
    {!cartstore.length > 0 && <CustomView><CustomText className="text-2xl font-bold">No cart list</CustomText></CustomView>}

            <TouchableOpacity style={{ marginTop: 20}}>
                <CustomView className="p-3 rounded-2xl w-80 bg-blue-500">
                    <CustomText className="text-white font-bold text-2xl text-center">Checkout</CustomText>
                </CustomView>
            </TouchableOpacity>

            </CustomView>
             </SafeAreaView>
    )
}

export default CartPageScreen

const styles = StyleSheet.create({})
