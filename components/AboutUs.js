import React from 'react'

const AboutUs = () => {
    return (
        <>
            <section id="about" className="my-5">
                <div className="container">
                    <div className="section-title ms-4 ps-5">
                        <h2><i className="bi bi-heart"></i> Team</h2>
                        <p className="fs-1">About us</p>
                    </div>

                    <div className="mx-auto px-5 mb-5 border-light border-1 shadow py-4 text-dark" style={{ maxWidth: 800, borderRadius: 15, background: '#fff', opacity: 0.9 }}>
                        <p className="">
                            Currently, there exists no popular mainstream solutions for the purpose of Speech correction and improvement, with only similar products such as Grammarly and Quillbot focusing on analysing written work. Furthermore, we found that to practise Speaking skills effectively, one would need constant evaluation and feedback from coaches and classes, thus making it inaccessible to students and those without extra income to spare. Therefore, we believe that UpSpeech would be the perfect solution that not only make English speaking practise more accessible to the general populace, but also possesses a high potential in this niche sector of the market.
                        </p>
                        <p className="my-0">
                            Best,<br />
                            <b>Team UpSpeech</b>
                            <br />
                            contact@rmitvn.io
                        </p>
                    </div>


                </div>
            </section>


            <div className='container team'>
                <div className="row gy-4 mx-0 mx-md-2">

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                            <div className="member-img">
                                <img src="/tri.jpg" className="img-fluid" alt="" />
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Tri Truong</h4>
                                <span>Project Manager</span>
                                <p>I am currently undertaking my Bachelor degree at RMIT University Vietnam in Information Technology, minoring in Artificial Intelligence.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                            <div className="member-img">
                                <img src="/kt.jpg" className="img-fluid" alt="" />
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Anh Tran</h4>
                                <span>Software Architect</span>
                                <p>I am a student at RMIT University Vietnam, where I am majoring in Information Technology (Data Analytics stream).</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                            <div className="member-img">
                                <img src="/linh.jpg" className="img-fluid" alt="" />
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Linh Bui</h4>
                                <span>Sofware Engineer</span>
                                <p>As a second-year student of RMIT, I personally had gained sufficient programming skills and experience with IT projects from the previous courses.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div className="member">
                            <div className="member-img">
                                <img src="/son.jpg" className="img-fluid" alt="" />
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Son Le</h4>
                                <span>Data Scientist</span>
                                <p>I am currently enrolled at RMIT University in Vietnam, where I am completing a degree in Information Technology with a minor in Data Analytics.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default AboutUs