import React from 'react';
import { Toaster } from 'react-hot-toast';

const Toastery = () => {
  return (
    <Toaster
          position="bottom-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'white',
              },
            },
          }}
        />
  )
}

export default Toastery;