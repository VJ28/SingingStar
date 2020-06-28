import React from "react";
import styled from "styled-components";

let H3 = styled.h3`
  padding: 8px 12px;
  letter-spacing: 1px;
  word-spacing: 4px;
  color: blue;
`;

function Winners() {
  return (
    <>
      <div className="online-comp-img"></div>
      <div className="fm-img">
        <div className="girl-img"></div>
        <div className="man-img"></div>
      </div>
      <H3>Winners will be announed on July&nbsp;12th,&nbsp;2020.</H3>
    </>
  );
}

export default Winners;
