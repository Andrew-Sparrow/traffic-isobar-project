import styled from 'styled-components';

const AboutStyle = styled.pre`
  margin: 0;
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: left;
  white-space: pre-line;
`;

function About() {
  return (
    <AboutStyle >
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi,
        id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
      </p>
    </AboutStyle>
  );
}

export default About;
