import React, { createContext, useState, useEffect } from 'react';

export const MyContext = createContext();

export default function CotextProvider (props) {

  const [ products, setProducts ] = useState([])
  const [ displayCategory, setDisplayCategory ] = useState('products')
  //console.log('category is ' + displayCategory)
  const [ itemsInCart, setItemsInCart ] = useState([])

 

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
      value={{products, setDisplayCategory, displayCategory, itemsInCart, setItemsInCart}}
    >
      {props.children}
    </MyContext.Provider>
  )
}