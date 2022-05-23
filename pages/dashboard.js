import AuthCheck from "../components/AuthCheck"
import DashboardComponent from "../components/DashboardComponent"
import Head from "next/head"
export default function DashboardPage(props) {

    return (
        <>
        <Head>
        <title>UpSpeech - Dashboard</title>
        </Head>
        <AuthCheck>
            <DashboardComponent/>
        </AuthCheck>
            
        
        </>
    )
}

