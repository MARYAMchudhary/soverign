import React, { Fragment, useState, useEffect } from 'react';
import { Card, CardBody, Col, Container, Row, Form, FormGroup, Label, CardFooter, Button, Input } from 'reactstrap';
import HeaderCard from '../../Common/Component/HeaderCard';

import { Breadcrumbs } from '../../../AbstractElements';
import axios from 'axios'
import { toast, Slide } from 'react-toastify'

const EmailCredentials = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        await axios
            .get(`${global.backendUrl}/getEmailCredentials`)
            .then(response => {
                console.log(response)
                setData(response.data[0])
                setEmail(response.data[0].email)
                // let encryptedPassword = "";
                // response.data[0].password.split("").forEach(element => {
                //     let newVar = (element.charCodeAt(0)) - 10;
                //     encryptedPassword = encryptedPassword + String.fromCharCode(newVar);
                // });
                // setPassword(encryptedPassword)
            })
            .catch(err => console.log(err))
    }
    async function update() {
        let encryptedPassword = "";
        password.split("").forEach(element => {
            let newVar = (element.charCodeAt(0)) + 10;
            encryptedPassword = encryptedPassword + String.fromCharCode(newVar);
        });
        
        const formData = {
            email: email,
            password: encryptedPassword,
            email_credentials_id: data.email_credentials_id
        }

        await axios
            .post(`${global.backendUrl}/updateEmailCredentials`, formData)
            .then(response => {
                console.log(response)
                toast.success("Credentials Updated Successfully",
                    { transition: Slide, hideProgressBar: true, autoClose: 2000 }
                )
            })
            .catch(err => console.log(err))
    }

    return (
        <Fragment>
            <Breadcrumbs mainTitle="Email Credentials" parent="Admin Pages" title="Email Credentials" />
            <Container fluid={true}>
                <Row>
                    <Col sm="12">
                        <Card>
                            <HeaderCard title="Email Credentials" />
                            <Form className="form theme-form">
                                <CardBody>
                                    <Row>
                                        <Col sm="6">
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Email</Label>
                                                <Input className="form-control" type="email" placeholder="name@example.com" value={email} onChange={(e) => {
                                                    setEmail(e.target.value)
                                                }} />
                                            </FormGroup>
                                        </Col>
                                        <Col sm="6">
                                            <FormGroup>
                                                <Label htmlFor="exampleFormControlInput1">Password</Label>
                                                <Input className="form-control" type="password" placeholder="Password" value={password} onChange={(e) => {
                                                    setPassword(e.target.value)
                                                }} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter className="text-end">
                                    <Button color="primary" className="m-r-15" onClick={(e) => {
                                        update()
                                    }} >Submit</Button>
                                </CardFooter>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};
export default EmailCredentials;