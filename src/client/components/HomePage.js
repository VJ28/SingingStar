import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CustomLink = styled(Link)`
  display: block;
  text-align: center;
  color: white;
  font-size: 20px;
  margin: auto
  width: 100px;
`;

const Contact = styled.div`
  letter-spacing: 1px;
  font-size: 15px;
  margin-top: 4px;
  & > a {
    color: white;
    cursor: pointer;
  }
`;

const Address = styled.div`
  padding-left: 20px;
  line-height: 1.51;
  padding-bottom: 12px;
  color: white;
`;

class HomePage extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <section className="section--intro">
          <h1>Singing Star 2K2K!</h1>
          <p className="description">
            A platform to showcase your singing talent and win a smartphone
            worth ₹15k.
          </p>
        </section>
        <section className="section--about-competition">
          <h2>About the Competition</h2>
          <p className="description">
            We are organizing Online Singing Competition for talented singers
            across Mumbai, India. The platform combines formal judging and
            popular choice to identify and boost the best talent to stardom.
            Successful participation in a singing competition can be a defining
            moment in young singer’s career.
          </p>
        </section>
        <section className="section--why-participate">
          <h2>Why participate?</h2>
          <div>
            <ul>
              <li className="description">No Entry Fee.</li>
              <li className="description">
                Compete from anywhere online as per your convenience.
              </li>
              <li className="description">
                Chance to win a smartphone worth ₹{" "}
                <span style={{ fontSize: "24px" }}>15</span>k.
              </li>
              <li className="description">Chance to record a song @Studio.</li>
              <li className="description">
                Oppotunity to get featured on our youtube channel.
              </li>
            </ul>
          </div>
        </section>
        <section className="section--submit-entry">
          <h2>Submit your entry!</h2>
          <CustomLink to="/register/" title="registration link">
            Click here!
          </CustomLink>
        </section>
        <section className="section--about-us">
          <h2>Contact Us</h2>
          <Address>
            Sangita Patel
            <br />
            BKC Mumbai, Maharashtra, India
            <br />
            Pin: 400051
            <Contact>
              &#9742;: <a href="tel:9619063744">9619063744</a>
            </Contact>
            <Contact>
              &#9993;: <a href="javascript:void">risingvoice@singingstar.com</a>
            </Contact>
          </Address>
        </section>
      </>
    );
  }
}

export default HomePage;
