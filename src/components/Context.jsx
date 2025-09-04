
import React, { createContext } from 'react'

export const Context = createContext();

const ContextProvider = ({children}) => {


// const domain = "https://hotsalesng.com/api_niseb"

const domain = "https://nisebnigeria.com/api_niseb"
const dollarRate = 1600
const payStackTestKey = "pk_test_60e1f53bba7c80b60029bf611a26a66a9a22d4e4"
const payStackLiveKey = ''

  return (
    <Context.Provider  value={{domain, dollarRate, payStackTestKey, payStackLiveKey}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider


// database
// user: User “nisebnig_niseb” was added to the database “nisebnig_niseb”.
// pw: #Niseb123niseb