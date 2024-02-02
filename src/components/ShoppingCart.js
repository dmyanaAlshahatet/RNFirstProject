import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const displayCartItems = () => {
    if (cartItems.length === 0) {
      return <Text>Cart is empty</Text>;
    }

    return cartItems.map((item, index) => (
      <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>{item.name} - ${item.price}</Text>
        <Button title="Remove" onPress={() => removeItemFromCart(index)} />
      </View>
    ));
  };

  return (
    <View>
      <Text>Shopping Cart</Text>
      {displayCartItems()}
      <Text>Total: ${calculateTotalPrice()}</Text>
      <Button title="Add Item to Cart" onPress={() => addItemToCart({ name: 'New Item', price: 10 })} />
    </View>
  );
};

export default ShoppingCart;
