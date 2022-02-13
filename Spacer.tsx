import styled from "styled-components";

export default styled.div<{ spacing: string; elements: string }>`
   display: grid;
   grid-template-columns: repeat(${(p) => p.elements}, auto);
   grid-gap: ${(p) => p.spacing};
   place-items: center;
`;
