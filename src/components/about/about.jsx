import styled from 'styled-components';

const AboutStyle = styled.pre`
  margin: 0;
  padding-top: 40px;
  padding-bottom: 40px;
  white-space: pre-line;

  @media ${props => props.theme.media.phone} {
    text-align: justify;
  }

  @media ${props => props.theme.media.tablet} {
    text-align: justify;
  }

  @media ${props => props.theme.media.desktop} {
    width: 572px;
    text-align: left;
  }
`;

function About() {
  return (
    <AboutStyle >
        Пишу на JavaScript.
        Использую React, Redux, styled-components.
    </AboutStyle>
  );
}

export default About;
