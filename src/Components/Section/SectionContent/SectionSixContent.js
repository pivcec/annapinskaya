import React from "react";
import styled from "styled-components";

const Video = styled.div`
  text-align: center;
`;

const SectionSixContent = () => {
  return (
    <>
      <Video>
        <iframe
          src="https://player.vimeo.com/video/184972437?color=c29b01&title=0&byline=0&portrait=0"
          title="Cosmotheca Dreamhous"
          width="350"
          height="148"
          frameBorder="0"
        ></iframe>
        <p>
          <a href="https://vimeo.com/184972437">Cosmotheca Dreamhouse</a> from{" "}
          <a href="https://vimeo.com/rakshaworld">Vladimir Raksh&aacute;</a> on{" "}
          <a href="https://vimeo.com">Vimeo</a>.
        </p>
      </Video>
      <Video>
        <iframe
          src="https://player.vimeo.com/video/230840816?color=030303&title=0&byline=0&portrait=0"
          title="Goods Market Place Commercial Director's Cut"
          width="350"
          height="197"
          frameBorder="0"
        ></iframe>
        <p>
          <a href="https://vimeo.com/230840816">
            Goods Market Place Commercial Director&#039;s Cut
          </a>{" "}
          from{" "}
          <a href="https://vimeo.com/rakshaworld">Vladimir Raksh&aacute;</a> on{" "}
          <a href="https://vimeo.com">Vimeo</a>.
        </p>
      </Video>
    </>
  );
};

export default SectionSixContent;
