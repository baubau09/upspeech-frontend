import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'

export default function Home() {
    return (
        <>
        
        <section id="home">
            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 align-items-center">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h2 className="display-4 fw-bold lh-1 text-primary">
                            Speech. <span className="text-secondary">Redefine.</span>
                        </h2>
                        <p className="lead fw-normal">
                            <span className='fw-bold'>UpSpeech</span> is a solution that would take in vocal inputs from the user and run them through a Machine Learning model to produce tangible and quantifiable values that would then be used to generate recommendations for users regarding their Speaking level.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <Link href="/speak">
                            <button type="button" className="btn btn-primary up-grad btn-lg px-4 me-md-2 fw-bold">
                                Speak now and get your evaluation
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-lg-3" src='/Saly-12.png' alt="" width="100%" />
                    </div>
                </div>
            </div>
        </section>
        <AboutUs/>
        <ContactUs/>
        </>
        
    )
}
