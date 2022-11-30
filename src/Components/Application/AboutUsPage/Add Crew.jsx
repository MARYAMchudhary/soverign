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
import {
  Add,
  Cancel,
  AddMeetName,
  AddMeetTitle,
  AddMeetTwitter,
  AboutUsImage} from "../../../Constant";
import { useForm } from "react-hook-form";
import Dropzone from "react-dropzone-uploader";
function AddCrew() {
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
      const getUploadParams = ({ meta }) => {
        return {
          url: "https://httpbin.org/post",
        };
      };
      const handleChangeStatus = ({ meta, file }, status) => {};
  return (
    <Fragment>
      <Breadcrumbs
        parent="Home Page"
        title="Add Crew Data"
        mainTitle="Add Crew Data"
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
                        <Label>{AddMeetName}</Label>
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
                        <Label>{AddMeetTitle}</Label>
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
                        <Label>{AddMeetTwitter}</Label>
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
                        <Label>{AboutUsImage}</Label>
                        <Dropzone
                          getUploadParams={getUploadParams}
                          onChangeStatus={handleChangeStatus}
                          maxFiles={1}
                          multiple={false}
                          canCancel={false}
                          inputContent="Drop A File"
                          styles={{
                            dropzone: { width: "100%", height: 50 },
                            dropzoneActive: { borderColor: "green" },
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Link to={"/dashboard/crewlist"}>
                          <Btn
                            attrBtn={{ color: "success", className: "me-3" }}
                          >
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

export default AddCrew;
