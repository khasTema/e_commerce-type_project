import React, { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

export const MyContext = createContext();

export default function CotextProvider (props) {

  const [ displayCategory, setDisplayCategory ] = useState('products')
  const [ products, setProducts ] = useState([])
  const [ itemsInCart, setItemsInCart ] = useState([])
  const [ itemOnProductPage, setItemOnProductPage ] = useState([])
  const notify = () => toast.success('Product Added To Cart');

 

  useEffect(() => {
    let url = 'temp_prod_list.json'
    // JSON file in public folder, 
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(
        displayCategory === 'products' ? 
            data.product_list 
            : 
            data.product_list.filter(product => product.prod_category === displayCategory )
        )) 
  }, [displayCategory])

  return (
    <MyContext.Provider
      value={{
        products, setDisplayCategory, 
        displayCategory, 
        itemsInCart, setItemsInCart, 
        itemOnProductPage, setItemOnProductPage,
        notify
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}