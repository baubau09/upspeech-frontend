//import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/globals.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useUserData } from '../lib/hooks'
import { Toaster } from 'react-hot-toast'
import { UserContext } from '../lib/context'

function MyApp({ Component, pageProps }) {
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
