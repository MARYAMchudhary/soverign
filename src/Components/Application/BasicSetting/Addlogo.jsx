import React, { Fragment, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Button,
} from "reactstrap";
import { SelectSingleImageUpload } from "../../../Constant";
import { Breadcrumbs, Btn, Image } from "../../../AbstractElements";
import { NavLink, useParams, useHistory } from "react-router-dom";
import Files from "react-files";
import axios from "axios";
function Addlogo() {
  const [file, setFile] = useState();
  const [showData, setshowData] = useState({});

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };
  //Get data

  const getUserData = async () => {
    const res = await axios.get("/getuser", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setshowData(res.data);
    // if (res.data.status === 201) {

    // console.log(showData);
    // } else {
    //   console.log("error");
    // }
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("photo", file);
    try {
      const res = await axios.post("/upload_logo", formData);
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <Fragment>
      <Breadcrumbs
        mainTitle="Image Upload"
        parent="Basic Setting"
        title="Uploads"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{SelectSingleImageUpload}</h5>
              </CardHeader>
              <CardBody className="fileUploader">
                <div className="files-gallery">
                  <img
                    src={"../../../../adminpanel_backend/nodeassets/16679309263511650530062.jpg"}
                    alt=""
                  />      
                </div>
      
                <div className="d-flex justify-content-center">
                  <input
                    type="file"
                    className="file-input"
                    name="photo"
                    onChange={saveFile}
                  />
                  <Button onClick={uploadFile}>Upload</Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Addlogo;
