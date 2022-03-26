import Image from 'next/image'
import React from 'react'
import { Nav, Dropdown, OverlayTrigger } from 'react-bootstrap'
import AuthCheck from './AuthCheck'
import '../styles/Header.module.css'

const Header = () => {
    return (
        <div className="container-fluid sticky-top">
			<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
				<a href="/welcome" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
					<img src='logo_colored.svg' width={250}/>
				</a>

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
					<li className="nav-item mx-2">
						<Nav.Link href="#contact" className="nav-link welcome">
							Contact
						</Nav.Link>
					</li>
				</Nav>

                <AuthCheck>
                    <div className="col-md-3 text-end">
                        <li className="nav-item mx-2">
                            <Nav.Link href="#about" className="nav-link welcome">
                                Dashboard
                            </Nav.Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Nav.Link href="#contact" className="nav-link welcome">
                                Speak
                            </Nav.Link>
                        </li>
                    </div>

                </AuthCheck>


			</header>
		</div>
    )
}

export default Header