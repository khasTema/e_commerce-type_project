import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export default function CotextProvider (props) {
  //this is all temp states, please clear it in About and ThankYou components
  //Yeah it is working!!!!!
// eslint-disable-next-line
  const [anything, setAnything] = useState('New State from Context')
  const [ anotherThing, setAnotherThing ] = useState(25)

  return (
    <MyContext.Provider
      value={{anything, setAnything, anotherThing, setAnotherThing}}
    >
      {props.children}
    </MyContext.Provider>
  )
}