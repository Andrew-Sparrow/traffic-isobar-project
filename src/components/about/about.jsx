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
      At vero eos et accusamus et iusto odio dignissimos ducimus qui
      blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
      et quas molestias excepturi sint occaecati cupiditate non provident,
      similique sunt in culpa qui officia deserunt mollitia animi,
      id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
    </AboutStyle>
  );
}

export default About;
