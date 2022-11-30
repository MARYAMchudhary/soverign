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
  Button,
} from "reactstrap";
import ProjectContext from "../../../_helper/Project";
import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { useNavigate, Link } from "react-router-dom";
import { Add, Cancel } from "../../../Constant";
import { useForm } from "react-hook-form";
import { WebHeading } from "../../../Constant";
function AddwebsiteTitle() {
  const history = useNavigate();
  const project = useContext(ProjectContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [inpval, setINP] = useState({
    webTitle: "",
  });
  const setdata = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const addinpdata = async (e) => {
    e.preventDefault();

    const { webTitle } = inpval;

    const res = await fetch("/add_webtitle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        webTitle,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
      alert("error");
    } else {
      // history.push("/");
      // setUdata(data);
      console.log("data added");
    }
  };

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
                        <Label>{WebHeading}</Label>
                        <input
                          className="form-control"
                          type="text"
                          name="webTitle"
                          placeholder="Add heading"
                          value={inpval.webTitle}
                          onChange={(e) => setdata(e)}
                          // {...register("title", { required: true })}
                        />
                        {/* <span style={{ color: "red" }}>
              {errors.title && "Title is required"}
            </span> */}
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        {" "}
                        <Button onClick={(e) => addinpdata(e)}>{Add}</Button>
                        {/* </Link> */}
                        {/* <Link
                          to={`${process.env.PUBLIC_URL}/app/project/project-list`}
                        > */}
                        {/* <Btn attrBtn={{ color: "danger" }}>{Cancel}</Btn> */}
                        {/* </Link> */}
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

export default AddwebsiteTitle;
