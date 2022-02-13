import styled from "styled-components";

export default styled.input`
   padding: 0.75rem 1rem;
   font-size: 1.25rem;
   line-height: 1.5;
   color: #495057;
   border: 1px solid #becad6;
   background-color: #fff;
   box-shadow: none;
   will-change: border-color, box-shadow;
   transition: box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06),
      border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
   width: 100%;
   border-radius: 2px !important;
   outline: none !important;
`;
