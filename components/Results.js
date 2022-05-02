import { Col, Row, Tab, Nav } from "react-bootstrap"
import {useState, useEffect} from 'react'
const Results = ({ n_words, pace, n_pace, fillers, n_fillers, pct_fillers, pronun, n_pronun, pct_pronun, pronun_words, emotion }) => {
    const [paceColor, setPaceColor] = useState('')
    const [fillersColor, setFillersColor] = useState('')
    const [pronunColor, setPronunColor] = useState('')

    useEffect(() => {
        if (pace == 'Just Right') setPaceColor('#229c00');
        if (pace == 'Too Fast') setPaceColor('#9c8200');
        if (pace == 'Too Slow') setPaceColor('#9c8200');
        if (fillers == 'Perfect') setFillersColor('#229c00');
        if (fillers == 'Needs Improvement') setFillersColor('#DC3545');
        if (fillers == 'Good') setFillersColor('#9c8200');
        if (pronun == 'Perfect') setPronunColor('#229c00');
        if (pronun == 'Needs Improvement') setPronunColor('#DC3545');
        if (pronun == 'Good') setPronunColor('#9c8200');
        console.log(pronun_words)
    }, [pace, fillers, pct_fillers, pronun, pct_pronun, pronun_words])


    return (
        <>
            <div className="d-flex justify-content-center mb-3">
                <h3 className="fw-bold text-uppercase">3. Your speech analysis results</h3>
            </div>

            <Tab.Container id="left-tabs" defaultActiveKey="pace">
                <Row className="bg-light px-4 py-4" style={{ borderRadius: 50 }}>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item >
                                <Nav.Link eventKey="pace" href="#pace" className="text-dark">Pace</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="eloquence" href="#eloquence" className="text-dark">Eloquence</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="pronunciation" href="#pronunciation" className="text-dark">Pronunciation</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="emotion" href="#emotion" className="text-dark">Emotion</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="pace" className="border-light border-1 shadow text-dark ms-3 py-4 px-5" style={{ borderRadius: 15, background: '#fff', opacity: 1 }}>
                                <div className="d-flex justify-content-center">
                                    <p style={{ color: paceColor, fontWeight: 600 }} className="fs-3">{pace}</p>
                                </div>
                                <div className="text-center">
                                    <p className="fs-4">{n_pace}wpm</p>
                                    <p>
                                        Your speaking speed is {pace}!
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="eloquence" className="border-light border-1 shadow text-dark ms-3 py-4 px-5" style={{ borderRadius: 15, background: '#fff', opacity: 1 }}>
                                <div className="d-flex justify-content-center">
                                    <p style={{ color: fillersColor, fontWeight: 600 }} className="fs-3">{fillers}</p>
                                </div>
                                <div className="text-center">
                                    <p>
                                        You have <span className="fs-4">{n_fillers}</span> filled pauses in a speech, <br /> which account for about <span className="fs-4" style={{color: fillersColor}}>{pct_fillers}%</span> of your speech.
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="pronunciation" className="border-light border-1 shadow text-dark ms-3 py-4 px-5" style={{ borderRadius: 15, background: '#fff', opacity: 1 }}>
                                <div className="d-flex justify-content-center">
                                    <p style={{ color: pronunColor, fontWeight: 600 }} className="fs-3">{pronun}</p>
                                </div>
                                <div className="text-center">
                                    <p>
                                        You have <span className="fs-4">{n_pronun}</span> incorrectly pronounced words <br /> in a speech of {n_words} words, <br /> which account for <span className="fs-4 text-success">{pct_pronun}%</span> of your speech.
                                    </p>
                                </div>
                                <div className="text-center">
                                        {
                                            pronun_words && pronun_words.map((item, index) => <p key={index}>{item}</p>
                                            )
                                        }
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="emotion" className="border-light border-1 shadow text-dark ms-3 py-4 px-5" style={{ borderRadius: 15, background: '#fff', opacity: 1 }}>
                                <div className="d-flex justify-content-center">
                                    <p style={{ color: '#229c00', fontWeight: 600 }} className="fs-3">{emotion}</p>
                                </div>
                                <div className="text-center">
                                    <p>
                                        You seem to have a {emotion} tone<br /> in your speech!
                                    </p>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}

export default Results