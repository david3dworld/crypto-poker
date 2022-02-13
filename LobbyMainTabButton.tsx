import styled, { css } from "styled-components";
import LobbyActiveTab from "../images/LobbyActiveTab.svg";
import LobbyInActiveTab from "../images/LobbyInActiveTab.svg";
export default styled.div<{ active?: boolean }>`
   padding: 0.75em 1.125em;
   font-size: 1.125rem;
   font-weight: 500;
   color: white;
   cursor:pointer;
   background-image: url(${LobbyInActiveTab});
   background-size: cover;
   background-repeat: no-repeat;
   text-align: center;
   font-family: Montserrat;
   ${(p) =>
      p.active
         ? css`
              background-image: url(${LobbyActiveTab});
           `
         : ""}
   @media(max-width: 800px) {
      font-size: 0.8rem;
   }
`;
