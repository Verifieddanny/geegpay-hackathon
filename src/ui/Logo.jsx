import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 2.5rem;
  width: 2.5rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/geepay.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
