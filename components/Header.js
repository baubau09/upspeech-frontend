import Link from 'next/link'
import { Nav, Dropdown } from 'react-bootstrap'
import AuthCheck from './AuthCheck'
import { UserContext } from '../lib/context'
import { auth } from '../lib/firebase';
import { useContext, useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';


const Header = () => {
    const {username, user} = useContext(UserContext)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
            if (user !== null ) {
                setLoading(false)
            }
    }, [user])


    return (
        <div className="container-fluid sticky-top" style={{backgroundColor: '#352953'}}>
            
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                <Link href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img src='logo_colored.svg' width={250} />
                </Link>

                <Nav className="nav nav-pills mb-2 justify-content-center">
                    <li className="nav-item mx-2">
                        <Nav.Link href="#home" className="welcome">
                            Home
                        </Nav.Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Nav.Link href="#about" className="nav-link welcome">
                            About us
                        </Nav.Link>
                    </li>
                    {
                        user && 
                        <li className="nav-item mx-2">
                            <Nav.Link href="#speak" className="nav-link welcome">
                                Speak
                            </Nav.Link>
                        </li>
                    }
                    <li className="nav-item mx-2">
                        <Nav.Link href="#contact" className="nav-link welcome">
                            Contact
                        </Nav.Link>
                    </li>
                    
                </Nav>

                <AuthCheck>
                    <div className="col-md-3 me-0 pe-0 text-end">
                        <Dropdown>
                            <Dropdown.Toggle className="bg-transparent border-0 text-body">
                                {!isLoading && user ?
                                    <img src={user.photoURL} width="50" height="50" alt="" className="rounded-circle" style={{ objectFit: 'cover' }} />
                                    :
                                    <img src='./icon.png' width="50" height="50" alt="" className="rounded-circle" style={{ objectFit: 'cover' }} />
                                }
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-profile-menu shadow-lg">
                                <Dropdown.Item className="dropdown-profile" onClick={() => window.location.href = "/profile"}>
                                    <i className="fas fa-user-circle" style={{ fontSize: 18 }}></i>
                                    <span className="ms-3" style={{ fontWeight: 600 }}>
                                        Profile
                                    </span>
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-profile" onClick={() => window.location.href = "/my-posts"}>
                                    <i className="fas fa-pager" style={{ fontSize: 18 }}></i>
                                    <span className="ms-3" style={{ fontWeight: 600 }}>
                                        Dashboard
                                    </span>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className="dropdown-profile-logout"
                                onClick={() => signOut(auth)}>
                                    <i className="fas fa-power-off"></i>
                                    <span className="ms-3" style={{ fontWeight: 600 }}>
                                        Logout
                                    </span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </AuthCheck>


            </header>
        </div>
    )
}

export default Header