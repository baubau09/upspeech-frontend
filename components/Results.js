import { Col, Row, Tab, Nav } from "react-bootstrap"
import {useState, useEffect} from 'react'
const Results = ({ script, n_words, pace, n_pace, fillers, n_fillers, pct_fillers, pronun, n_pronun, pct_pronun, pronun_words, pronun_words_idx, emotion }) => {
    const [paceColor, setPaceColor] = useState('')
    const [fillersColor, setFillersColor] = useState('')
    const [pronunColor, setPronunColor] = useState('')
    const [pronunWordsColor, setPronunWordsColor] = useState('#DC3545')

    useEffect(() => {
        if (pace == 'Just Right') setPaceColor('#229c00');
        if (pace == 'Too Fast') setPaceColor('#9c8200');
        if (pace == 'Too Slow') setPaceColor('#9c8200');
        if (fillers == 'Perfect' || 'Good') setFillersColor('#229c00');
        if (fillers == 'Needs Improvement') setFillersColor('#9c8200');
        if (fillers == 'Bad') setFillersColor('#DC3545');
        if (pronun == 'Perfect' || 'Good') setPronunColor('#229c00');
        if (pronun == 'Bad') setPronunColor('#DC3545');
        if (pronun == 'Needs Improvement') setPronunColor('#9c8200');
    }, [pace, fillers, pct_fillers, pronun, pct_pronun, pronun_words])
    
    const scriptArr = script.split()

    // const PrintScript = (word) => {
    //     const res = <span>{word}&nbsp;</span>
    //     for (var i = 0; i < scriptArr.length; i++) {
    //         if (pronun_words.length < scriptArr.length) {
    //             pronun_words.push("")
    //         }
    //         if (scriptArr[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") == pronun_words[i]) {
    //             res = <span style={{color: '#DC3545'}}>{word}&nbsp;</span>
    //         }
    //     }
    //     return res
    // } 

    const PrintPronunResult = (props) => {
        let res;
        for (var i = 0; i < pronun_words_idx.length; i++) {
            if (pronun_words_idx[i] == props.index) {
                res = <span style={{color: pronunWordsColor}}>{props.word}&nbsp;</span>
            }
            else {
                res = <span>{props.word}&nbsp;</span>;
            }
            console.log(props.index)
        }
        return res
    }

    // {
    //     let res;
    //     for (var i = 0; i < pronun_words_idx.length; i++) {
    //         if (index == pronun_words_idx[i]) {
    //             res = <span style={{color: pronunWordsColor}}>{word}&nbsp;</span>
    //         }
    //         else {
    //             res = <span>{word}&nbsp;</span>;
    //         }
    //     }
    //     return res
    // }

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
                                <div className="text-center" style={{maxWidth: 360}}>
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
                                <div className="text-center" style={{maxWidth: 360}}>
                                    <p>
                                        You have <span className="fs-4">{n_fillers}</span> filled pauses in a speech, <br /> which account for about <span className="fs-4" style={{color: fillersColor}}>{pct_fillers}%</span> of your speech.
                                    </p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="pronunciation" className="border-light border-1 shadow text-dark ms-3 py-4 px-5" style={{ borderRadius: 15, background: '#fff', opacity: 1 }}>
                                <div className="d-flex justify-content-center">
                                    <p style={{ color: pronunColor, fontWeight: 600 }} className="fs-3">{pronun}</p>
                                </div>
                                <div className="text-center" style={{maxWidth: 360}}>
                                    <p>
                                        You have <span className="fs-4">{n_pronun}</span> incorrectly pronounced words <br /> in a speech of {n_words} words, <br /> which account for <span className="fs-4" style={{color: pronunColor}}>{pct_pronun}%</span> of your speech.
                                    </p>
                                </div>
                                <div className="text-center" style={{maxWidth: 360}}>
                                        {scriptArr && scriptArr.map((word, index, array) =>  {
                                            return <PrintPronunResult key={index} word={word} index={index}/>
                                        }
                                            
                                        )}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="emotion" className="border-light border-1 shadow text-dark ms-3 py-4 px-5" style={{ borderRadius: 15, background: '#fff', opacity: 1 }}>
                                <div className="d-flex justify-content-center">
                                    <p style={{ color: '#229c00', fontWeight: 600 }} className="fs-3">{emotion.charAt(0).toUpperCase() + emotion.slice(1)}</p>
                                </div>
                                <div className="text-center" style={{maxWidth: 360}}>
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