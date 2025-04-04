import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100vh;
`;

export const LeftSideFade = styled.div`
  background: linear-gradient(to right, rgba(15, 15, 15, 1), 85%, rgba(15, 15, 15, 0));
  height: 100vh;
  width: 60%;
  position: absolute;
  top: 0;
`;

export const InfosContainer = styled.div`
  width: 30%;
  min-height: 40vh;
  position: absolute;
  top: 30vh;
  left: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const HorizontalSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
