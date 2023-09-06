import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Contact(){
    const [data, setData] = useState({
        name:'',
        email:'',
        subject: '',
        message: ''
    });
    const [getData, setGetData] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("data ",data)
            console.log(`Name: ${data.name} , Email: ${data.email}, Subject: ${data.subject}, Message: ${data.message}`);
            localStorage.setItem('formdata',JSON.stringify(data));
            const formdata = JSON.parse(localStorage.getItem('formdata'))
            setGetData(formdata);
      }

    const handleChange = (text, e)=>{
        setData(prev=>{
            return{
            ...prev,[text]:e.target.value
            }
        })
    }

    return(
        <section id="contact" className="pt-10 contact-sec bg_color--1">
            <div className="row row--35">
                <div className="col-lg-6 order-2 order-lg-1">
                    <div className="section-title">
                        <h2 className="title">Hire Me.</h2>
                        <p className="description">I am available for freelance work. Connect with me via phone: 01923 088574 or email: {getData?.email}</p>
                    </div>
                    <div className="contact-form">
                        <Form onSubmit={handleSubmit}>
                            <Form.Control type="text" value={data.name} onChange={(e)=>handleChange('name',e)} placeholder="Your Name *" />
                            <Form.Control type="email" value={data.email} onChange={(e)=>handleChange('email',e)} placeholder="Your email *" />
                            <Form.Control type="text" value={data.subject} onChange={(e)=>handleChange('subject',e)} placeholder="Write a Subject" />
                            <Form.Control type="textarea" value={data.message} onChange={(e)=>handleChange('message',e)} placeholder="Your Message" />
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                    <img src="../about-9.jpg" alt="about" className="w-100 rounded-3 mx-3"></img>
                </div>
            </div>
        </section>
    );
}

export default Contact;