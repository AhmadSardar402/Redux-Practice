import React from 'react'
import { Outlet } from 'react-router'
import Navigationbar from './Navigationbar'


const RootLayout = () => {
  return (
    <div>
        <Navigationbar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout
