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
        <section className="section--aboutus">
          <h2>About the Competition</h2>
          <p className="description">
            We are organizing Online Singing Competition for talented singers
            across Mumbai, India. The platform combines formal judging and
            popular choice to identify and boost the best talent to stardom.
          </p>
        </section>
        <section className="section--why-participate">
          <h2>Why participate?</h2>
          <div>
            <ul>
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
      </>
    );
  }
}

/*
var a = document.getElementsByClassName("html--template")[0].textContent.split("").map(obj => {if(obj != " " && obj != "\n") return `<span>${obj}</span>`; else return obj;})
var p = document.createElement("pre")
p.innerHTML = a.join("")
document.getElementsByClassName("html--template")[0].appendChild(p)
*/

export default HomePage;
