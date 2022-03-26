import { Tab, Tabs, Row, Col, Nav } from "react-bootstrap"
import AudioUploader from "../components/AudioUploader"
import { useForm } from "react-hook-form"
import { useState, useContext } from 'react';
import { UserContext } from "../lib/context";
import toast from "react-hot-toast";

export default function SpeakPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [script, setScript] = useState('')

    const  onSubmit = async (values) => {
        setScript(values.script)
        toast.success('Save successfully!')
    }

    // const onSubmit = async (values) => {
    //     const uid = auth.currentUser.uid;
    //     const collectionRef = collection(getFirestore(), 'users', uid, 'speeches')
    //     const data = {
    //         uid,
    //         username,
    //         wordCount: 0,
    //         uploadedAt: serverTimestamp(),
    //         updatedAt: serverTimestamp(),
    //         script: values.script
    //     }
    //     const docRef = await addDoc(collectionRef, data);

    //     setSpeechID(docRef.id)
    //     setInitData(data)
    //     console.log(docRef.id)

    //     toast.success('Save successfully!')
    // }
    return (
        <>

            <div className="d-flex justify-content-center">
            <h3>1. Enter your script here</h3>
            </div>

            <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: 600 }}>
                            <label>
                                <h6 className="fw-500">What do you want to practice? <span className="text-danger">*</span></h6>
                            </label>
                            <textarea className="form-control" {...register("script", { required: "This field is required!", maxLength: { value: 1200, message: "Maximum 1200 characters" } })} rows="6" style={{ boxShadow: "none" }} />
                            {errors.script && (
                                <p className="form-error-mess">
                                    <i className="fas fa-exclamation-circle"></i>&nbsp;{errors.script.message}
                                </p>
                            )}
                            <button type="submit" className="mt-5 btn btn-primary">
                                Save script
                            </button>
                        </form>
            
            </div>

            <div className="d-flex justify-content-center mt-5">
            <h3>2. Record or Upload your speech</h3>
            </div>
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
                            <AudioUploader script={script}/>
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>
        </>
    )
}