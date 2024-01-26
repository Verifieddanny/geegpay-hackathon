import { createContext, useContext } from "react";
import styled from "styled-components";
import { useDarkMode } from "../context/UseDarkModeContext";

const StyledTable = styled.div`
  border: 1px solid #edf2f7;

  font-size: 1.4rem;
  background-color: #fff;
  border-radius: 14px;
  overflow: hidden;
  height: 100%;

  &.dark {
    background-color: #0d062d;
  }
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.4rem;
  align-items: center;
  transition: none;
`;
// const CommonRow = styled.div`
//   display: grid;
//   grid-template-columns: ${(props) => props.columns};
//   column-gap: 2.4rem;
//   align-items: center;
//   transition: none;
// `;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  border-bottom: 1px solid #edf2f6;

  letter-spacing: 0.4px;
  font-weight: 500;
  color: var(--60, #9ca4ab);
`;

const StyledRow = styled(CommonRow)`
  padding: 1.6rem 2.4rem;

  border-bottom: 1px solid #edf2f6;

  letter-spacing: 0.4px;
  font-weight: 500;
  color: var(--60, #9ca4ab);
`;

// const StyledRow = styled(CommonRow)`
//   padding: 1.2rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid #edf2f6;
//   }
// `;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext();
function Table({ columns, children }) {
  const { isDarkMode } = useDarkMode();

  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table" className={isDarkMode ? "dark" : ""}>
        {children}
      </StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}
function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}
function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment 😓</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
