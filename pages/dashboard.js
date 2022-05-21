import AuthCheck from "../components/AuthCheck"
import DashboardComponent from "../components/DashboardComponent"

export default function DashboardPage(props) {

    return (
        <>
        <AuthCheck>
            <DashboardComponent/>
        </AuthCheck>
            
        
        </>
    )
}

