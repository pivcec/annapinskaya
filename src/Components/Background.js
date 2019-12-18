import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: url(${props => props.backgroundImage});
  min-height: 500px;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
  @media only screen and (max-width: 700px) {
    background-attachment: scroll !important;
  }
`;

const Caption = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  text-align: center;
  top: 20%;
  top: ${props => (props.main ? "20%" : "50%")};
`;

const Title = styled.span`
  color: #fff;
  padding: 18px;
  font-size: 1em;
  letter-spacing: 10px;
`;

const Background = props => {
  return (
    <>
      <Container backgroundImage={props.backgroundImage}>
        <Caption main={props.isMainCaption}>
          <Title main={props.isMainTitle}>{props.title}</Title>
        </Caption>
      </Container>
    </>
  );
};

export default Background;
