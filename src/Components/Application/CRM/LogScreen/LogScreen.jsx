import React, { Fragment, useState, useContext } from "react";
import { Col, Container, Row, Card, CardBody,CardHeader,Table, Media } from "reactstrap";

import { Link } from "react-router-dom";
import { Breadcrumbs, H5, H6, LI, P, UL } from "../../../../AbstractElements";
import { BasicTable } from "../../../../Constant";
import TableContext from "../../../../_helper/Table";
function LogScreen() {
  const [IsOpen, setIsOpen] = useState(false);
   const { data } = useContext(TableContext);
  const OnHandelClick = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Email Compose"
        parent="Apps"
        title="Email Compose"
      />
      <Container fluid={true}>
        <div className="email-wrap">
          <Row>
            <Col xl="3" md="6" className="xl-30 box-col-4">
              <div className="email-sidebar">
                <a
                  className="btn btn-primary email-sidebar-toggle"
                  href="#javascript"
                  onClick={OnHandelClick}
                >
                  Email Filter
                </a>
                <div className={`email-left-aside ${IsOpen ? "open" : ""}`}>
                  <Card>
                    <CardBody>
                      <div className="email-app-sidebar">
                        <UL
                          attrUL={{
                            className: "simple-list nav main-menu ",
                            role: "tablist",
                          }}
                        >
                          <LI attrLI={{ className: "nav-item" }}>
                            <Link
                              className="btn-primary btn-block btn-mail w-100"
                              id="pills-darkhome-tab"
                              data-bs-toggle="pill"
                              to={`${process.env.PUBLIC_URL}/app/email/compose`}
                              role="tab"
                              aria-controls="pills-darkhome"
                              aria-selected="true"
                            >
                              <i className="icofont icofont-envelope me-2"></i>{" "}
                              NEW User
                            </Link>
                          </LI>
                          <LI>
                            <a href="#javascript">
                              <span className="title">
                                <i className="icon-folder"></i> All User
                              </span>
                            </a>
                          </LI>
                          <LI>
                            <a href="#javascript">
                              <span className="title">
                                <i className="icon-folder"></i> All User
                              </span>
                            </a>
                          </LI>{" "}
                          <LI>
                            <a href="#javascript">
                              <span className="title">
                                <i className="icon-folder"></i> All User
                              </span>
                            </a>
                          </LI>{" "}
                          <LI>
                            <a href="#javascript">
                              <span className="title">
                                <i className="icon-folder"></i> All User
                              </span>
                            </a>
                          </LI>
                          <LI>
                            <a href="#javascript">
                              <span className="title">
                                <i className="icon-folder"></i> All User
                              </span>
                            </a>
                          </LI>{" "}
                          <LI>
                            <a href="#javascript">
                              <span className="title">
                                <i className="icon-folder"></i> All User
                              </span>
                            </a>
                          </LI>{" "}
                          <LI>
                            <a href="#javascript">
                              <span className="title">
                                <i className="icon-folder"></i> All User
                              </span>
                            </a>
                          </LI>{" "}
                          <LI>
                            <a href="#javascript">
                              <span className="title">
                                <i className="icon-folder"></i> All User
                              </span>
                            </a>
                          </LI>{" "}
                          <LI>
                            <a href="#javascript">
                              <span className="title">
                                <i className="icon-folder"></i> All User
                              </span>
                            </a>
                          </LI>{" "}
                          <LI>
                            <a href="#javascript">
                              <span className="title">
                                <i className="icon-folder"></i> All User
                              </span>
                            </a>
                          </LI>
                          <LI>
                            <a href="#javascript">
                              <span className="title">
                                <i className="icon-folder"></i> All User
                              </span>
                            </a>
                          </LI>{" "}
                          <LI>
                            <a href="#javascript">
                              <span className="title">
                                <i className="icon-folder"></i> All User
                              </span>
                            </a>
                          </LI>{" "}
                          <LI>
                            <a href="#javascript">
                              <span className="title">
                                <i className="icon-folder"></i> All User
                              </span>
                            </a>
                          </LI>{" "}
                          <LI>
                            <a href="#javascript">
                              <span className="title">
                                <i className="icon-folder"></i> All User
                              </span>
                            </a>
                          </LI>
                        </UL>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </Col>
            <Col xl="9" md="12" className="xl-70 box-col-8">
              <Container fluid={true}>
                <Row>
                  {" "}
                  <Col sm="12">
                    <Card>
                      <CardHeader>
                        <H5>Log Data</H5>
                        <span></span>
                      </CardHeader>
                      <div className="table-responsive">
                        <Table>
                          <thead>
                            <tr>
                              <th scope="col">{"#"}</th>
                              <th scope="col">{"User"}</th>
                              <th scope="col">{"Occurred"}</th>
                              <th scope="col">{"Data"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((item) => (
                              <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.user_name}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
}

export default LogScreen;
