import styled from "styled-components";

const Tag = styled.span`
  width: fit-content;

  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  color: var(--color-${(props) => props.type}-700);
`;

export default Tag;
