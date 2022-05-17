import React, {createContext, useState } from 'react';

const { Provider, Consumer } = createContext();

const contextProvider = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [someData, setSomeData] = useState('BIGA VARIABLE');

  return (
    <Provider
        value={someData}
    >
    </Provider>
  )
}


export { contextProvider }
export default Consumer;