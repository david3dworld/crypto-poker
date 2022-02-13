import styled, { css } from "styled-components";

export default styled.div<{ active?: boolean }>`
   background: #2d3746;
   color: white;
   font-size: 10px;
   text-align: center;
   padding: 0.5rem;
   border-radius: 1px;
   ${(p) =>
      p.active
         ? css`
              background-color: #57411e;
              border: solid 0.1px rgba(255, 154, 0, 0.93);
           `
         : ""}
`;
