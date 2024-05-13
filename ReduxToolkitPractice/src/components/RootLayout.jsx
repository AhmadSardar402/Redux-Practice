import React from 'react'
import { Outlet } from 'react-router'
import Navigationbar from './Navigationbar'
import { Provider } from 'react-redux'
import store from './store/store'
const RootLayout = () => {
  return (
    <>
        <Provider store={store}>      
            <Navigationbar/>
            <main>
                <Outlet/>
            </main>
        </Provider>
    </>
  )
}

export default RootLayout
