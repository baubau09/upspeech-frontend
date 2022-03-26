import React from 'react'
import { useForm } from "react-hook-form"

const ContactUs = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
            <section id="contact">
                <div className="container" style={{ marginTop: 140 }}>
                    <div className="section-title ms-4 ps-5">
                        <h2><i className="bi bi-heart"></i> Reach out</h2>
                        <p className="fs-1">Contact us</p>
                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                        <form onSubmit={handleSubmit(onSubmit)} style={{ width: 600 }}>
                            <label>
                                <h6 className="fw-500">
                                    Name <span className="text-danger">*</span>
                                </h6>
                            </label>
                            <input type="text" className="form-control mb-4"
                                placeholder="Tell us your name" {...register("contact_name", { required: "This field is required!" })} />
                            {errors.contact_title && (
                                <p className="form-error-mess">
                                    <i className="fas fa-exclamation-circle"></i>&nbsp;{errors.contact_title.message}
                                </p>
                            )}


                            <label>
                                <h6 className="fw-500">
                                    Email address <span className="text-danger">*</span>
                                </h6>
                            </label>
                            <input type="text" className="form-control mb-4"
                                placeholder="Tell us your email" {...register("contact_email", { required: "This field is required!" })} />
                            {errors.contact_title && (
                                <p className="form-error-mess">
                                    <i className="fas fa-exclamation-circle"></i>&nbsp;{errors.contact_title.message}
                                </p>
                            )}


                            <label>
                                <h6 className="fw-500">
                                    Title <span className="text-danger">*</span>
                                </h6>
                            </label>
                            <input type="text" className="form-control mb-4"
                                placeholder="Specify message title" {...register("contact_title", { required: "This field is required!" })} />
                            {errors.contact_title && (
                                <p className="form-error-mess">
                                    <i className="fas fa-exclamation-circle"></i>&nbsp;{errors.contact_title.message}
                                </p>
                            )}


                            <label>
                                <h6 className="fw-500">Your message <span className="text-danger">*</span></h6>
                            </label>
                            <textarea className="form-control" {...register("contact_message", { required: "This field is required!", maxLength: { value: 1200, message: "Maximum 1200 characters" } })} rows="6" style={{ boxShadow: "none" }} />
                            {errors.contact_message && (
                                <p className="form-error-mess">
                                    <i className="fas fa-exclamation-circle"></i>&nbsp;{errors.contact_message.message}
                                </p>
                            )}
                            <button type="submit" className="mt-5 btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactUs