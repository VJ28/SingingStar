import React from "react";
import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Li = styled.li`
  border: 1px solid gray;
  margin-bottom: 8px !important;
  margin-top: 8px !important;
  width: 95%;
  @media (min-width: 768px) {
    max-width: 320px;
  }
  margin: 0 auto;
`;

const HeadingBlock = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 8px;
  font-family: sans-serif;
  background-color: cadetblue;
`;

const FloatRight = styled.div`
  font-size: 16px;
  float: right;
  color: antiquewhite;
`;

const InfoBlock = styled.div`
  padding: 8px;
  background: aliceblue;
  border-bottom: 1px solid gainsboro;
`;

const Audio = styled.audio`
  height: 40px;
`;

const Label = styled.label`
  font-style: oblique;
  font-weight: 500;
`;
class ContestantList extends React.Component {
  state = {
    contestantList: [],
  };
  componentDidMount() {
    fetch("/getAll")
      .then((res) => res.json())
      .then((result) => {
        this.setState({ contestantList: result });
      });
  }

  shortList = (event) => {
    let contact = event.target.dataset.contact;
    debugger;
    alert(contact);
  };

  render() {
    return this.state.contestantList.length ? (
      <UL>
        {this.state.contestantList.map((contestant, index) => (
          <Li key={index + 1}>
            <HeadingBlock>
              {contestant.name}
              <FloatRight>
                <a onClick={this.shortList} data-contact={contestant.contact}>
                  ShortList
                </a>
              </FloatRight>
            </HeadingBlock>
            <InfoBlock key={"contact" + index}>
              <Label>Contact:</Label>{" "}
              <a href={`tel:${contestant.contact}`}>{contestant.contact}</a>
            </InfoBlock>
            <InfoBlock key={"email" + index}>
              <Label>Email:</Label> {contestant.email}
            </InfoBlock>
            <InfoBlock key={"city" + index}>
              <Label>City:</Label> {contestant.city}
            </InfoBlock>
            <InfoBlock key={"audio" + index}>
              <Audio controls>
                <source src={contestant.filename} type="audio/mp3" />
              </Audio>
            </InfoBlock>
          </Li>
        ))}
      </UL>
    ) : (
      "No Contestant Found"
    );
  }
}

export default ContestantList;
