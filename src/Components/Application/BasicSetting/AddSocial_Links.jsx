import React, { Fragment, useContext, useState, useEffect } from "react";
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

import {
  Facebookheading,
  Instagramheading,
  Discordheading,
  Twitterheading,
  Telegramheading,
  Whatsappheading,
  Githubheading,
} from "../../../Constant";
// import Uploadfile from "./Uploadfile";
import { useForm } from "react-hook-form";

function AddSocial_Links() {
  const history = useNavigate();
  const project = useContext(ProjectContext);
  const [inpval, setINP] = useState({
    fbLink: "",
    instLink: "",
    discordLink: "",
    twitterLink: "",
    tgLink: "",
    watspLink: "",
    gitLink: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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

    const {
      fbLink,
      instLink,
      discordLink,
      twitterLink,
      tgLink,
      watspLink,
      gitLink,
    } = inpval;

    const res = await fetch("/add_links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fbLink,
        instLink,
        discordLink,
        twitterLink,
        tgLink,
        watspLink,
        gitLink,
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
  const getdata = async () => {
    const res = await fetch("/get_links", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setINP({
        fbLink: data.basic_settings_facebook_link,
        instLink: data.basic_settings_instagram_link,
        discordLink: data.basic_settings_discord_link,
        twitterLink: data.basic_settings_twitter_link,
        tgLink: data.basic_settings_telegram_link,
        watspLink: data.basic_settings_whatsapp_link,
        gitLink: data.basic_settings_github_link,
      });
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  return (
    <Fragment>
      <Breadcrumbs
        parent="Basic Setting"
        title="Add Social Links"
        mainTitle="Add Social Links"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{Facebookheading}</Label>
                        <input
                          className="form-control"
                          type="text"
                          name="fbLink"
                          placeholder="Add heading "
                          value={inpval.fbLink}
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
                      <FormGroup>
                        <Label>{Instagramheading}</Label>
                        <input
                          className="form-control"
                          type="text"
                          name="instLink"
                          placeholder="Add heading "
                          value={inpval.instLink}
                          onChange={(e) => setdata(e)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{Discordheading}</Label>
                        <input
                          className="form-control"
                          type="text"
                          name="discordLink"
                          placeholder="Add heading"
                          value={inpval.discordLink}
                          onChange={setdata}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{Twitterheading}</Label>
                        <input
                          className="form-control"
                          type="text"
                          name="twitterLink"
                          placeholder="Add heading"
                          value={inpval.twitterLink}
                          onChange={(e) => setdata(e)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{Telegramheading}</Label>
                        <input
                          className="form-control"
                          type="text"
                          name="tgLink"
                          placeholder="Add heading *"
                          value={inpval.tgLink}
                          onChange={(e) => setdata(e)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{Whatsappheading}</Label>
                        <input
                          className="form-control"
                          type="text"
                          name="watspLink"
                          placeholder="Add heading"
                          value={inpval.watspLink}
                          onChange={(e) => setdata(e)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{Githubheading}</Label>
                        <input
                          className="form-control"
                          type="text"
                          name="gitLink"
                          placeholder="Add heading"
                          value={inpval.gitLink}
                          onChange={(e) => setdata(e)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                      {inpval.fbLink===""||inpval.discordLink===""||inpval.gitLink===""||inpval.instLink===""||inpval.tgLink===""||inpval.twitterLink===""||inpval.watspLink===""}
                        <Button onClick={addinpdata}>{Add}</Button>
                  
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

export default AddSocial_Links;
