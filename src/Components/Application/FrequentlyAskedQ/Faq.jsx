import React, { Fragment, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label
} from "reactstrap";
import ProjectContext from "../../../_helper/Project";
import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { useNavigate, Link } from "react-router-dom";
import { Add, Cancel, FaqQuestion, FaqAnswer } from "../../../Constant";
import { useForm } from "react-hook-form";
function Faq() {
 const history = useNavigate();
 const project = useContext(ProjectContext);
 const {
   register,
   handleSubmit,
   formState: { errors },
 } = useForm();

 const AddProject = (data) => {
   if (data !== "") {
     project.addNewProject(data);
     history(`${process.env.PUBLIC_URL}/app/project/project-list`);
   } else {
     errors.showMessages();
   }
 };
 return (
   <Fragment>
     <Breadcrumbs parent="FAQ" title="Add FAQ Data" mainTitle="Add FAQ Data" />
     <Container fluid={true}>
       <Row>
         <Col sm="12">
           <Card>
             <CardBody>
               <Form className="theme-form" onSubmit={handleSubmit(AddProject)}>
                 <Row>
                   <Col>
                     <FormGroup>
                       <Label>{FaqQuestion}</Label>
                       <input
                         className="form-control"
                         type="text"
                         name="title"
                         placeholder="Add heading *"
                         {...register("title", { required: true })}
                       />
                       <span style={{ color: "red" }}>
                         {errors.title && "Title is required"}
                       </span>
                     </FormGroup>
                   </Col>
                 </Row>
                 <Row>
                   <Col>
                     <FormGroup>
                       <Label>{FaqAnswer}</Label>
                       <input
                         className="form-control"
                         type="text"
                         name="title"
                         placeholder="Add heading *"
                         {...register("title", { required: true })}
                       />
                       <span style={{ color: "red" }}>
                         {errors.title && "Title is required"}
                       </span>
                     </FormGroup>
                   </Col>
                 </Row>

                 <Row>
                   <Col>
                     <FormGroup className="mb-0">
                       <Link to={"/dashboard/faqlist"}>
                         <Btn attrBtn={{ color: "success", className: "me-3" }}>
                           {Add}
                         </Btn>
                       </Link>

                       <Link
                         to={`${process.env.PUBLIC_URL}/app/project/project-list`}
                       >
                         <Btn attrBtn={{ color: "danger" }}>{Cancel}</Btn>
                       </Link>
                     </FormGroup>
                   </Col>
                 </Row>
               </Form>
             </CardBody>
           </Card>
         </Col>
       </Row>
     </Container>
   </Fragment>
 );
}

export default Faq;
