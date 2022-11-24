import React, { Fragment, useContext } from 'react';
import { Breadcrumbs, Btn } from '../../../../AbstractElements';
import ProjectContext from '../../../../_helper/Project';
import { Add, Cancel } from '../../../../Constant';
import ProjectTitleClass from './ProjectTitle';
import ClientNameClass from './ClientName';
import ProjectRateClass from './ProjectRate';
import IssueClass from './IssueClass';
import EnterSomeDetailsClass from './EnterSomeDetails';
import UploadProjectFileClass from './UploadProjectFile';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container, Row, Col, Card, CardBody, Form, FormGroup } from 'reactstrap';

const Newproject = () => {

  const history = useNavigate();
  const project = useContext(ProjectContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const AddProject = data => {
    if (data !== '') {
      project.addNewProject(data);
      history(`${process.env.PUBLIC_URL}/app/project/project-list`);
    } else {
      errors.showMessages();
    }
  };

  return (
    <Fragment>
      <Breadcrumbs parent="Project" title="Create Project" mainTitle="Create Project" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form className="theme-form" onSubmit={handleSubmit(AddProject)}>
                  <ProjectTitleClass register={register} errors={errors} />
                  <ClientNameClass register={register} errors={errors} />
                  <ProjectRateClass register={register} errors={errors} />
                  <IssueClass register={register} />
                  <EnterSomeDetailsClass register={register} errors={errors} />
                  <UploadProjectFileClass register={register} errors={errors} />
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Btn attrBtn={{ color: 'success', className: 'me-3' }} >{Add}</Btn>
                        <Link to={`${process.env.PUBLIC_URL}/app/project/project-list`}>
                          <Btn attrBtn={{ color: 'danger' }} >{Cancel}</Btn>
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
};

export default Newproject;