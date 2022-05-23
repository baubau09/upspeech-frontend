import React from 'react'
import { Carousel } from 'react-bootstrap'

const Features = () => {
    return (
        <>
            <section id="features" className="my-5">
                <div className="container">
                    <div className="section-title ms-4 ps-5">
                        <h2><i className="bi bi-heart"></i> Our </h2>
                        <p className="fs-1">Features</p>
                    </div>


                    <div className='mt-4'>
                        <Carousel>
                            <Carousel.Item>
                                <div className='d-flex justify-content-center mb-5'>
                                    <div className="col-2">&nbsp;</div>
                                    <div className="col-3">
                                        <img src="/feature-pace.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className='col-1'></div>
                                    <div className='col-4'>
                                        <h2 className="fw-bold mt-5">Pace Analysis</h2>
                                        <p className="fs-5">Are you speaking too fast, too slow, or just right? Let us help you decide!</p>
                                    </div>
                                    <div className="col-2">&nbsp;</div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='d-flex justify-content-center mb-5'>
                                    <div className="col-2">&nbsp;</div>
                                    <div className="col-3">
                                        <img src="/feature-fillers.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className='col-1'></div>
                                    <div className='col-4'>
                                        <h2 className="fw-bold mt-5">Eloquence Analysis</h2>
                                        <p className="fs-5">Are you pausing a lot in your speech? Do you &quot;ummm...ah...&quot; too much? We can show you the number of filled pauses and if you need to improve your eloquence!</p>
                                    </div>
                                    <div className="col-2">&nbsp;</div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='d-flex justify-content-center mb-5'>
                                    <div className="col-2">&nbsp;</div>
                                    <div className="col-3">
                                        <img src="/feature-pronun.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className='col-1'></div>
                                    <div className='col-4'>
                                        <h2 className="fw-bold mt-5">Pronunciation Analysis</h2>
                                        <p className="fs-5">We can help you pointing out the words that are incorrectly pronounced and if they affected too much of your speech.</p>
                                    </div>
                                    <div className="col-2">&nbsp;</div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='d-flex justify-content-center mb-5'>
                                    <div className="col-2">&nbsp;</div>
                                    <div className="col-3">
                                        <img src="/feature-emo.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className='col-1'></div>
                                    <div className='col-4'>
                                        <h2 className="fw-bold mt-5">Emotion Analysis</h2>
                                        <p className="fs-5">Do you know how you sound like to the listeners? Is it Neutral, Angry, Happy, Sad, Fear, or Disgusted?</p>
                                    </div>
                                    <div className='col-2'>&nbsp;</div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='d-flex justify-content-center mb-5'>
                                    <div className="col-2">&nbsp;</div>
                                    <div className="col-3">
                                        <img src="/feature-dashboard.png" className="img-fluid" alt="" />
                                    </div>
                                    <div className='col-1'></div>
                                    <div className='col-4'>
                                        <h2 className="fw-bold mt-5">Dashboard</h2>
                                        <p className="fs-5">Finally, we can help you keep track of your progress over time through intuitive charts and graphs!</p>
                                    </div>
                                    <div className='col-2'>&nbsp;</div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                
            </section>
        </>
    )
}

export default Features