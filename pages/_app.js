//import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import '../styles/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { useUserData } from '../lib/hooks'
import { Toaster } from 'react-hot-toast'
import { UserContext } from '../lib/context'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {

    const userData = useUserData()
    return (
        <>
            <UserContext.Provider value={userData}>
                <Header/>
                <Component {...pageProps} />
                <Footer/>
                <Toaster/>
            </UserContext.Provider>
        </>
    )
}

export default MyApp
