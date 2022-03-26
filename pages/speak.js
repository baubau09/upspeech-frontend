import { Tab, Tabs, Row, Col, Nav } from "react-bootstrap"
import AudioUploader from "../components/AudioUploader"

export default function SpeakPage() {
    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className="d-flex justify-content-center">
                    <Nav variant="pills" className="btn-lg">
                        <Nav.Item>
                            <Nav.Link eventKey="first" href="#record">Record</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second" href="#upload">Upload</Nav.Link>
                        </Nav.Item>
                    </Nav>



                </div>
                <div className="d-flex justify-content-center">
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            Record
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <AudioUploader/>
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>
        </>
    )
}