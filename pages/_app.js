//import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header'
import '../styles/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import Footer from '../components/Footer'

import { useUserData } from '../lib/hooks'
import { Toaster } from 'react-hot-toast'
import { UserContext } from '../lib/context'
import {useEffect} from 'react'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const userData = useUserData()
    return (
        <>
            <UserContext.Provider value={userData}>
                <Header/>
                <Component {...pageProps} />
                <Toaster/>
            </UserContext.Provider>
        </>
    )
}

export default MyApp
