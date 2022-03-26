import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="py-5 px-4 text-dark" style={{ marginTop: 150, background: '#C2B1C4' }}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                        <div className="mb-2">
                            <img src='/logo_black.svg'/>
                        </div>
                        <div>
                            <i className="bi bi-geo-alt-fill me-2"></i> District 7, Ho Chi Minh city
                        </div>
                        <div>
                            <a href="mailto: contact@rmitvn.io" className="text-dark text-decoration-none">
                                <i className="bi bi-envelope-fill me-2"></i> contact@rmitvn.io
                            </a>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div className="">
                            <a href="/welcome" className="text-dark text-decoration-none">
                                Home
                            </a>
                        </div>
                        <div className="ms-3">
                            <a href="/welcome#about" className="text-dark text-decoration-none">
                                About us
                            </a>
                        </div>
                        <div className="ms-3">
                            <a href="/privacy" className="text-dark text-decoration-none">
                                Privacy Policy
                            </a>
                        </div>
                        <div className="ms-3">
                            <a href="/terms" className="text-dark text-decoration-none">
                                Terms and Conditions
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="py-3 text-white d-flex justify-content-center" style={{background: '#5A426A'}}>
                <div className="text-center">
                    A project of ISYS2101 SE Project Management, Sem A 2022
                    <div>&copy; Team UpSpeech @ RMIT University Vietnam</div>
                </div>
            </div>
        </>
    );
}

export default Footer