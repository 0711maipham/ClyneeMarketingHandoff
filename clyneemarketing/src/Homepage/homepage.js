import { Alert, Row, Col, Button } from "react-bootstrap";
import React from "react";
import logo from "../Assets/Clyn_Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dogPic from "../Assets/shutterstock_1577899945sq.jpg";

export default function Homepage() {
  return (
    <>
      {/* <div>
                  <div className="btn-square neumorphic">
                    <FontAwesomeIcon icon={["fab", "facebook"]} />
                  </div>
                  <div className="btn-square neumorphic">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </div>
                  <div className="btn-square neumorphic">
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </div>
                </div> */}
      <Row>
        <Col lg="12" className="hero-img">
          <Row className="mt-5">
            <Col lg="12">
              <div className="header-container">
                <img className="logo" src={logo} />
                <h3 className="subtitle">
                  Cleaning services where you want, whenever you want.
                </h3>
                <div className="learn-more">
                  <span>Learn more</span>
                  <br />
                  <FontAwesomeIcon
                    className="caret bounce"
                    icon={["fas", "caret-down"]}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="row-section">
        <Col>
          <div className="content-container">
            <Col>
              <h3 className="subtitle">Our Mission</h3>
              <h2 className="title">A Title Should Go Here</h2>
              <p>
                Clyn is here to optimize the cleaning industry. For far too
                long, consumers have been overpaying and cleaners have been
                treated as second class citizens. Here at Clyn, we pride
                ourselves on outperforming the established market players in
                operating efficiency and levying the human touch.
              </p>
            </Col>
            <Col md>
              <div className="img-container">
                <img src={dogPic} />
              </div>
            </Col>
          </div>
        </Col>
      </Row>
      <Row className="row-section grey-bg">
        <Col>
          <h2 className="text-center title">How it Works</h2>
          <div className="content-container">
            <Col lg>
              <div className="circle-img step1" />
              <h3 className="subtitle text-center">Step 1</h3>
              <p className="text-center">
                Download the app.
              </p>
            </Col>
            <Col lg>
              <div className="circle-img step2" />
              <h3 className="subtitle text-center">Step 2</h3>
              <p className="text-center">
                Request services.
              </p>
            </Col>
            <Col lg>
              <div className="circle-img step3" />
              <h3 className="subtitle text-center">Step 3</h3>
              <p className="text-center">
                Track progress.
              </p>
            </Col>
            <Col lg>
              <div className="circle-img step4" />
              <h3 className="subtitle text-center">Step 4</h3>
              <p className="text-center">
                Pay and rate your provider.
              </p>
            </Col>
          </div>
        </Col>
      </Row>
      <Row className="row-section">
        <Col>
          <div className="content-container">
            <Col>
              <div className="img-container"></div>
            </Col>
            <Col>
              <h3 className="subtitle">Be Prepared</h3>
              <h2 className="title">
                Hand-Picked and Curated Kits just for You
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
                dictum neque. Interdum et malesuada fames ac ante ipsum primis
                in faucibus. Aenean et interdum sapien. Mauris ultricies, diam
                id scelerisque lobortis, arcu urna gravida elit, sed pulvinar
                risus velit ut tellus. Suspendisse velit nisl, fringilla in dui
                vitae, imperdiet fermentum lectus. Quisque pretium varius
                scelerisque. Praesent molestie maximus ante, a auctor mauris
                commodo vitae.
              </p>
              <Button className="w-100 neumorphic variation2">Buy Here</Button>
            </Col>
          </div>
        </Col>
      </Row>
      <Row className="row-section">
        <Col>
          <h2>Available on Android and iOS</h2>
          <Row>
            <Col>
              <Button className="w-100 neumorphic variation2">Android</Button>
            </Col>
            <Col>
              <Button className="w-100 neumorphic variation2">iOS</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
