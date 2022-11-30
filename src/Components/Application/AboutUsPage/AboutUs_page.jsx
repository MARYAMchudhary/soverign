import React, { Fragment, useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import ProjectContext from "../../../_helper/Project";
import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { useNavigate, Link } from "react-router-dom";
import { Add, Cancel, AboutUsText, AboutUsEditor } from "../../../Constant";
import { useForm } from "react-hook-form";
import CKEditors from "react-ckeditor-component";
function AboutUs_page() {
  const [content, setContent] = useState("content");
  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };
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
      <Breadcrumbs
        parent="Basic Setting"
        title="Add Website Title"
        mainTitle="Add Website Title"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form
                  className="theme-form"
                  onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{AboutUsText}</Label>
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
                        <Label>{AboutUsEditor}</Label>
                        <CKEditors
                          activeclassName="p10"
                          content={content}
                          events={{
                            change: onChange,
                          }}
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
                        <Btn attrBtn={{ color: "success", className: "me-3" }}>
                          {Add}
                        </Btn>
                        <Btn attrBtn={{ color: "danger" }}>{Cancel}</Btn>
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

export default AboutUs_page;
